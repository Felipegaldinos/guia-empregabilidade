import { useNavigate } from 'react-router-dom';
import './ModulesSection.css';

export default function ModulesSection() {
  const navigate = useNavigate();

  const handleModuleClick = (id) => {
    navigate(`/modulo/${id}`);
    window.scrollTo(0, 0); // Garante que a página inicie no topo ao abrir o módulo
  };

  const modules = [
    {
      id: 1,
      tag: "MÓDULO 1",
      title: "Portfólio Técnico e Currículo Digital",
      description: "Modelos de currículos, dicas para destacar seus cursos, certificados e projetos.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <rect x="8" y="14" width="8" height="5" rx="1" />
        </svg>
      )
    },
    {
      id: 2,
      tag: "MÓDULO 2",
      title: "Otimização para Redes e Busca de Vagas",
      description: "Passo a passo no LinkedIn, palavras-chave da indústria e links de emprego no RN.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <circle cx="17" cy="14" r="3" />
          <line x1="19.5" y1="16.5" x2="22" y2="19" />
        </svg>
      )
    },
    {
      id: 3,
      tag: "MÓDULO 3",
      title: "Segurança Digital e Dicas Antigolpe",
      description: "Checklists para identificar fraudes e orientações de privacidade nos cadastros.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <rect x="9" y="10" width="6" height="5" rx="1" />
          <path d="M10 10V8a2 2 0 1 1 4 0v2" />
        </svg>
      )
    },
    {
      id: 4,
      tag: "MÓDULO 4",
      title: "Processos Seletivos Remotos",
      description: "Orientações para testes técnicos, entrevistas virtuais e vídeos de apresentação.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="15" height="12" rx="2" />
          <path d="M17 8l5-3v10l-5-3" />
          <line x1="2" y1="20" x2="20" y2="20" />
        </svg>
      )
    }
  ];

  return (
    <section className="modules-container">
      <div className="bg-shape-top-left"></div>
      
      <div className="modules-header">
        <span className="modules-subtitle">ESCOLHA O ASSUNTO</span>
        <h2 className="modules-title">Explore os 4 Módulos do Guia</h2>
        <p className="modules-description">
          Clique em cada módulo para acessar conteúdos práticos, dicas e ferramentas<br />
          que vão te ajudar a conquistar mais oportunidades no mercado de trabalho digital.
        </p>
        <div className="title-divider"></div>
      </div>

      <div className="modules-grid">
        {modules.map((mod) => (
          <div 
            className="module-card" 
            key={mod.id}
            onClick={() => handleModuleClick(mod.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="icon-circle-wrapper">
              <div className="icon-circle">
                {mod.icon}
              </div>
            </div>

            <span className="module-badge">{mod.tag}</span>
            <h3 className="card-title">{mod.title}</h3>
            <p className="card-description">{mod.description}</p>

            <button className="card-arrow-btn" aria-label={`Acessar ${mod.title}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="bg-shape-bottom-right"></div>
    </section>
  );
}