import "./Hero.css";
import heroImage from "../../../assets/section1.jpeg";
import heroVideo from "../../../assets/section1.mp4";
import section1Img from "../../../assets/section1.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

<style>
  {`
@keyframes piscandoRainbow {
  0% { color: red; }
  16% { color: orange; }
  32% { color: yellow; }
  48% { color: lime; }
  64% { color: cyan; }
  80% { color: blue; }
  100% { color: magenta; }
}
`}
</style>;

export default function Hero() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2026-03-20T08:00:00-03:00");
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / (1000 * 60)) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="hero-page">
      <section
        className="hero-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>

        <div className="container hero-grid">
          <div className="row align-items-center">
            {/* COLUNA ESQUERDA */}
            <div className="col-lg-6 hero-left">
              <div className="glass-card main-card">
                <h1>
                  TECNOLOGIA ASSISTIVA <br />
                  COM IMPACTO SOCIAL
                </h1>

                <p>
                  O Sisconec.TA 2026 é o encontro nacional da Rede SisAssistiva
                  dedicado à apresentação de soluções em Tecnologia Assistiva
                  com foco na entrega à sociedade.
                </p>
              </div>

              <div className="glass-card countdown-card">
                <span className="countdown-label">
                  Anote na sua agenda, faltam apenas:
                </span>

                <div className="countdown-grid">
                  <div>
                    <strong>{timeLeft.dias}</strong>
                    <span>dias</span>
                  </div>
                  <div>
                    <strong>{timeLeft.horas}</strong>
                    <span>horas</span>
                  </div>
                  <div>
                    <strong>{timeLeft.minutos}</strong>
                    <span>minutos</span>
                  </div>
                  <div>
                    <strong>{timeLeft.segundos}</strong>
                    <span>segundos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA */}
            <div className="col-12 col-lg-6 d-flex justify-content-center hero-right">
              {" "}
              <div className="hero-image-frame">
                <video
                  src={heroVideo}
                  className="hero-image"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={heroImage}
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
            <div className="col-lg-7">
              <h2 className="section-title">
                Conectando Inovação, Tecnologia e Impacto Social
              </h2>

              <p className="section-text">
                O Reitor <b>Carlos Henrique de Carvalho</b>, o Prefeito de
                Uberlândia
                <b> Paulo Sérgio Ferreira</b>, o Secretário de Ciência e
                Tecnologia para o Desenvolvimento Social (SEDES),{" "}
                <b>Inácio Arruda</b> e a Ministra de Ciência Tecnologia e
                Inovação (MCTI) <b>Sra. Ministra Luciana Santos</b> convidam
                para o Sisconec.TA 2026.
              </p>

              <p className="section-text">
                O evento tem como proposta central integrar esforços, alinhar
                visões e fortalecer a rede que sustenta a Tecnologia Assistiva,
                inovações voltadas para pessoas com deficiência e mobilidade
                reduzida. Será o primeiro e maior evento de Minas Gerais para
                conectar ciência, indústria, políticas públicas e usuários
                finais em um mesmo ecossistema colaborativo.
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

            <div className="col-lg-5 d-none d-lg-block">
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
