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
        titulo: "Abertura do evento",
        descricao:
          "Sessão de abertura do evento com a presença de autoridades, apresentações e lançamentos",
      },
      {
        hora: "11h00",
        titulo: "Homenagens aos atletas paralímpicos",
        descricao:
          "Homenagem a atletas paralímpicos e apresentação de performace conceitual de modalidade paralímpica",
      },
      {
        hora: "11h00",
        titulo: "Apresentação de produtos assistivos",
        descricao:
          "Apresentação Pitch de produtos assistivos inovadores da Rede SisAssistiva.",
      },
      {
        hora: " 12h30",
        titulo: "Mostra interativa e Oficinas interativas",
        descricao:
          "Exposição, experimentação e atividades práticas com produtos da Rede SisAssistiva, empresas parceiras e tecnologias assistivas diversas.",
      },
      {
        hora: " 14h00",
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
        titulo: "Atividade Cultural",
        descricao:
          "Atividade Cultural com o Lançamento do Mapa de Projetos do SisAssistiva e Mesa de Converça da Rede SisAssistiva",
      },
      {
        hora: "10h30",
        titulo: "Intervalo — Coffee Break",
        descricao: "Pausa para integração e networking entre os participantes.",
      },
      {
        hora: "11h00",
        titulo: "Atendimento FINEP",
        descricao: "Atendimento técnico e consultoria especializada do FINEP.",
      },
      {
        hora: "12h00",
        titulo: "Almoço — Livre",
        descricao:
          "Intervalo para almoço, com retorno às atividades no período da tarde.",
      },
      {
        hora: "14h00",
        titulo: "Painel 1 — INMETRO / ANVISA",
        descricao:
          "Painel dedicado à acreditação, regulação e ensaios técnicos aplicáveis às Tecnologias Assistivas.",
      },
      {
        hora: "15h30",
        titulo: "Intervalo — Coffee Break",
        descricao: "Pausa para integração e networking entre os participantes.",
      },
      {
        hora: "16H00",
        titulo: "Painel 2 - Ciência, Mercado e Impacto",
        descricao:
          "Painel dedicado à Ciência, Mercado e Impacto Social da universidade para a sociedade: transferência tecnológica em Tecnologias Assistivas",
      },
      {
        hora: "17h30",
        titulo: "Encerramento do evento",
        descricao:
          "Encerramento oficial do evento com agradecimentos e perspectivas futuras para a Rede SisAssistiva.",
      },
      {
        hora: "19h30",
        titulo: "Confraternização por adesão",
        descricao: "Evento de confraternização.",
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

                {/*<span className={`dia-status ${dia.statusType}`}>
                  {dia.status}
                </span>*/}
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
