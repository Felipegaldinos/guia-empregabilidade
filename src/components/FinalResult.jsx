import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import './FinalResult.css';

export default function FinalResult({ allModulesData = [] }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalQuestions: 0,
    totalAnswered: 0,
    correctAnswersCount: 0
  });

  useEffect(() => {
    async function calculateResults() {
      setLoading(true);

      const currentUser = auth.currentUser;
      const remoteAnswersMap = {};

      // 1. Busca as respostas gravadas no Firestore para o usuário
      if (currentUser) {
        try {
          const querySnapshot = await getDocs(
            collection(db, 'users', currentUser.uid, 'module_responses')
          );
          querySnapshot.forEach((docSnap) => {
            const data = docSnap.data();
            if (data.moduleId && data.answers) {
              remoteAnswersMap[data.moduleId] = data.answers;
            }
          });
        } catch (error) {
          console.error("Erro ao buscar respostas do Firestore:", error);
        }
      }

      let totalQuestions = 0;
      let totalAnswered = 0;
      let correctAnswersCount = 0;

      // 2. Itera sobre todos os módulos do curso
      allModulesData.forEach((mod) => {
        let savedAnswers = remoteAnswersMap[mod.id];

        // Fallback local se não houver dados no Firestore
        if (!savedAnswers) {
          const userPrefix = currentUser?.displayName
            ? currentUser.displayName.trim().toLowerCase().replace(/\s+/g, '_')
            : 'default_user';
          const storageKey = `${userPrefix}_module_${mod.id}_quiz_answers`;

          try {
            savedAnswers = JSON.parse(localStorage.getItem(storageKey) || '{}');
          } catch (e) {
            savedAnswers = {};
          }
        }

        (mod.sections || []).forEach((sec) => {
          const quizzesList = sec.quizzes || (sec.quiz ? [sec.quiz] : []);

          quizzesList.forEach((q, qIdx) => {
            totalQuestions++;
            const quizKey = `${sec.id}_q${qIdx}`;
            const userAnswer = savedAnswers ? savedAnswers[quizKey] : undefined;

            if (userAnswer !== undefined) {
              totalAnswered++;
            }

            if (userAnswer && userAnswer === q.correctAnswer) {
              correctAnswersCount++;
            }
          });
        });
      });

      setStats({
        totalQuestions,
        totalAnswered,
        correctAnswersCount
      });

      setLoading(false);
    }

    calculateResults();
  }, [allModulesData]);

  const isAllModulesCompleted =
    stats.totalQuestions > 0 && stats.totalAnswered === stats.totalQuestions;

  useEffect(() => {
    if (!loading && !isAllModulesCompleted && allModulesData.length > 0) {
      alert("Você precisa completar as questões de todos os módulos para acessar o resultado final!");
      navigate('/');
    }
  }, [loading, isAllModulesCompleted, allModulesData.length, navigate]);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>Carregando resultado final...</div>;
  }

  if (!isAllModulesCompleted) {
    return null;
  }

  const percentage = Math.round((stats.correctAnswersCount / stats.totalQuestions) * 100);

  const getFeedbackMessage = () => {
    if (percentage >= 80) return "🔥 Desempenho Excelente! Você está mais do que preparado para enfrentar seus desafios.";
    if (percentage >= 60) return "👍 Bom trabalho! Recomenda-se dar uma olhada nas questões que errou para fixar ainda melhor.";
    return "📚 Vale a pena refazer os módulos para consolidar o conteúdo aprendido.";
  };

  return (
    <div className="final-result-container">
      <div className="result-card">
        <div className="result-icon">🏆</div>
        <h1>Parabéns pela Conclusão!</h1>
        <p className="subtitle">Você completou com sucesso todos os módulos do curso.</p>

        <div className="metrics-grid">
          <div className="metric-box">
            <span className="metric-value">{allModulesData.length}</span>
            <span className="metric-label">Módulos Concluídos</span>
          </div>

          <div className="metric-box">
            <span className="metric-value">{percentage}%</span>
            <span className="metric-label">Taxa de Acerto Geral</span>
          </div>

          <div className="metric-box">
            <span className="metric-value">{stats.correctAnswersCount}/{stats.totalQuestions}</span>
            <span className="metric-label">Questões Corretas</span>
          </div>
        </div>

        <div className="feedback-box">
          <p>{getFeedbackMessage()}</p>
        </div>

        <div className="result-actions">
          <button className="btn-restart" onClick={() => navigate('/')}>
            🔄 Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
}