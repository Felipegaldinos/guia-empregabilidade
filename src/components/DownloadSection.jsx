import './DownloadSection.css';
import pdfMockupImg from '../assets/pdf-mockup.png'; 

export default function DownloadSection() {
  const benefits = [
    {
      id: 1,
      title: "Acesso imediato",
      desc: "Receba o PDF logo após o download gratuito.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Em qualquer dispositivo",
      desc: "Leia no celular, tablet ou computador.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Conteúdo completo",
      desc: "Os 4 módulos reunidos em um único material.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Mais praticidade",
      desc: "Estude no seu ritmo e aplique no seu dia a dia.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    }
  ];

  return (
    <section className="download-container">
     
      <div className="dl-shape-top-left"></div>
    
      <div className="download-hero">
        <div className="download-text-side">
          <span className="download-subtitle">GUIAS COMPLETOS EM PDF</span>
          <h2 className="download-title">
            Tenha os 4 Módulos<br />
            em um Só Lugar
          </h2>
          <p className="download-description">
            Baixe agora o compilado completo com todos os guias e comece a aplicar as melhores práticas do mercado de trabalho digital.
          </p>
          <div className="download-divider"></div>
        </div>

        <div className="download-image-side">
          <img 
            src={pdfMockupImg} 
            alt="Ilustração dos 4 Módulos do Guia em PDF" 
            className="mockup-img" 
          />
        </div>
      </div>

     
      <div className="benefits-grid">
        {benefits.map((b) => (
          <div className="benefit-card" key={b.id}>
            <div className="benefit-icon-wrapper">
              {b.icon}
            </div>
            <h3 className="benefit-title">{b.title}</h3>
            <p className="benefit-desc">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="action-wrapper">
        <a href="/guia-completo.pdf" download className="btn-download-main">
          <svg className="btn-icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          BAIXAR GUIAS EM PDF
          <svg className="btn-icon-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
}