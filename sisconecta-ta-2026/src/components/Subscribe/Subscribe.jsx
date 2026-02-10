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
              <h1 className="subscribe-title">Lorem Ipsun</h1>

              <p className="subscribe-description">
                O Sisconec.TA 2026 reúne palestrantes e convidados com
                trajetórias reconhecidas nas áreas de pesquisa, inovação,
                regulação, políticas públicas e desenvolvimento tecnológico em
                Tecnologias Assistivas. A diversidade de formações, experiências
                e visões é um dos pilares do evento, criando um ambiente de
                diálogo qualificado e conectado aos desafios reais enfrentados
                pelo setor no Brasil.
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
