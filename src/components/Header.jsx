import './Header.css';
import notebookImg from '../assets/notebook.png'; // ajuste o caminho se necessário

export default function Header() {
  return (
    <header className="hero-header">
      <div className="hero-blue-panel">
        <h1 className="hero-title">
          Guia Digital de<br />
          Empregabilidade e<br />
          Letramento Digital
        </h1>
        
        <p className="hero-subtitle">
          Projeto de Extensão — Análise e Desenvolvimento<br />
          de Sistemas.
        </p>

        <div className="hero-divider"></div>

        <p className="hero-description">
          Nosso objetivo é <strong>conectar a formação técnica</strong> dos alunos<br />
          do SENAI às exigências do <strong>mercado de trabalho digital</strong>.
        </p>
      </div>

      <div className="hero-notebook-container">
        <img 
          src={notebookImg} 
          alt="Banner Guia Digital" 
          className="hero-notebook-img" 
        />
      </div>
    </header>
  );
}