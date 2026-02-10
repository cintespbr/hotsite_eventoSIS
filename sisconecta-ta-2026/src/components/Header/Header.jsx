import "./Header.css";
import logoSis from "../../assets/logo-sisassistiva.svg";

export default function Header() {
  return (
    <header className="bg-light shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            <img
              src={logoSis}
              alt="Logo SisAssistiva"
              className="logo-sisassistiva"
            />
          </a>
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
                <a className="nav-link" href="/">
                  SiSconec.TA 2026
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/programacao">
                  Programação
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Palestrantes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/inscricoes">
                  Inscrições
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
