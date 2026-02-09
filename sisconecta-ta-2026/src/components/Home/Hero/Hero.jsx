import "./Hero.css";
import heroImage from "../../../assets/hero.png";
export default function Hero() {
  return (
    <>
      <section
        className="position-relative text-white py-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "600px",
        }}
      >
        <div
          className="position-absolute w-100 h-100 bg-dark"
          style={{ opacity: 0, top: 0, left: 0 }}
        ></div>
        <div className="container position-relative h-100 d-flex align-items-center justify-content-center">
          <div className="text-center"></div>
        </div>
      </section>

      {/* PRIMEIRA SESSÃO */}
      <section className="first-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h2 className="section-title">
                SiSconec.TA 2026 – Uberlândia/MG
              </h2>
              <p className="section-date">25 e 26 de março de 2026</p>
              <p className="slogan-event">
                Evento Nacional da Rede SisAssistiva de Inovação Tecnológica
                Assistiva
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEGUNDA SESSÃO */}
      <section className="second-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">
                Conectando Inovação, Tecnologia e Impacto Social
              </h2>
              <p className="section-text">
                Este evento nasce como um ponto de encontro estratégico para
                quem desenvolve, pesquisa, regula, financia e utiliza
                Tecnologias Assistivas no Brasil. Mais do que uma agenda de
                palestras e exposições, ele foi concebido como um espaço vivo de
                articulação, troca e construção de caminhos concretos para
                transformar conhecimento técnico em soluções reais para a
                sociedade.
              </p>

              <p className="section-text">
                A proposta central é integrar esforços, alinhar visões e
                fortalecer a rede que sustenta a inovação em Tecnologias
                Assistivas, conectando ciência, indústria, políticas públicas e
                usuários finais em um mesmo ecossistema colaborativo.
              </p>

              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-primary btn-lg">Se Inscrever</button>
                <a
                  className="btn btn-outline-primary btn-lg"
                  href="/programacao"
                >
                  Ver Programação
                </a>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
              <div className="image-placeholder">
                {/* futura imagem ou vídeo */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
