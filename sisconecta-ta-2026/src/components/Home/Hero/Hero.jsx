import "./Hero.css";
import heroImage from "../../../assets/hero.png";
import section1Img from "../../../assets/section1.png";
import { Link } from "react-router-dom";
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
              <h1 className="hero-title">
                SisConec.TA 2026 – Tecnologia Assistiva com Impacto Social
              </h1>

              <p className="hero-description">
                O SisConec.TA 2026 é o encontro nacional da Rede SisAssistiva
                dedicado à apresentação de soluções em Tecnologia Assistiva com
                foco na entrega à sociedade. O evento reunirá estudantes,
                pesquisadores, gestores públicos, empresas e sociedade civil
                para conhecer tecnologias já prontas para uso, desenvolvidas
                para ampliar acessibilidade e autonomia. A iniciativa reforça o
                compromisso de transformar conhecimento e investimento em
                impacto social concreto no Brasil.
              </p>
              <Link className="btn btn-primary btn-lg" to="/inscricoes">
                Faça sua Inscrição
              </Link>
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
                <Link className="btn btn-primary btn-lg" to="/inscricoes">
                  Se Inscrever
                </Link>
                <Link
                  className="btn btn-outline-primary btn-lg"
                  to="/programacao"
                >
                  Ver Programação
                </Link>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
              <div className="image-placeholder">
                <img
                  src={section1Img}
                  alt="Ilustração representando palestrantes e tecnologias assistivas"
                  className="image-placeholder"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
