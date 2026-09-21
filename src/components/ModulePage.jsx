import { useState, useEffect } from 'react';
import './ModulePage.css';
import img from '../assets/module-hero.png';

export default function ModulePage({ moduleData, onNextModule }) {
  const [openIndex, setOpenIndex] = useState(0);

  // Armazena as respostas da sessão atual do usuário: { [quizUniqueKey]: optionIdSelected }
  const [answers, setAnswers] = useState({});

  // Chave base para persistência no localStorage
  const STORAGE_KEY = `module_${moduleData.id}_quiz_answers`;

  // Carrega respostas salvas ao iniciar a página
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setAnswers(JSON.parse(saved));
      } catch (e) {
        console.error("Erro ao carregar respostas do localStorage", e);
      }
    }
  }, [STORAGE_KEY]);

  // Calcula o número total de questões existentes em todas as seções
  const totalQuestions = moduleData.sections.reduce((acc, sec) => {
    return acc + (sec.quizzes ? sec.quizzes.length : (sec.quiz ? 1 : 0));
  }, 0);

  // Quantidade de questões já respondidas
  const answeredCount = Object.keys(answers).length;
  const isAllAnswered = totalQuestions > 0 && answeredCount === totalQuestions;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToContent = () => {
    const element = document.getElementById('faq-accordion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Processa a seleção de uma opção de resposta
  const handleSelectOption = (quizKey, selectedOptionId) => {
    if (answers[quizKey]) return; // Impede alterar caso já respondida na sessão atual

    const newAnswers = { ...answers, [quizKey]: selectedOptionId };
    setAnswers(newAnswers);

    // Salva no localStorage caso ainda não haja um registro definitivo salvo
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newAnswers));
    }
  };

  // Reinicia a visualização das questões na tela sem apagar o histórico do localStorage
  const handleResetQuiz = () => {
    setAnswers({});
  };

  // Trata o clique de avanço com validação
  const handleNextClick = () => {
    if (isAllAnswered) {
      onNextModule();
    } else {
      alert(`Responda todas as questões para liberar o próximo módulo (${answeredCount}/${totalQuestions})`);
    }
  };

  return (
    <div className="module-page-container">
      {/* 1. HERO CARD SUPERIOR */}
      <header className="hero-card">
        <div className="hero-content">
          <span className="hero-badge">{moduleData.tag}</span>
          <h1 className="hero-titl">{moduleData.title}</h1>
          <p className="hero-subtitl">{moduleData.subtitle}</p>
          <button className="btn-hero-action" onClick={scrollToContent}>
            Começar módulo →
          </button>
        </div>
        <div className="hero-illustration">
          <img src={img} alt={moduleData.title} />
        </div>
      </header>

      {/* PAINEL DE PROGRESSO & REINÍCIO DOS QUIZZES */}
      <div className="quiz-progress-panel" style={{ margin: '20px 0', padding: '15px', background: '#f5f5f5', borderRadius: '8px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>
          Progresso das Atividades: {answeredCount} de {totalQuestions} respondidas
        </p>
        {isAllAnswered && (
          <button 
            onClick={handleResetQuiz}
            style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
          >
            Refazer todas as questões
          </button>
        )}
      </div>

      {/* 2. ACCORDION DAS SEÇÕES DO MÓDULO */}
      <main className="faq-wrapper" id="faq-accordion">
        {moduleData.sections.map((sec, index) => {
          const isOpen = openIndex === index;
          const quizzesList = sec.quizzes || (sec.quiz ? [sec.quiz] : []);

          return (
            <article className={`faq-item ${isOpen ? 'active' : ''}`} key={sec.id}>
              {/* Botão do Cabeçalho */}
              <button 
                className="faq-header" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <div className="faq-title-group">
                  <div className="faq-icon-box">
                    <span>{sec.id}</span>
                  </div>
                  <div className="faq-text-group">
                    <h2>{sec.id}. {sec.title}</h2>
                    <p>{sec.description}</p>
                  </div>
                </div>
                <div className="faq-toggle-icon">
                  {isOpen ? '−' : '+'}
                </div>
              </button>

              {/* Corpo da Seção */}
              {isOpen && (
                <div className="faq-body">
                  {quizzesList.length > 0 ? (
                    <div className="faq-quizzes-wrapper" style={{ marginTop: '10px' }}>
                      <h3>📝 Questões de Fixação</h3>
                      {quizzesList.map((q, qIdx) => {
                        const quizKey = `${sec.id}_q${qIdx}`;
                        const selectedOption = answers[quizKey];
                        const isAnswered = Boolean(selectedOption);

                        return (
                          <div key={quizKey} className="quiz-box" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                            <p style={{ fontWeight: 'bold' }}>Questão {qIdx + 1}: {q.statement}</p>
                            <div className="quiz-options" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {q.options.map((opt) => {
                                let btnStyle = { padding: '8px 12px', textAlign: 'left', cursor: isAnswered ? 'default' : 'pointer', borderRadius: '4px', border: '1px solid #ccc' };

                                if (isAnswered) {
                                  if (opt.id === q.correctAnswer) {
                                    btnStyle.backgroundColor = '#d4edda';
                                    btnStyle.borderColor = '#c3e6cb';
                                    btnStyle.color = '#155724';
                                  } else if (opt.id === selectedOption) {
                                    btnStyle.backgroundColor = '#f8d7da';
                                    btnStyle.borderColor = '#f5c6cb';
                                    btnStyle.color = '#721c24';
                                  }
                                }

                                return (
                                  <button
                                    key={opt.id}
                                    style={btnStyle}
                                    disabled={isAnswered}
                                    onClick={() => handleSelectOption(quizKey, opt.id)}
                                  >
                                    {opt.label}
                                  </button>
                                );
                              })}
                            </div>

                            {/* Feedback explicativo exibido após responder */}
                            {isAnswered && (
                              <div className="quiz-explanation" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#e9ecef', borderRadius: '4px' }}>
                                <p style={{ margin: 0 }}>
                                  <strong>{selectedOption === q.correctAnswer ? '✓ Correto!' : '✕ Incorreto!'}</strong> {q.feedback || q.explanation}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p style={{ color: '#666', fontStyle: 'italic' }}>Nenhuma questão disponível nesta seção.</p>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </main>

      {/* 3. RODAPÉ FIXO DE TRANSIÇÃO DE MÓDULO */}
      <footer className="next-module-banner">
        <div className="banner-text">
          <span className="rocket-icon">🚀</span>
          <div>
            <h3>Pronto para o próximo módulo?</h3>
            <p>
              {isAllAnswered 
                ? "Parabéns! Você concluiu todas as questões deste módulo."
                : `Responda todas as questões para desbloquear. (${answeredCount}/${totalQuestions})`}
            </p>
          </div>
        </div>
        <button 
          className="btn-next-module" 
          onClick={handleNextClick}
          disabled={!isAllAnswered}
          style={{
            opacity: isAllAnswered ? 1 : 0.6,
            cursor: isAllAnswered ? 'pointer' : 'not-allowed'
          }}
        >
          {isAllAnswered ? "Próximo módulo →" : `Bloqueado (${answeredCount}/${totalQuestions})`}
        </button>
      </footer>
    </div>
  );
}