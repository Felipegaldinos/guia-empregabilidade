import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FinalResult.css';

export default function FinalResult({ allModulesData }) {
  const navigate = useNavigate();

  // 1. Calcula o total de questões e acertos de TODOS os módulos
  let totalQuestions = 0;
  let totalAnswered = 0;
  let correctAnswersCount = 0;

  allModulesData.forEach((mod) => {
    const storageKey = `module_${mod.id}_quiz_answers`;
    const savedAnswers = JSON.parse(localStorage.getItem(storageKey) || '{}');

    mod.sections.forEach((sec) => {
      const quizzesList = sec.quizzes || (sec.quiz ? [sec.quiz] : []);
      
      quizzesList.forEach((q, qIdx) => {
        totalQuestions++;
        const quizKey = `${sec.id}_q${qIdx}`;
        const userAnswer = savedAnswers[quizKey];

        if (userAnswer !== undefined) {
          totalAnswered++;
        }

        if (userAnswer && userAnswer === q.correctAnswer) {
          correctAnswersCount++;
        }
      });
    });
  });

  // 2. Trava de segurança: Se não respondeu TUDO, redireciona para a Home
  const isAllModulesCompleted = totalQuestions > 0 && totalAnswered === totalQuestions;

  useEffect(() => {
    if (!isAllModulesCompleted) {
      alert("Você precisa completar as questões de todos os módulos para acessar o resultado final!");
      navigate('/');
    }
  }, [isAllModulesCompleted, navigate]);

  // Se não concluiu tudo, não renderiza a tela enquanto redireciona
  if (!isAllModulesCompleted) {
    return null;
  }

  const percentage = totalQuestions > 0 
    ? Math.round((correctAnswersCount / totalQuestions) * 100) 
    : 0;

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
            <span className="metric-value">{correctAnswersCount}/{totalQuestions}</span>
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