import "./Subscribe.css";
import heroInsc from "../../assets/hero-incris.png";

export default function Subscribe() {
  return (
    <main className="subscribe-page">
      {/* HERO */}
      <section className="subscribe-hero">
        <div className="subscribe-noise" aria-hidden="true"></div>

        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {/* TEXTO */}
            <div className="col-lg-6 text-center text-lg-start subscribe-text">
              <h1 className="subscribe-title">
                Garanta sua participação no Sisconec.TA 2026
              </h1>

              <p className="subscribe-description">
                Participe de um dos principais encontros nacionais dedicados à
                inovação em Tecnologias Assistivas. Realize sua inscrição e faça
                parte de um ecossistema que conecta ciência, indústria, governo
                e comunidade na construção de soluções inclusivas para o futuro.
              </p>
            </div>

            {/* IMAGEM */}
            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <div className="subscribe-visual">
                <img
                  src={heroInsc}
                  alt="Ilustração representando palestrantes e tecnologias assistivas"
                  className="subscribe-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="subscribe-form-section">
        <div className="container-fluid h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-12 col-xl-10">
              <div className="subscribe-form-wrapper">
                <iframe
                  title="Formulário de Inscrição Sisconec.TA 2026"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfJbM5D3g1lou0hr2Vyll7LkZn1DNAOvhHvIGaYMsSg1YWp8Q/viewform?embedded=true"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="subscribe-iframe"
                >
                  Carregando…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
