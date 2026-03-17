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
         • Treinador: Weverton Santos
         • Tayana Medeiros – Ouro Paris 2024 (até 86kg)
         • Lara Lima – Bronze Paris 2024 (até 41kg)
         • Inovação no paradesporto
         • Tiro com arco autônomo para deficientes visuais
         • Alcedo Medeiros (Arqueiro)
         • Composição da mesa de autoridades
         • Hino Nacional
         • Pronunciamento das autoridades
         • Celebração do Termo de Adesão ao programa Novo Viver Sem Limites
         • Paulo Sérgio (Prefeito de Uberlândia)
         • Isadora Nascimento (Secretária Nacional PcD – MDHC)
         • Entrega CNPq/MCTI – CINTESP.Br/UFU
         • Homenagem ao paradesporto de Uberlândia
         • Futel, Aparu, Cddu, Adevitrim, Adeviudi, Compod, Asul, Sesi e Praia Clube
        `,
      },
      {
        hora: "11h00",
        titulo:
          "Lançamento da Pedra Fundamental – Praça da Ciência Socioeducativa",
        descricao: `
Projeto do CINTESP.Br/UFU com apoio da:
• FUTEL / Prefeitura de Uberlândia
• SEDES/MCTI
• FINEP

Local: Mundo da Criança – Parque do Sabiá
Somente autoridades credenciadas
Gravação exibida na abertura do dia 21/03
        `,
      },
      {
        hora: "12h30",
        titulo:
          "Lançamento da Pedra Fundamental – POLO.TA (Polo Nacional de Inovação)",
        descricao: `
Projeto do CINTESP.Br/UFU com apoio da:
• SEDES/MCTI
• FINEP
• Prefeitura de Uberlândia

Local: Campus Glória – UFU
Somente autoridades credenciadas
Gravação exibida na abertura do dia 21/03
        `,
      },
      {
        hora: "11h00",
        titulo: "Pitch – Produtos Assistivos da Rede SisAssistiva",
        descricao: "",
      },
      {
        hora: "12h30",
        titulo: "Mostra Interativa de Tecnologias Assistivas",
        descricao: `
Exposição e experimentação de produtos da Rede SisAssistiva.
        `,
      },
      {
        hora: "12h30",
        titulo: "Oficinas Interativas de Tecnologias Assistivas",
        descricao: `
Atividades práticas com tecnologias assistivas em parceria com empresas.
        `,
      },
      {
        hora: "12h30",
        titulo: "Almoço Livre – Praça de Alimentação da Arena",
        descricao: "Almoço não subsidiado.",
      },
      {
        hora: "14h00",
        titulo: "PAINEL 1 – Pesquisa e Inovação nas Empresas Brasileiras",
        descricao: `
Mediador:
• Ferdinando Kun – Líder de Comunidade

Painelistas:
• Fabiano Alves – Prefeitura de Uberlândia
• Ricardo Cappelli – ABDI
• Daniel Almeida Filho – SETEC/MCTI
• Wadson Ribeiro – FINEP
• Guilherme Lira – TecAssistiva
        `,
      },
      {
        hora: "16h00",
        titulo: "PAINEL 2 – Inclusão socioprodutiva regional",
        descricao: `
Mediadora:
• Tania Maria de Souza Toledo – Secretaria de Educação

Painelistas:
• Inácio Arruda – SEDES/MCTI
• Isadora Nascimento – MDHC
• Fábio Araújo – Secretaria de Paradesporto
• Renato Carvalho Fernandes – Prefeito de Araguari
        `,
      },
      {
        hora: "14h00",
        titulo: "Rodas de Conversa com empresas e startups",
        descricao:
          "Interação entre empresas, empreendedores e setores do governo.",
      },
      {
        hora: "15h00",
        titulo: "Atendimento FINEP – Coordenadores da Rede SisAssistiva",
        descricao: "Local: Sala Cintesp.Br",
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
• Vídeo institucional – POLO.TA e Praça da Ciência
• Composição da mesa (FINEP, SEDES/MCTI, UFU, SISLAB)
• Lançamento do site SisAssistiva
• Lançamento do Mapa SisAssistiva
• Termo de adesão da Rede SisAssistiva
• Lançamento do Livro Digital SisAssistiva
• Discussões estratégicas da rede
        `,
      },
      {
        hora: "10h30",
        titulo: "PAINEL 3 – Políticas Públicas para Tecnologia Assistiva",
        descricao: `
Mediadora:
• Ana Marta de Souza – Diretora FEMEC/UFU

Expositores:
• Polliana Tannus Bernardes – Sec. Educação Prata
• Rodrigo Abreu Machado – Ministério do Esporte
• Milton Pereira Filho – MCTI
• Polyana Penna – IBICT
• Janine Peixoto – UFU
• Paulo Gonçalves Veloso – MPT
        `,
      },
      {
        hora: "10h30",
        titulo: "Mostra Interativa – Rede SisAssistiva",
        descricao: "Exposição e experimentação de soluções assistivas.",
      },
      {
        hora: "10h30",
        titulo: "Atendimento FINEP – Rede SisAssistiva",
        descricao: "",
      },
      {
        hora: "12h00",
        titulo: "Almoço Livre – Praça de Alimentação",
        descricao: "Almoço não subsidiado.",
      },
      {
        hora: "13h30",
        titulo: "Oficinas Interativas de Tecnologias Assistivas",
        descricao: "",
      },
      {
        hora: "14h00",
        titulo: "PAINEL 4 – Regulamentação e Emprego PcD",
        descricao: `
Mediadora:
• Carla Patrícia Guimarães – INT

Painelistas:
• Vivian Oliveira – ANVISA
• Carlos Azevedo – INMETRO
• Idari Alves – Prefeitura de Uberlândia
• Edison Passafaro – ABNT
• Lindomar Alves – Empresa Mover
        `,
      },
      {
        hora: "16h00",
        titulo: "Intervalo",
        descricao: "",
      },
      {
        hora: "16h30",
        titulo: "PAINEL 5 – Empreendedorismo e Empresas Competitivas",
        descricao: `
Mediadora:
• Sonia da Costa – SEDES/MCTI

Painelistas:
• Elder Lima – SEBRAE Minas
• Rafael Reimann Baptista – BioHub PUCRS
• Guilherme Calheiros – EMBRAPII
• Rogério Marino Franco – SENAI Uberlândia
        `,
      },
      {
        hora: "18h00",
        titulo: "Encerramento Oficial",
        descricao: "",
      },
      {
        hora: "20h00",
        titulo: "Confraternização por adesão",
        descricao: "",
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
