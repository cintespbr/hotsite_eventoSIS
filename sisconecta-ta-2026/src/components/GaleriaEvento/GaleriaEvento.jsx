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

const imagens = [
  {
    src: criancaAtleta,
    // titulo: "Atleta Mirim",
  },
  {
    src: atletas,
    // titulo: "Atletas em ação",
  },
  {
    src: autoridades,
    // titulo: "Autoridades no palco",
  },
  {
    src: gabi1,
    // titulo: "Autoridades no palco",
  },
  {
    src: autoridades2,
    // titulo: "Autoridades no palco",
  },
  {
    src: publico,
    // titulo: "Autoridades no palco",
  },
  {
    src: dandara1,
    // titulo: "Autoridades no palco",
  },
  {
    src: dandaraEreitor,
    // titulo: "Autoridades no palco",
  },
  {
    src: cleudmar1,
    // titulo: "Autoridades no palco",
  },
  {
    src: reitor1,
    // titulo: "Autoridades no palco",
  },
  {
    src: secretario,
    // titulo: "Autoridades no palco",
  },
  {
    src: idari1,
    // titulo: "Autoridades no palco",
  },
];

export default function GaleriaEvento() {
  const [imagemAtiva, setImagemAtiva] = useState(null);

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
                onClick={() => setImagemAtiva(img.src)}
              >
                <div className="galeria-overlay-card"></div>
                <img src={img.src} alt={`Imagem ${i + 1}`} />

                {/* <h3>{img.titulo}</h3> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
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
    </main>
  );
}
