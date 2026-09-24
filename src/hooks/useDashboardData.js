import { useState, useEffect } from 'react';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../services/firebase';

export function useDashboardData(allModulesData) {
  const [userData, setUserData] = useState(null);
  const [modulesProgress, setModulesProgress] = useState([]);
  const [allUsersRanking, setAllUsersRanking] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeResponses = () => {};
    let unsubscribeUser = () => {};
    let unsubscribeRanking = () => {};

    async function initDashboard() {
      setLoading(true);
      const currentUser = auth.currentUser;
      let currentProfile = null;

      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);

          // Escuta perfil do usuário atual
          unsubscribeUser = onSnapshot(userDocRef, (userSnap) => {
            if (userSnap.exists()) setUserData(userSnap.data());
          });

          const userSnap = await getDoc(userDocRef);
          if (userSnap.exists()) currentProfile = userSnap.data();
        } catch (error) {
          console.error("Erro ao buscar perfil do Firestore:", error);
        }

        // Escuta ranking geral
        try {
          const usersRef = collection(db, 'users');
          unsubscribeRanking = onSnapshot(usersRef, (snapshot) => {
            const usersList = [];
            snapshot.forEach((docSnap) => {
              usersList.push({ id: docSnap.id, ...docSnap.data() });
            });
            usersList.sort((a, b) => (b.totalXP || 0) - (a.totalXP || 0));
            setAllUsersRanking(usersList);
          });
        } catch (error) {
          console.error("Erro ao carregar ranking geral:", error);
        }
      }

      if (!currentProfile) {
        currentProfile = JSON.parse(localStorage.getItem('user_identification') || 'null');
        setUserData(currentProfile);
      }

      const userPrefix = currentProfile?.nome
        ? currentProfile.nome.trim().toLowerCase().replace(/\s+/g, '_')
        : 'default_user';

      const calculateProgress = (remoteAnswersMap = {}) => {
        const progress = allModulesData.map((mod) => {
          let savedAnswers = remoteAnswersMap[mod.id];

          if (!savedAnswers) {
            const storageKey = `${userPrefix}_module_${mod.id}_quiz_answers`;
            try {
              savedAnswers = JSON.parse(localStorage.getItem(storageKey) || '{}');
            } catch (e) {
              savedAnswers = {};
            }
          }

          let moduleTotalQuestions = 0;
          let moduleAnsweredCount = 0;
          let moduleCorrectCount = 0;

          (mod.sections || []).forEach((sec) => {
            const quizzesList = sec.quizzes || (sec.quiz ? [sec.quiz] : []);

            quizzesList.forEach((q, qIdx) => {
              moduleTotalQuestions++;
              const quizKey = `${sec.id}_q${qIdx}`;
              const userAnswer = savedAnswers ? savedAnswers[quizKey] : undefined;

              if (userAnswer !== undefined) moduleAnsweredCount++;
              if (userAnswer && userAnswer === q.correctAnswer) moduleCorrectCount++;
            });
          });

          return {
            id: mod.id,
            title: mod.title,
            totalQuestions: moduleTotalQuestions,
            answeredCount: moduleAnsweredCount,
            correctCount: moduleCorrectCount,
            isCompleted: moduleTotalQuestions > 0 && moduleAnsweredCount === moduleTotalQuestions,
            accuracy: moduleAnsweredCount > 0 ? Math.round((moduleCorrectCount / moduleAnsweredCount) * 100) : 0
          };
        });

        setModulesProgress(progress);
        setLoading(false);
      };

      if (currentUser) {
        const responsesRef = collection(db, 'users', currentUser.uid, 'module_responses');
        unsubscribeResponses = onSnapshot(
          responsesRef,
          (querySnapshot) => {
            const remoteAnswersMap = {};
            querySnapshot.forEach((docSnap) => {
              const data = docSnap.data();
              if (data.moduleId && data.answers) {
                remoteAnswersMap[data.moduleId] = data.answers;
              }
            });
            calculateProgress(remoteAnswersMap);
          },
          (error) => {
            console.error("Erro ao escutar respostas:", error);
            calculateProgress({});
          }
        );
      } else {
        calculateProgress({});
      }
    }

    initDashboard();

    return () => {
      unsubscribeResponses();
      unsubscribeUser();
      unsubscribeRanking();
    };
  }, [allModulesData]);

  // Totais consolidados
  const grandTotalQuestions = modulesProgress.reduce((acc, m) => acc + m.totalQuestions, 0);
  const grandTotalAnswered = modulesProgress.reduce((acc, m) => acc + m.answeredCount, 0);
  const grandTotalCorrect = modulesProgress.reduce((acc, m) => acc + m.correctCount, 0);

  const completedModulesCount = modulesProgress.filter((m) => m.isCompleted).length;
  const overallCompletionPercentage = grandTotalQuestions > 0 ? Math.round((grandTotalAnswered / grandTotalQuestions) * 100) : 0;
  const overallAccuracy = grandTotalAnswered > 0 ? Math.round((grandTotalCorrect / grandTotalAnswered) * 100) : 0;

  return {
    userData,
    modulesProgress,
    allUsersRanking,
    loading,
    metrics: {
      completedModulesCount,
      overallCompletionPercentage,
      overallAccuracy,
      grandTotalCorrect,
      grandTotalAnswered
    }
  };
}