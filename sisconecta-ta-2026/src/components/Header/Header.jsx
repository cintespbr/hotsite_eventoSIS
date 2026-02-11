import "./Header.css";
import logoSis from "../../assets/logo-sisassistiva.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-light shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <img
              src={logoSis}
              alt="Logo SisAssistiva"
              className="logo-sisassistiva"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Sisconec.TA 2026
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/programacao">
                  Programação
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Palestrantes
                </a>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/inscricoes">
                  Inscrições
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
