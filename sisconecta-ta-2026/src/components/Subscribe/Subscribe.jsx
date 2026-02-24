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
          <div className="row h-100 justify-content-center">
            {/* Coluna do Formulário - Ocupa 8 colunas para dar respiro nas laterais */}
            <div className="col-12 col-lg-8 col-xl-7">
              <div className="subscribe-form-wrapper">
                <div className="subscribe-form-toolbar" aria-hidden="false">
                  <p className="sr-note">Se o VLibras não conseguir ler o formulário embutido, você pode:</p>
                  <div className="sr-actions">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfJbM5D3g1lou0hr2Vyll7LkZn1DNAOvhHvIGaYMsSg1YWp8Q/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Abrir formulário em nova aba
                    </a>
                  </div>
                </div>
                <iframe
                  title="Formulário de Inscrição Sisconec.TA 2026"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfJbM5D3g1lou0hr2Vyll7LkZn1DNAOvhHvIGaYMsSg1YWp8Q/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="subscribe-iframe"
                >
                  Carregando…
                </iframe>
                <div className="form-accessible-summary" id="form-accessible-summary" aria-live="polite">
                  <h3>Resumo acessível do formulário</h3>
                  <p>Este formulário pede informações básicas de inscrição como: nome completo, e-mail, telefone, instituição/empresa, cargo e eventual confirmação de participação. Caso precise de ajuda, entre em contato com a organização.</p>
                </div>
              </div>
            </div>

            {/* Coluna para o VLibras (monta o widget aqui para que ocupe uma coluna ao lado do formulário) */}
            {/* Em telas grandes o widget ficará nessa coluna e não sobreporá o iframe */}
            <div className="col-lg-2 d-none d-lg-flex justify-content-center vlibras-column" aria-hidden="true">
              {/* Espaço reservado para o widget do VLibras (montado globalmente em App.jsx) */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
