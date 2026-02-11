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
            <li>
              <Link to="/">Sisconec.TA 2026</Link>
            </li>
            <li>
              <Link to="/programacao">Programação</Link>
            </li>
            <li>
              <Link to="/palestrantes">Palestrantes</Link>
            </li>
            <li>
              <Link to="/inscricoes">Inscrições</Link>
            </li>
          </ul>
        </div>

        {/* CONTATOS / REDES 
        <div className="footer-social">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>E-mail</span>
        </div>
        */}
      </div>
    </footer>
  );
}
