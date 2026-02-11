import { useState } from "react";
import { Link } from "react-router-dom";
import "./EventSchedule.css";
import eventImage from "../../../assets/event-hero.png";

const programacao = [
  {
    dia: "20/03",
    titulo: "Governança, Inovação, Ciência e Comunidade",
    status: "Aberto ao Público",
    statusType: "open",
    eventos: [
      {
        hora: "08h00",
        titulo: "Credenciamento e Recepção",
        descricao: "Entrega de material acessível e check-in via QR Code.",
      },
      {
        hora: "09h00",
        titulo: "Abertura Institucional",
        descricao:
          "Sessão de abertura institucional com coordenação do SISLAB e do CINTESP.Br, contando com a participação de Reitor da UFU, Diretor da FUTEL, Prefeito de Uberlândia, representantes da FINEP, startups, SEBRAE e gestores públicos. A atividade contará com recursos de acessibilidade comunicacional, incluindo Libras.",
      },
      {
        hora: "11h00",
        titulo:
          "Apresentação de Produtos Assistivos Inovadores da Rede SisAssistiva",
        descricao:
          "Apresentação dos projetos aprovados no edital FINEP 2022, em formato de pitch, com destaque para soluções desenvolvidas, aplicações práticas e impacto social.",
      },
      {
        hora: "11h00",
        titulo: "Mostra Interativa de Tecnologias Assistivas",
        descricao:
          "Exposição e experimentação de produtos assistivos, protótipos e soluções desenvolvidas por empresas e projetos da Rede SisAssistiva.",
      },
      {
        hora: "17h30",
        titulo: "Painéis para Negócios em Tecnologias Assistivas",
        descricao:
          "Painéis voltados à discussão de oportunidades de negócio, fomento e desenvolvimento em Tecnologias Assistivas.",
      },
    ],
  },
  {
    dia: "21/03",
    titulo: "Estruturação da Rede e Transferência Tecnológica",
    status: "Fechado ao Público (Rede)",
    statusType: "closed",
    eventos: [
      {
        hora: "08h30",
        titulo: "Acolhimento e Abertura do Dia",
        descricao:
          "Recepção dos participantes da Rede SisAssistiva e contextualização das atividades do segundo dia.",
      },
      {
        hora: "09h00",
        titulo: "Mesa de Conversas da Rede SisAssistiva",
        descricao:
          "Mesa-redonda mediada pelo SISLAB com foco na apresentação das principais dificuldades enfrentadas pelos projetos.",
      },
      {
        hora: "10h30",
        titulo: "Intervalo — Coffee Break",
        descricao: "Pausa para integração e networking entre os participantes.",
      },
      {
        hora: "14h00",
        titulo: "Almoço — Livre",
        descricao:
          "Intervalo para almoço, com retorno às atividades no período da tarde.",
      },
      {
        hora: "18h00",
        titulo: "Painel 1 — INMETRO / ANVISA",
        descricao:
          "Painel dedicado à acreditação, regulação e ensaios técnicos aplicáveis às Tecnologias Assistivas.",
      },
    ],
  },
];

export default function Programacao() {
  const [openDay, setOpenDay] = useState(0);

  return (
    <main className="event-page">
      {/* hero */}
      <section className="event-hero">
        <div className="event-noise" aria-hidden="true"></div>

        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {/* TEXTO */}
            <div className="col-lg-6 text-center text-lg-start event-text">
              <h1 className="event-title">
                Programação Oficial do Sisconec.TA 2026
              </h1>

              <p className="event-description">
                Dois dias de conteúdo estratégico, debates qualificados e
                conexões que impulsionam a inovação em Tecnologias Assistivas no
                Brasil. A programação reúne pesquisadores, gestores públicos,
                indústria e representantes da sociedade civil em um ambiente
                pensado para gerar diálogo, colaboração e impacto real.
              </p>
            </div>

            {/* IMAGEM */}
            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <div className="event-visual">
                <img
                  src={eventImage}
                  alt="Ilustração representando palestrantes e tecnologias assistivas"
                  className="event-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="programacao-page">
        <div className="container">
          <h1 className="programacao-title">Programação do Evento</h1>

          {programacao.map((dia, index) => (
            <div key={index} className="programacao-dia">
              {/* HEADER DO DIA */}
              <button
                className="dia-header"
                onClick={() => setOpenDay(openDay === index ? null : index)}
              >
                <div>
                  <strong>Dia {dia.dia}</strong> — {dia.titulo}
                </div>

                <span className={`dia-status ${dia.statusType}`}>
                  {dia.status}
                </span>
              </button>

              {/* CONTEÚDO */}
              <div
                className={`linha-do-tempo ${
                  openDay === index ? "is-open" : ""
                }`}
                aria-hidden={openDay !== index}
              >
                {dia.eventos.map((evento, i) => (
                  <div key={i} className="evento">
                    <div className="hora">{evento.hora}</div>

                    <div className="evento-card">
                      <h4>{evento.titulo}</h4>
                      <p>{evento.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="programacao-cta">
            <Link className="btn-inscricao" to="/inscricoes">
              Realizar inscrição
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
