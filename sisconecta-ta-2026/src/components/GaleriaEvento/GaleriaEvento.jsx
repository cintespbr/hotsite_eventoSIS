import { useState } from "react";
import "./GaleriaEvento.css";

import criancaAtleta from "../../assets/evento-IMG/criança_atleta1.png";
import atletas from "../../assets/evento-IMG/atletas1.png";
import autoridades from "../../assets/evento-IMG/autoridades-palco1.png";
import autoridades2 from "../../assets/evento-IMG/autoridades-palco2.png";
import publico from "../../assets/evento-IMG/publico1.png";
import dandara1 from "../../assets/evento-IMG/dandara-autoridades.png";
import dandaraEreitor from "../../assets/evento-IMG/dandara-e-reitor.png";
import cleudmar1 from "../../assets/evento-IMG/cleudmar1.png";
import reitor1 from "../../assets/evento-IMG/reitor1.png";
import secretario from "../../assets/evento-IMG/secretario1.png";
import idari1 from "../../assets/evento-IMG/idari1.png";
import gabi1 from "../../assets/evento-IMG/gabi1.png";
import palco3 from "../../assets/evento-IMG/palco3.png";
import cleudmar2 from "../../assets/evento-IMG/cleudmar2.png";
import palco2 from "../../assets/evento-IMG/palco2.png";
import palco1 from "../../assets/evento-IMG/palco1.png";
import atletas2 from "../../assets/evento-IMG/atletas2.png";
import atletaParalimpico1 from "../../assets/evento-IMG/atleta-paralimpico1.png";
import cris1 from "../../assets/evento-IMG/cris1.png";
import myway1 from "../../assets/evento-IMG/myway1.png";
import myway2 from "../../assets/evento-IMG/myway2.png";

const imagens = [
  { src: criancaAtleta },
  { src: atletas },
  { src: autoridades },
  { src: gabi1 },
  { src: autoridades2 },
  { src: publico },
  { src: dandara1 },
  { src: dandaraEreitor },
  { src: cleudmar1 },
  { src: reitor1 },
  { src: secretario },
  { src: idari1 },
  { src: palco1 },
  { src: palco2 },
  { src: palco3 },
  { src: cleudmar2 },
  { src: atletas2 },
  { src: atletaParalimpico1 },
  { src: cris1 },
  { src: myway1 },
  { src: myway2 },
];

export default function GaleriaEvento() {
  const [imagemAtiva, setImagemAtiva] = useState(null);
  const [indexAtivo, setIndexAtivo] = useState(null);

  const proximaImagem = () => {
    setIndexAtivo((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  const imagemAnterior = () => {
    setIndexAtivo((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  return (
    <main className="galeria-page">
      {/* HERO */}
      <section className="galeria-hero">
        <div className="galeria-overlay"></div>
        <div className="galeria-noise"></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 galeria-left">
              <div className="glass-card galeria-card">
                <h1 className="galeria-hero-title">
                  Galeria do Sisconec.TA 2026
                </h1>

                <p className="galeria-hero-text">
                  Acompanhe em tempo real os momentos mais marcantes do evento,
                  com registros que refletem a inovação, inclusão e o impacto
                  social do Sisconec.TA 2026.
                </p>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <div className="glass-card galeria-visual">
                <img
                  src={atletas}
                  alt="Galeria do evento"
                  className="galeria-hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="galeria-section">
        <div className="container">
          <h2 className="galeria-title">
            Momentos que estão acontecendo agora no evento
          </h2>

          <p className="galeria-subtitle">
            Acompanhe registros em tempo real do Sisconec.TA 2026 e veja de
            perto como tecnologia, inclusão e inovação estão transformando
            experiências ao longo de toda a programação.
          </p>

          <div className="galeria-grid">
            {imagens.map((img, i) => (
              <div
                className="galeria-item"
                key={i}
                onClick={() => {
                  setImagemAtiva(img.src);
                  setIndexAtivo(i);
                }}
              >
                <div className="galeria-overlay-card"></div>
                <img src={img.src} alt={`Imagem ${i + 1}`} />
                {/* <h3>{img.titulo}</h3> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL ANTIGO (mantido) */}
      {imagemAtiva && (
        <div className="galeria-modal" onClick={() => setImagemAtiva(null)}>
          <span className="galeria-close">&times;</span>

          <img
            src={imagemAtiva}
            alt="Imagem ampliada"
            className="galeria-modal-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* NOVO MODAL COM SETAS */}
      {indexAtivo !== null && (
        <div className="galeria-modal" onClick={() => setIndexAtivo(null)}>
          <span className="galeria-close">&times;</span>

          <button
            className="galeria-seta esquerda"
            onClick={(e) => {
              e.stopPropagation();
              imagemAnterior();
            }}
          >
            ❮
          </button>

          <img
            src={imagens[indexAtivo].src}
            alt="Imagem ampliada"
            className="galeria-modal-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="galeria-seta direita"
            onClick={(e) => {
              e.stopPropagation();
              proximaImagem();
            }}
          >
            ❯
          </button>
        </div>
      )}
    </main>
  );
}
