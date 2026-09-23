import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import './AdminDashboard.css';

export default function AdminDashboard({ allModulesData = [] }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [modulesProgress, setModulesProgress] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAdminDashboardData() {
      setLoading(true);
      const currentUser = auth.currentUser;

      // 1. Busca os dados do perfil do usuário (Firestore ou LocalStorage)
      let currentProfile = null;

      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userSnap = await getDoc(userDocRef);

          if (userSnap.exists()) {
            currentProfile = userSnap.data();
          }
        } catch (error) {
          console.error("Erro ao buscar perfil do Firestore:", error);
        }
      }

      if (!currentProfile) {
        currentProfile = JSON.parse(localStorage.getItem('user_identification') || 'null');
      }

      setUserData(currentProfile);

      // 2. Busca as respostas dos módulos salvas no Firestore
      const remoteAnswersMap = {};

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

      // 3. Monta o progresso de cada módulo
      const userPrefix = currentProfile?.nome
        ? currentProfile.nome.trim().toLowerCase().replace(/\s+/g, '_')
        : 'default_user';

      const progress = allModulesData.map((mod) => {
        let savedAnswers = remoteAnswersMap[mod.id];

        // Fallback para respostas salvas localmente no localStorage
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
    }

    fetchAdminDashboardData();
  }, [allModulesData]);

  // Ação para deslogar
  const handleLogout = async () => {
    if (window.confirm("Deseja realmente sair do Painel?")) {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Erro ao deslogar no Firebase:", error);
      }

      localStorage.removeItem('admin_authenticated');
      localStorage.removeItem('user_session_active');

      navigate('/admin-login');
    }
  };

  const grandTotalQuestions = modulesProgress.reduce((acc, m) => acc + m.totalQuestions, 0);
  const grandTotalAnswered = modulesProgress.reduce((acc, m) => acc + m.answeredCount, 0);
  const grandTotalCorrect = modulesProgress.reduce((acc, m) => acc + m.correctCount, 0);

  const completedModulesCount = modulesProgress.filter((m) => m.isCompleted).length;
  const overallCompletionPercentage = grandTotalQuestions > 0 ? Math.round((grandTotalAnswered / grandTotalQuestions) * 100) : 0;
  const overallAccuracy = grandTotalAnswered > 0 ? Math.round((grandTotalCorrect / grandTotalAnswered) * 100) : 0;

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>Carregando dados do painel...</div>;
  }

  return (
    <div className="admin-container">
      {/* Cabeçalho */}
      <div className="admin-header">
        <div>
          <h1>📊 Painel de Monitoramento (Admin)</h1>
          <p>Acompanhamento de progresso e aproveitamento</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn-back-home" onClick={() => navigate('/')}>← Voltar à Home</button>
          <button className="btn-logout" onClick={handleLogout}>🚪 Sair / Deslogar</button>
        </div>
      </div>

      {/* Cartão de Perfil */}
      <div className="admin-card user-profile-card">
        <h2>👤 Dados do Usuário Cadastrado</h2>
        {userData ? (
          <div className="user-details">
            <p><strong>Nome:</strong> {userData.nome || 'Não informado'}</p>
            <p><strong>Idade:</strong> {userData.idade ? `${userData.idade} anos` : 'Não informada'}</p>
            <p><strong>Área / Curso:</strong> {userData.curso || 'Não informado'}</p>
            <p><strong>Objetivo:</strong> {userData.objetivo || 'Não informado'}</p>
          </div>
        ) : (
          <p className="no-user-warning">Nenhum usuário identificado no momento.</p>
        )}
      </div>

      {/* Visão Geral */}
      <div className="admin-metrics-grid">
        <div className="metric-card">
          <span className="metric-label">Módulos Concluídos</span>
          <span className="metric-number">{completedModulesCount} de {allModulesData.length}</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Progresso Geral</span>
          <span className="metric-number">{overallCompletionPercentage}%</span>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${overallCompletionPercentage}%` }}></div>
          </div>
        </div>
        <div className="metric-card">
          <span className="metric-label">Aproveitamento Médio</span>
          <span className="metric-number">{overallAccuracy}%</span>
          <span className="metric-subtext">{grandTotalCorrect} acertos em {grandTotalAnswered} respondidas</span>
        </div>
      </div>

      {/* Status por Módulo */}
      <div className="admin-card">
        <h2>📚 Detalhamento por Módulo</h2>
        <div className="modules-list">
          {modulesProgress.map((mod) => (
            <div key={mod.id} className="module-status-item">
              <div className="module-info">
                <h3>Módulo {mod.id}: {mod.title}</h3>
                <span className={`status-badge ${mod.isCompleted ? 'completed' : 'in-progress'}`}>
                  {mod.isCompleted ? '✓ Concluído' : `Em andamento (${mod.answeredCount}/${mod.totalQuestions})`}
                </span>
              </div>

              <div className="module-stats">
                <div>
                  <small>Respondidas:</small>
                  <p>{mod.answeredCount} / {mod.totalQuestions}</p>
                </div>
                <div>
                  <small>Acertos:</small>
                  <p>{mod.correctCount}</p>
                </div>
                <div>
                  <small>Aproveitamento:</small>
                  <p><strong>{mod.accuracy}%</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}