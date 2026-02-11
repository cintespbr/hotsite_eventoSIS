import "./Registration.css";
import SubscribeImg from "../../../assets/subscribe-image.png";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <section className="registration-section">
      <div className="container">
        <div className="row align-items-center">
          {/* TEXTO */}
          <div className="col-lg-7">
            <h1 className="registration-eyebrow">Inscrição</h1>

            <h2 className="registration-title">
              Faça parte dessa construção coletiva
            </h2>

            <p className="registration-text">
              O Sisconec.TA 2026 convida você a participar de um encontro que
              acredita no diálogo, na colaboração e na inovação como motores da
              inclusão social. Garanta sua participação e integre essa rede que
              trabalha para fortalecer as Tecnologias Assistivas no Brasil.
            </p>

            <Link className="registration-button" to="/inscricoes">
              Realizar inscrição
            </Link>
          </div>

          {/* IMAGEM / PLACEHOLDER */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="registration-image">
              <img
                src={SubscribeImg}
                alt="Ilustração representando a inscrição em um evento"
                className="registration-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
