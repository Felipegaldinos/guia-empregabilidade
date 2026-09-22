import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

export default function AdminDashboard({ allModulesData }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [modulesProgress, setModulesProgress] = useState([]);

  useEffect(() => {
    // 1. Busca os dados cadastrados pelo usuário atual
    const savedUser = JSON.parse(localStorage.getItem('user_identification') || 'null');
    setUserData(savedUser);

    // Cria um identificador limpo do usuário (ex: "joao_silva")
    const userPrefix = savedUser?.nome 
      ? savedUser.nome.trim().toLowerCase().replace(/\s+/g, '_') 
      : 'default_user';

    const progress = allModulesData.map((mod) => {
      // 2. Chave isolada por usuário
      const storageKey = `${userPrefix}_module_${mod.id}_quiz_answers`;
      const savedAnswers = JSON.parse(localStorage.getItem(storageKey) || '{}');

      let moduleTotalQuestions = 0;
      let moduleAnsweredCount = 0;
      let moduleCorrectCount = 0;

      mod.sections.forEach((sec) => {
        const quizzesList = sec.quizzes || (sec.quiz ? [sec.quiz] : []);

        quizzesList.forEach((q, qIdx) => {
          moduleTotalQuestions++;
          const quizKey = `${sec.id}_q${qIdx}`;
          const userAnswer = savedAnswers[quizKey];

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
  }, [allModulesData]);

  // Ação para deslogar
 const handleLogout = () => {
  if (window.confirm("Deseja realmente sair do Painel?")) {
    // 1. Desloga o admin
    localStorage.removeItem('admin_authenticated');
    
    // 2. Encerra a sessão ativa (SEM apagar os dados de user_identification)
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

      {/* Cartão de Perfil Atualizado */}
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