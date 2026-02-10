import "./Hero.css";
import heroImage from "../../../assets/hero.png";
export default function Hero() {
  return (
    <main className="hero-page">
      {/* HERO */}
      <section className="hero-hero">
        <div className="hero-noise" aria-hidden="true"></div>

        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {/* TEXTO */}
            <div className="col-lg-6 text-center text-lg-start hero-text">
              <h1 className="hero-title">Lorem Ipsun</h1>

              <p className="hero-description">
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
              <div className="hero-visual">
                <img
                  src={heroImage}
                  alt="Ilustração representando palestrantes e tecnologias assistivas"
                  className="hero-image"
                />
              </div>
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
    </main>
  );
}
