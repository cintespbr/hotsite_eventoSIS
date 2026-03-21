import { useState } from "react";
import "./GaleriaEvento.css";
import { Link } from "react-router-dom";

// HERO IMAGE
import heroBg from "../../assets/back-program.png";
import heroSide from "../../assets/event-hero.png";

// ================= IMAGENS =================

// (mantive todas que você já tinha)

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

// APRESENTAÇÕES
import apresentacao1 from "../../assets/evento-IMG/apresentacao1.jpg";
import apresentacao2 from "../../assets/evento-IMG/apresentacao2.jpg";
import apresentacao3 from "../../assets/evento-IMG/apresentacao3.jpg";
import apresentacao4 from "../../assets/evento-IMG/apresentacao4.jpg";
import apresentacao5 from "../../assets/evento-IMG/apresentacao5.jpg";
import apresentacao6 from "../../assets/evento-IMG/apresentacao6.jpg";
import apresentacao7 from "../../assets/evento-IMG/apresentacao7.jpg";
import apresentacao8 from "../../assets/evento-IMG/apresentacao8.jpg";
import apresentacao9 from "../../assets/evento-IMG/apresentacao9.jpg";
import apresentacao10 from "../../assets/evento-IMG/apresentacao10.jpg";
import apresentacao11 from "../../assets/evento-IMG/apresentacao11.jpg";
import apresentacao12 from "../../assets/evento-IMG/apresentacao12.jpg";
import apresentacao13 from "../../assets/evento-IMG/apresentacao13.jpg";
import apresentacao14 from "../../assets/evento-IMG/apresentacao14.jpg";
import apresentacao15 from "../../assets/evento-IMG/apresentacao15.jpg";
import apresentacao16 from "../../assets/evento-IMG/apresentacao16.jpg";
import apresentacao17 from "../../assets/evento-IMG/apresentacao17.jpg";
import apresentacao19 from "../../assets/evento-IMG/apresentacao19.jpg";

// LANÇAMENTOS
import lancamento1 from "../../assets/evento-IMG/lancamento1.jpg";
import lancamento2 from "../../assets/evento-IMG/lancamento2.jpg";
import lancamento3 from "../../assets/evento-IMG/lancamento3.jpg";
import lancamento4 from "../../assets/evento-IMG/lancamento4.jpg";
import lancamento5 from "../../assets/evento-IMG/lancamento5.jpg";
import lancamento6 from "../../assets/evento-IMG/lancamento6.jpg";
import lancamento7 from "../../assets/evento-IMG/lancamento7.jpg";
import lancamento8 from "../../assets/evento-IMG/lancamento8-cleudmar-globo.jpg";

// SABIÁ
import sabias1 from "../../assets/evento-IMG/lancamentosabia1.jpg";
import sabias2 from "../../assets/evento-IMG/lancamentosabia2.jpg";
import sabias3 from "../../assets/evento-IMG/lancamentosabia3.jpg";

// TIRO AO ARCO
import tiro1 from "../../assets/evento-IMG/tiroaoarco-cego1.jpg";
import tiro2 from "../../assets/evento-IMG/tiroaoarco-cego2.jpg";
import tiro3 from "../../assets/evento-IMG/tiroaoarco-cego3.jpg";
import tiro4 from "../../assets/evento-IMG/tiroaoarco-cego4.jpg";
import tiro5 from "../../assets/evento-IMG/tiroaoarco-cego5.jpg";
import tiro6 from "../../assets/evento-IMG/tiroaoarco-cego6.jpg";

// EXTRAS
import atleta3 from "../../assets/evento-IMG/atleta3.jpg";
import inacio2 from "../../assets/evento-IMG/inacio2.jpg";
import prefeito2 from "../../assets/evento-IMG/prefeito2.jpg";

// ================= DIA 20 =================
const grupos = [
  {
    titulo: "Abertura do Evento",
    imagens: [
      criancaAtleta,
      cleudmar2,
      atletas,
      gabi1,
      autoridades,
      autoridades2,
      publico,
      dandara1,
      dandaraEreitor,
      cleudmar1,
      reitor1,
      secretario,
      idari1,
      atletaParalimpico1,
      cris1,
      atleta3,
      atletas2,
      inacio2,
      prefeito2,
    ],
  },
  {
    titulo: "Lançamentos e Inovações",
    imagens: [
      lancamento1,
      lancamento2,
      lancamento3,
      lancamento4,
      lancamento5,
      lancamento6,
      lancamento7,
      lancamento8,
      sabias1,
      sabias2,
      sabias3,
    ],
  },
  {
    titulo: "Apresentações e Demonstrações",
    imagens: [
      apresentacao1,
      apresentacao2,
      apresentacao3,
      apresentacao4,
      apresentacao5,
      apresentacao6,
      apresentacao7,
      apresentacao8,
      apresentacao9,
      apresentacao10,
      apresentacao11,
      apresentacao12,
      apresentacao13,
      apresentacao14,
      apresentacao15,
      apresentacao16,
      apresentacao17,
      apresentacao19,
      myway1,
      myway2,
    ],
  },
  {
    titulo: "Tiro com Arco Adaptado",
    imagens: [tiro1, tiro2, tiro3, tiro4, tiro5, tiro6],
  },
  {
    titulo: "Palco",
    imagens: [palco1, palco2, palco3],
  },
];

// ================= DIA 21 =================
const gruposDia21 = [
  {
    titulo: "Abertura do Evento",
    imagens: [
      // 👉 COLOQUE AQUI AS NOVAS IMAGENS DE HOJE
    ],
  },
];

export default function GaleriaEvento() {
  const [grupoAberto, setGrupoAberto] = useState(null);
  const [grupoAbertoDia21, setGrupoAbertoDia21] = useState(null);
  const [indexAtivo, setIndexAtivo] = useState(null);
  const [listaAtual, setListaAtual] = useState([]);

  const toggleGrupo = (index) => {
    setGrupoAberto(grupoAberto === index ? null : index);
  };

  const toggleGrupoDia21 = (index) => {
    setGrupoAbertoDia21(grupoAbertoDia21 === index ? null : index);
  };

  const abrirImagem = (lista, index) => {
    setListaAtual(lista);
    setIndexAtivo(index);
  };

  const proximaImagem = () => {
    setIndexAtivo((prev) => (prev === listaAtual.length - 1 ? 0 : prev + 1));
  };

  const imagemAnterior = () => {
    setIndexAtivo((prev) => (prev === 0 ? listaAtual.length - 1 : prev - 1));
  };

  return (
    <main className="galeria-page">
      {/* HERO */}
      <section className="event-hero">
        <div
          className="event-bg"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>

        <div className="event-noise"></div>

        <div className="container event-grid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="glass-card">
                <h1 className="event-title">
                  Galeria Oficial do Sisconec.TA 2026
                </h1>

                <p className="event-description">
                  Explore os momentos mais marcantes do evento em tempo real.
                </p>

                <Link className="btn btn-primary mt-3" to="/programacao">
                  Ver Programação
                </Link>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <div className="glass-card">
                <img src={heroSide} className="event-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIA 20 */}
      <section className="galeria-header">
        <div className="container">
          <h2 className="galeria-title">Primeiro Dia — 20/03</h2>
        </div>
      </section>

      <section className="galeria-section">
        <div className="container">
          {grupos.map((grupo, gIndex) => (
            <div className="accordion-item" key={gIndex}>
              <button
                className="accordion-header"
                onClick={() => toggleGrupo(gIndex)}
              >
                {grupo.titulo}
                <span>{grupoAberto === gIndex ? "−" : "+"}</span>
              </button>

              {grupoAberto === gIndex && (
                <div className="galeria-grid">
                  {grupo.imagens.map((img, i) => (
                    <div
                      key={i}
                      className="galeria-item"
                      onClick={() => abrirImagem(grupo.imagens, i)}
                    >
                      <img src={img} loading="lazy" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DIA 21 */}
      <section className="galeria-header">
        <div className="container">
          <h2 className="galeria-title">Segundo Dia — 21/03</h2>
        </div>
      </section>

      <section className="galeria-section">
        <div className="container">
          {gruposDia21.map((grupo, gIndex) => (
            <div className="accordion-item" key={gIndex}>
              <button
                className="accordion-header"
                onClick={() => toggleGrupoDia21(gIndex)}
              >
                {grupo.titulo}
                <span>{grupoAbertoDia21 === gIndex ? "−" : "+"}</span>
              </button>

              {grupoAbertoDia21 === gIndex && (
                <div className="galeria-grid">
                  {grupo.imagens.map((img, i) => (
                    <div
                      key={i}
                      className="galeria-item"
                      onClick={() => abrirImagem(grupo.imagens, i)}
                    >
                      <img src={img} loading="lazy" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
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
            src={listaAtual[indexAtivo]}
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
