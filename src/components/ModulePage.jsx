import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, deleteDoc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import './ModulePage.css';
import img from '../assets/module-hero.png';

// Mapeamento oficial dos Selos da Plataforma
const MODULE_BADGES = {
  1: { id: 1, title: 'Perfil Campeão', icon: '🏅' },
  2: { id: 2, title: 'Conectado ao Mercado', icon: '📡' },
  3: { id: 3, title: 'Navegador Seguro', icon: '🛡️' },
  4: { id: 4, title: 'Pronto pra Entrevista', icon: '🎥' }
};

export default function ModulePage({ moduleData, userData, onNextModule }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loadingAnswers, setLoadingAnswers] = useState(true);

  const currentUid = auth.currentUser?.uid || userData?.uid;

  const userPrefix = userData?.nome
    ? userData.nome.trim().toLowerCase().replace(/\s+/g, '_')
    : 'default_user';

  const STORAGE_KEY = `${userPrefix}_module_${moduleData.id}_quiz_answers`;

  useEffect(() => {
    async function loadAnswers() {
      setLoadingAnswers(true);

      if (currentUid) {
        try {
          const docRef = doc(db, 'users', currentUid, 'module_responses', `module_${moduleData.id}`);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists() && docSnap.data().answers) {
            const remoteAnswers = docSnap.data().answers;
            setAnswers(remoteAnswers);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteAnswers));
            setLoadingAnswers(false);
            return;
          }
        } catch (e) {
          console.error("Erro ao carregar respostas do Firestore:", e);
        }
      }

      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          setAnswers(JSON.parse(saved));
        } catch (e) {
          console.error("Erro ao carregar respostas do localStorage", e);
          setAnswers({});
        }
      } else {
        setAnswers({});
      }

      setLoadingAnswers(false);
    }

    loadAnswers();
  }, [moduleData.id, currentUid, STORAGE_KEY]);

  // Contagem total de questões do módulo
  const totalQuestions = moduleData.sections.reduce((acc, sec) => {
    return acc + (sec.quizzes ? sec.quizzes.length : (sec.quiz ? 1 : 0));
  }, 0);

  const answeredCount = Object.keys(answers).length;
  const isAllAnswered = totalQuestions > 0 && answeredCount === totalQuestions;

  // Cálculo dos acertos atuais
  let correctAnswersCount = 0;
  moduleData.sections.forEach((sec) => {
    const quizzesList = sec.quizzes || (sec.quiz ? [sec.quiz] : []);
    quizzesList.forEach((q, qIdx) => {
      const quizKey = `${sec.id}_q${qIdx}`;
      if (answers[quizKey] && answers[quizKey] === q.correctAnswer) {
        correctAnswersCount += 1;
      }
    });
  });

  const earnedPoints = correctAnswersCount * 10; // +10 XP por acerto
  const passRatio = totalQuestions > 0 ? correctAnswersCount / totalQuestions : 0;
  const hasEarnedBadge = passRatio >= 0.7; // Mínimo de 70% para ganhar o selo
  const currentBadge = MODULE_BADGES[moduleData.id];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToContent = () => {
    const element = document.getElementById('faq-accordion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Atualização de Resposta e Atualização do Firestore com Gamificação
  const handleSelectOption = async (quizKey, selectedOptionId) => {
    if (answers[quizKey]) return;

    const newAnswers = { ...answers, [quizKey]: selectedOptionId };
    setAnswers(newAnswers);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newAnswers));

    // Recalcula o progresso com a nova resposta
    let updatedCorrectCount = 0;
    moduleData.sections.forEach((sec) => {
      const quizzesList = sec.quizzes || (sec.quiz ? [sec.quiz] : []);
      quizzesList.forEach((q, qIdx) => {
        const key = `${sec.id}_q${qIdx}`;
        if (newAnswers[key] && newAnswers[key] === q.correctAnswer) {
          updatedCorrectCount += 1;
        }
      });
    });

    const newModuleXP = updatedCorrectCount * 10;
    const isBadgeUnlocked = (updatedCorrectCount / totalQuestions) >= 0.7;

    if (currentUid) {
      try {
        // 1. Salva as respostas específicas do módulo
        const responseRef = doc(db, 'users', currentUid, 'module_responses', `module_${moduleData.id}`);
        await setDoc(responseRef, {
          moduleId: moduleData.id,
          answers: newAnswers,
          correctCount: updatedCorrectCount,
          totalQuestions,
          score: newModuleXP,
          passed: isBadgeUnlocked,
          updatedAt: serverTimestamp()
        }, { merge: true });

        // 2. Atualiza a ficha principal do utilizador no Firestore com XP e Selos
        const userDocRef = doc(db, 'users', currentUid);
        const userSnap = await getDoc(userDocRef);

        if (userSnap.exists()) {
          const userDataDoc = userSnap.data();
          const prevModuleScore = userDataDoc.moduleScores?.[`mod_${moduleData.id}`]?.score || 0;
          const scoreDiff = Math.max(0, newModuleXP - prevModuleScore);
          const newTotalXP = (userDataDoc.totalXP || 0) + scoreDiff;

          const userUpdatePayload = {
            totalXP: newTotalXP,
            [`moduleScores.mod_${moduleData.id}`]: {
              correct: updatedCorrectCount,
              total: totalQuestions,
              score: Math.max(prevModuleScore, newModuleXP),
              passed: isBadgeUnlocked
            }
          };

          // Adiciona o selo se conquistou e ainda não possui
          if (isBadgeUnlocked && currentBadge) {
            const alreadyHasBadge = (userDataDoc.badges || []).some(b => b.id === moduleData.id);
            if (!alreadyHasBadge) {
              userUpdatePayload.badges = arrayUnion({
                id: moduleData.id,
                title: currentBadge.title,
                icon: currentBadge.icon,
                earnedAt: new Date().toISOString()
              });
            }
          }

          await updateDoc(userDocRef, userUpdatePayload);
        }
      } catch (error) {
        console.error("Erro ao atualizar dados de gamificação no Firestore:", error);
      }
    }
  };

  const handleResetQuiz = async () => {
    if (window.confirm("Deseja refazer as questões deste módulo? Seu progresso neste módulo será reiniciado.")) {
      setAnswers({});
      localStorage.removeItem(STORAGE_KEY);

      if (currentUid) {
        try {
          const responseRef = doc(db, 'users', currentUid, 'module_responses', `module_${moduleData.id}`);
          await deleteDoc(responseRef);
        } catch (error) {
          console.error("Erro ao deletar respostas do Firestore:", error);
        }
      }
    }
  };

  const handleNextClick = () => {
    if (isAllAnswered) {
      onNextModule();
    } else {
      alert(`Responda todas as questões para liberar o próximo módulo (${answeredCount}/${totalQuestions})`);
    }
  };

  if (loadingAnswers) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>Carregando questões do módulo...</div>;
  }

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

      {/* PAINEL DE PROGRESSO, XP & SELOS DO MÓDULO */}
      <div className="quiz-progress-panel" style={{ margin: '20px 0', padding: '16px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1rem' }}>
              Progresso das Atividades: {answeredCount} de {totalQuestions} respondidas
            </p>
            <p style={{ margin: '4px 0 0 0', color: '#6c757d', fontSize: '0.9rem' }}>
              Pontuação neste módulo: <strong>+{earnedPoints} XP</strong> ({correctAnswersCount} acertos)
            </p>
          </div>

          {/* Exibição do Selo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: hasEarnedBadge ? '#e6f4ea' : '#fff3cd', borderRadius: '20px', border: `1px solid ${hasEarnedBadge ? '#ceead6' : '#ffeeba'}` }}>
            <span style={{ fontSize: '1.2rem' }}>{currentBadge?.icon}</span>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: hasEarnedBadge ? '#137333' : '#856404' }}>
              {hasEarnedBadge ? `Selo Conquistado: ${currentBadge?.title}` : `Selo Bloqueado (Mín. 70% acertos)`}
            </span>
          </div>
        </div>

        {isAllAnswered && (
          <button 
            onClick={handleResetQuiz}
            style={{ marginTop: '12px', padding: '8px 16px', cursor: 'pointer', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: '500' }}
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

                            {isAnswered && (
                              <div className="quiz-explanation" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#e9ecef', borderRadius: '4px' }}>
                                <p style={{ margin: 0 }}>
                                  <strong>{selectedOption === q.correctAnswer ? '✓ Correto! (+10 XP)' : '✕ Incorreto!'}</strong> {q.feedback || q.explanation}
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