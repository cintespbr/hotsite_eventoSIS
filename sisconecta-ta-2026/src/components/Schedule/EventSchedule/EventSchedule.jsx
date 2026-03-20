import { useState } from "react";
import { Link } from "react-router-dom";
import "./EventSchedule.css";
import eventImage from "../../../assets/event-hero.png";
import EventGuestsSection from "./EventGuestsSection";

const programacao = [
  {
    dia: "20/03",
    titulo: "Governança, Inovação, Ciência e Comunidade",
    status: "Aberto ao Público",
    statusType: "open",
    eventos: [
      {
        hora: "08h00",
        titulo: "Credenciamento e recepção.",
        descricao: "",
      },
      {
        hora: "09h00",
        titulo: "Abertura Oficial – Cerimonial (Arena Sabiazinho)",
        descricao: `
• Apresentação cultural – Mestre Fabinho
• Demonstração de halterofilismo paralímpico
• Weverton Santos (Treinador)
• Tayana Medeiros – Ouro Paris 2024
• Lara Lima – Bronze Paris 2024

• Inovação no paradesporto
• Tiro com arco autônomo – Alcedo Medeiros

• Composição da mesa de autoridades
• Hino Nacional
• Pronunciamento das autoridades

• Celebração do Termo de Adesão – Novo Viver Sem Limites
• Paulo Sérgio (Prefeito)
• Isadora Nascimento (MDHC)

• Entrega CNPq/MCTI – CINTESP.Br/UFU

• Homenagem ao paradesporto de Uberlândia
• Futel, Aparu, Cddu, Adevitrim, Adeviudi, Compod, Asul, Sesi e Praia Clube
        `,
      },

      {
        hora: "11h00",
        titulo: "Lançamento – Praça da Ciência (Parque do Sabiá)",
        descricao: `
Projeto do CINTESP.Br/UFU com apoio de:
• FUTEL / Prefeitura de Uberlândia
• SEDES/MCTI
• FINEP

Local: Parque do Sabiá  
Somente autoridades  
Exibição no dia 21/03
        `,
      },

      {
        hora: "12h30",
        titulo: "Lançamento – POLO.TA",
        descricao: `
Polo Nacional de Inovação em Produtos Assistivos

Apoio:
• SEDES/MCTI
• FINEP
• Prefeitura de Uberlândia

Local: Campus Glória – UFU  
Somente autoridades  
Exibição no dia 21/03
        `,
      },

      {
        hora: "11h00",
        titulo: "Pitch – Rede SisAssistiva",
        descricao: "Apresentação rápida de produtos inovadores.",
      },

      {
        hora: "12h30",
        titulo: "Mostra Interativa",
        descricao:
          "Exposição e experimentação de tecnologias assistivas (ver hotsite).",
      },

      {
        hora: "12h30",
        titulo: "Oficinas Interativas",
        descricao:
          "Atividades práticas com tecnologias assistivas (ver hotsite).",
      },

      {
        hora: "12h30",
        titulo: "Almoço Livre",
        descricao: "Praça de alimentação da arena (não subsidiado).",
      },

      {
        hora: "14h00",
        titulo: "PAINEL 1 – Inovação nas Empresas",
        descricao: `
Mediador:
• Ferdinando Kun

Painelistas:
• Fabiano Alves – Prefeitura de Uberlândia
• Daniel Almeida Filho – SETEC/MCTI (Online)
• Wadson Ribeiro – FINEP
• Guilherme Lira – TecAssistiva
• Babu Belarmino – Colibri Interfaces
        `,
      },

      {
        hora: "16h00",
        titulo: "PAINEL 2 – Inclusão Socioprodutiva",
        descricao: `
Mediadora:
• Tania Toledo – Sec. Educação

Painelistas:
• Inácio Arruda – SEDES/MCTI
• Isadora Nascimento – MDHC
• Fábio Araújo – Paradesporto
• Renato Fernandes – Prefeito de Araguari
        `,
      },

      {
        hora: "14h00",
        titulo: "Rodas de Conversa",
        descricao: "Interação com empresas, startups e governo.",
      },

      {
        hora: "15h00",
        titulo: "Atendimento FINEP",
        descricao: "Para coordenadores da rede (Sala Cintesp.Br).",
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
        titulo: "Recepção",
        descricao: "",
      },

      {
        hora: "09h00",
        titulo: "Abertura do Dia – Cerimonial",
        descricao: `
• Vídeo POLO.TA e Praça da Ciência
• Composição da mesa institucional
• Lançamento do Site SisAssistiva
• Lançamento do Mapa SisAssistiva
• Termo de adesão da rede
• Lançamento do Livro Digital
• Planejamento estratégico da rede
        `,
      },

      {
        hora: "10h30",
        titulo: "PAINEL 3 – Políticas Públicas",
        descricao: `
Mediadora:
Paula Adriana Vieira da Cunha - Supervisora Educacional (SESI)

Expositores:
• Polliana Bernardes – Educação Prata
• Rodrigo Machado – Ministério do Esporte
• Milton Pereira – MCTI
• Polyana Penna – IBICT
• Janine Peixoto – UFU

Objetivos:
• Projeto piloto PcD
• Formação em Tecnologia Assistiva
• Inclusão produtiva regional
        `,
      },

      {
        hora: "10h30",
        titulo: "Mostra Interativa",
        descricao: "Exposição de soluções assistivas.",
      },

      {
        hora: "10h30",
        titulo: "Atendimento FINEP",
        descricao: "",
      },

      {
        hora: "12h00",
        titulo: "Almoço Livre",
        descricao: "Praça de alimentação (não subsidiado).",
      },

      {
        hora: "13h30",
        titulo: "Oficinas Interativas",
        descricao: "",
      },

      {
        hora: "14h00",
        titulo: "PAINEL 4 – Regulamentação e Emprego PcD",
        descricao: `
Mediadora:
• Carla Guimarães – INT

Painelistas:
• Carlos Azevedo – INMETRO
• Idari Alves – Prefeitura
• Edison Passafaro – ABNT (Online)
• Lindomar Santos – Mover
        `,
      },

      {
        hora: "16h00",
        titulo: "Intervalo",
        descricao: "",
      },

      {
        hora: "16h30",
        titulo: "PAINEL 5 – Empreendedorismo",
        descricao: `
Mediadora:
• Sonia da Costa – SEDES/MCTI

Painelistas:
• Elder Lima – SEBRAE
• Rafael Baptista – BioHub PUCRS
• Rogério Franco – SENAI
        `,
      },

      {
        hora: "18h00",
        titulo: "Encerramento Oficial",
        descricao: "",
      },

      {
        hora: "20h00",
        titulo: "Confraternização",
        descricao: "Por adesão.",
      },
    ],
  },
];

export default function Programacao() {
  const [openDay, setOpenDay] = useState(0);

  const renderDescricao = (descricao) => {
    if (!descricao) return null;

    const linhas = Array.isArray(descricao) ? descricao : descricao.split("\n");

    const conteudo = [];
    let lista = [];

    linhas.forEach((linha, index) => {
      const texto = linha.trim();

      if (!texto) return;

      const isItem = texto.startsWith("•") || texto.startsWith("-");

      if (isItem) {
        lista.push(texto.replace(/^[•-]\s*/, ""));
      } else {
        if (lista.length) {
          conteudo.push(
            <ul key={"ul" + index}>
              {lista.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>,
          );
          lista = [];
        }

        conteudo.push(<p key={"p" + index}>{texto}</p>);
      }
    });

    if (lista.length) {
      conteudo.push(
        <ul key="ul-last">
          {lista.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>,
      );
    }

    return conteudo;
  };

  return (
    <main className="event-page">
      <section className="event-hero">
        <div className="event-overlay"></div>
        <div className="event-noise" aria-hidden="true"></div>

        <div className="container event-grid">
          <div className="row align-items-center">
            <div className="col-lg-6 event-left">
              <div className="glass-card event-card">
                <h1 className="event-title">
                  Programação Oficial do Sisconec.TA 2026
                </h1>

                <p className="event-description">
                  Dois dias de conteúdo estratégico, debates qualificados e
                  conexões que impulsionam a inovação em Tecnologias Assistivas
                  no Brasil.
                </p>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-flex justify-content-center event-right">
              <div className="glass-card event-visual">
                <img
                  src={eventImage}
                  alt="Ilustração do evento"
                  className="event-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <EventGuestsSection />
      </section>

      <section className="programacao-page">
        <div className="container">
          <h1 className="programacao-title">Programação do Evento</h1>

          {programacao.map((dia, index) => (
            <div key={index} className="programacao-dia">
              <button
                className="dia-header"
                onClick={() => setOpenDay(openDay === index ? null : index)}
              >
                <div>
                  <strong>Dia {dia.dia}</strong> — {dia.titulo}
                </div>
              </button>

              <div
                className={`linha-do-tempo ${
                  openDay === index ? "is-open" : ""
                }`}
              >
                {dia.eventos.map((evento, i) => (
                  <div key={i} className="evento">
                    <div className="hora">{evento.hora}</div>

                    <div className="evento-card">
                      <h4>{evento.titulo}</h4>

                      {renderDescricao(evento.descricao)}
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
