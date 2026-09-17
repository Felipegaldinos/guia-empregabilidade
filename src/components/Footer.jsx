import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">

      <div className="footer-divider"></div>

      <div className="footer-content">
        <p className="footer-copyright">
          © {new Date().getFullYear()} — Desenvolvido por <strong>Felipe Galdino da Silva</strong>
        </p>
        <p className="footer-subtext">
          Projeto de Extensão: Cidadania e Trabalho Digno
        </p>
      </div>

      <div className="footer-shape-bottom-left"></div>
      <div className="footer-shape-bottom-right"></div>
    </footer>
  );
}