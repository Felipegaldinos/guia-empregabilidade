import { useState } from 'react';
import './ModulePage.css';
import img from '../assets/module-hero.png';

export default function ModulePage({ moduleData, onNextModule }) {
  // Guarda qual item do FAQ está aberto (01 inicia aberto por padrão como no layout)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToContent = () => {
    const element = document.getElementById('faq-accordion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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

      {/* 2. ACCORDION / FAQ DAS 14 AULAS */}
      <main className="faq-wrapper" id="faq-accordion">
        {moduleData.sections.map((sec, index) => {
          const isOpen = openIndex === index;

          return (
            <article className={`faq-item ${isOpen ? 'active' : ''}`} key={sec.id}>
              {/* Botão do Cabeçalho do FAQ */}
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

              {/* Corpo do FAQ Expansível */}
              {isOpen && (
                <div className="faq-body">
                  {/* Texto simples */}
                  {sec.content.text && <p className="faq-paragraph">{sec.content.text}</p>}

                  {/* Listas simples com marcadores */}
                  {sec.content.bullets && (
                    <div className="faq-bullets-block">
                      {sec.content.bulletsTitle && <strong>{sec.content.bulletsTitle}</strong>}
                      <ul>
                        {sec.content.bullets.map((item, i) => (
                          <li key={i}><span className="check-svg">✓</span> {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Alerta em destaque */}
                  {sec.content.alert && (
                    <div className="faq-alert-box">
                      <span className="info-icon">i</span>
                      <p>{sec.content.alert}</p>
                    </div>
                  )}

                  {/* Tabelas de comparação ou dados */}
                  {sec.content.table && (
                    <div className="faq-table-container">
                      {sec.content.table.title && <h4>{sec.content.table.title}</h4>}
                      <table>
                        <thead>
                          <tr>
                            {sec.content.table.headers.map((h, i) => <th key={i}>{h}</th>)}
                          </tr>
                        </thead>
                        <tbody>
                          {sec.content.table.rows.map((row, i) => (
                            <tr key={i}>
                              <td>{row[0]}</td>
                              <td>{row[1]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Blocos Estruturados (Seção 02) */}
                  {sec.content.blocks && sec.content.blocks.map((b, i) => (
                    <div className="faq-block-item" key={i}>
                      <h3>{b.header}</h3>
                      {b.text && <p>{b.text}</p>}
                      {b.bullets && (
                        <ul>
                          {b.bullets.map((bullet, idx) => <li key={idx}>• {bullet}</li>)}
                        </ul>
                      )}
                      {b.badExample && <div className="example-box bad"><strong>Exemplo ruim:</strong> {b.badExample}</div>}
                      {b.goodExample && <div className="example-box good"><strong>Exemplo melhor:</strong> {b.goodExample}</div>}
                      {b.alert && <div className="faq-alert-box warning"><p>{b.alert}</p></div>}
                    </div>
                  ))}

                  {/* CORREÇÃO SEÇÃO 08: FlowSteps para o Passo a Passo do LinkedIn */}
                  {sec.content.flowSteps && (
                    <div className="faq-flow-steps">
                      {sec.content.flowSteps.map((step, i) => (
                        <div className="step-card" key={i}>
                          <h4>{i + 1}. {step.title}</h4>
                          <p>{step.desc}</p>
                        </div>
                      ))}
                      {sec.content.note && (
                        <div className="faq-alert-box">
                          <span className="info-icon">i</span>
                          <p>{sec.content.note}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Comparações (Certo x Errado) */}
                  {sec.content.comparison && (
                    <div className="faq-comparison">
                      <div className="comp-card bad">
                        <strong>{sec.content.comparison.badTitle || "Em vez de:"}</strong>
                        <p style={{ whitespace: 'pre-line' }}>{sec.content.comparison.bad}</p>
                      </div>
                      <div className="comp-card good">
                        <strong>{sec.content.comparison.goodTitle || "Apresente assim:"}</strong>
                        <p style={{ whitespace: 'pre-line' }}>{sec.content.comparison.good}</p>
                      </div>
                    </div>
                  )}

                  {/* Fórmulas ou estruturas simples */}
                  {sec.content.formula && (
                    <div className="faq-formula-card">
                      <h4>{sec.content.formula.title}</h4>
                      <div className="formula-badge">{sec.content.formula.structure}</div>
                      <p><strong>Exemplo:</strong> {sec.content.formula.example}</p>
                    </div>
                  )}

                  {/* CORREÇÃO SEÇÃO 10: TemplateBox para a Estrutura de Projetos */}
                  {sec.content.templateBox && (
                    <div className="faq-project-card">
                      <h4>{sec.content.templateBox.header}</h4>
                      <p><strong>Problema/Objetivo:</strong> {sec.content.templateBox.problem}</p>
                      <p><strong>Desenvolvimento:</strong> {sec.content.templateBox.developed}</p>
                      
                      {sec.content.templateBox.techs && (
                        <div className="tech-stack" style={{ margin: '10px 0' }}>
                          <strong>Tecnologias: </strong>
                          {sec.content.templateBox.techs.map((tech, i) => (
                            <span key={i} className="tech-badge" style={{ marginRight: '6px' }}>{tech}</span>
                          ))}
                        </div>
                      )}

                      {sec.content.templateBox.learned && (
                        <div className="learned-items">
                          <strong>O que aprendeu:</strong>
                          <ul>
                            {sec.content.templateBox.learned.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {sec.content.templateBox.links && (
                        <div className="project-links" style={{ marginTop: '10px' }}>
                          {sec.content.templateBox.links.map((link, i) => (
                            <span key={i} style={{ marginRight: '12px' }}>{link}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Projetos individuais (Seção 04) */}
                  {sec.content.exampleBox && (
                    <div className="faq-project-card">
                      <h4>{sec.content.exampleBox.title}</h4>
                      <p>{sec.content.exampleBox.desc}</p>
                      <span className="tech-badge">{sec.content.exampleBox.techs}</span>
                      <div className="project-links">
                        {sec.content.exampleBox.links.map((link, i) => <span key={i}>{link}</span>)}
                      </div>
                    </div>
                  )}

                  {/* Modelo de Currículo para Iniciantes (Seção 11) */}
                  {sec.content.exampleResume && (
                    <div className="faq-resume-card">
                      <p><strong>Formação:</strong> {sec.content.exampleResume.education}</p>
                      <p><strong>Projetos:</strong></p>
                      <ul>
                        {sec.content.exampleResume.projects.map((p, i) => <li key={i}>• {p}</li>)}
                      </ul>
                      <p><strong>Competências:</strong> {sec.content.exampleResume.skills}</p>
                    </div>
                  )}

                  {/* Ferramentas recomendadas (Seção 06) */}
                  {sec.content.toolsList && (
                    <div className="faq-tools-grid">
                      {sec.content.toolsList.map((t, i) => (
                        <div className="tool-box" key={i}>
                          <h4>{t.label}</h4>
                          <p>{t.desc}</p>
                          <small>Ideal para: {t.ideal}</small>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Erros a evitar (Seção 12) */}
                  {sec.content.errors && (
                    <div className="faq-errors-grid">
                      {sec.content.errors.map((err, i) => (
                        <div className="error-card" key={i}>
                          <h4>{err.title}</h4>
                          <p>{err.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Checklist interativo (Seção 13) */}
                  {sec.content.checklistItems && (
                    <div className="faq-checklist">
                      <ul>
                        {sec.content.checklistItems.map((chk, i) => (
                          <li key={i}>
                            <input type="checkbox" id={`chk-${i}`} />
                            <label htmlFor={`chk-${i}`}>{chk}</label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Desafio prático do módulo (Seção 14) */}
                  {sec.content.challenges && (
                    <div className="faq-challenges-grid">
                      {sec.content.challenges.map((c, i) => (
                        <div className="challenge-card" key={i}>
                          <span className="num">{c.number}</span>
                          <h4>{c.title}</h4>
                          <ul>
                            {c.items.map((item, idx) => <li key={idx}>• {item}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
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
            <p>Agora que você já construiu sua identidade profissional, vamos aprender a se destacar no mercado!</p>
          </div>
        </div>
        <button className="btn-next-module" onClick={onNextModule}>
          Próximo módulo →
        </button>
      </footer>
    </div>
  );
}