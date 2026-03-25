import { useEffect, useState } from "react";
import "./PopupEvento.css";
import logoSISconecta from "../../assets/logo-sisconec.ta.svg";

export default function PopupEvento() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Exibe ao carregar o site
    const timer = setTimeout(() => {
      setShow(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const fecharPopup = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {/* Botão fechar */}
        <button className="popup-close" onClick={fecharPopup}>
          ✕
        </button>

        {/* Conteúdo */}
        <div className="popup-content">
          <div className="popup-logo-wrapper">
            <img
              src={logoSISconecta}
              alt="Sisconec.TA 2026"
              className="popup-logo"
            />
          </div>

          <p className="popup-text">
            Os certificados de participação do Sisconec.TA 2026 serão emitidos
            pela Universidade Federal de Uberlândia (UFU) e disponibilizados em
            até 30 dias após a realização do evento. Agradecemos a participação
            e orientamos que acompanhe os canais oficiais para atualização sobre
            a liberação.
          </p>

          <button className="popup-button" onClick={fecharPopup}>
            Entendi
          </button>
        </div>

        {/* Shapes decorativos */}
        <div className="shape shape-top"></div>
        <div className="shape shape-bottom"></div>
      </div>
    </div>
  );
}
