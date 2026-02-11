import "./Footer.css";
import footerBg from "../../assets/Rectangle 127.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${footerBg})` }}>
      {/* overlay para leitura */}
      <div className="footer-overlay"></div>

      <div className="container footer-content">
        {/* LOGO / IDENTIDADE */}
        <div className="footer-brand">
          <img src="/src/assets/logo2-sisassistiva.svg" alt="SisAssistiva" />
          <p>Sistema Nacional de Laboratórios de Tecnologias Assistivas</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <ul>
            <li>Sisconec.TA 2026</li>
            <li>
              <Link to="/programacao">Programação</Link>
            </li>
            <li>Palestrantes</li>
            <li>inscrições</li>
            <li>Âncora</li>
          </ul>
        </div>

        {/* CONTATOS / REDES */}
        <div className="footer-social">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>E-mail</span>
        </div>
      </div>
    </footer>
  );
}
