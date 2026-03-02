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
        titulo: "Credenciamento e recepção (QR Code Inscrição)",
        descricao: "",
      },
      {
        hora: "09h00",
        titulo:
          "Abertura Oficial na Arena Sabiazinho - Apresentações e Entregas",
        descricao: `
Composição da mesa de autoridades
Abertura e Hino Nacional
Apresentação cultural
Demonstração da modalidade de halterofilismo Paralímpico: Treinador Weverton Santos; medalhista de ouro até 86 kg - Paris/2024 (Tayana Medeiros); medalhista bronze até 41 kg - Paris/2024 (Lara Lima)
Demonstração da proposta “Tiro com arco autônomo para Deficientes Visuais”: Alcedo Medeiros (Arqueiro de tiro com arco)
Pronunciamento das autoridades
Homenagem à equipe de Natação Paralímpica do PRAIA CLUBE (Alberto Martins da Costa)
Homenagem à equipe de Halterofilismo Paralímpico da FUTEL/CDDU/PRAIA CLUBE (Weverton Santos)
Entrega do Termo de Adesão da Cidade de Uberlândia ao Novo Viver Sem Limites - Primeiro Município de Minas Gerais a formalizar adesão ao Novo Viver Sem Limites (Prefeito Paulo Sérgio e Representante do MDHC)
Entrega CNPq / MCTI (Centro Brasileiro de Referência em Inovações Tecnológicas para Esportes Paralímpicos – CINTESP.Br/UFU)
      `,
      },
      {
        hora: "11h00",
        titulo:
          "Lançamento de Pedra Fundamental “PRAÇA DA CIÊNCIA SOCIOEDUCATIVA PARQUE DO SABIÁ”",
        descricao: `
Um projeto do CINTESP.Br/UFU, com apoio da FUTEL, SEDES/MCTI e FINEP.
Somente Autoridades Credenciadas.
Local: Mundo da Criança, Parque do Sabiá.
Gravação será exibida na abertura do dia 21/3.
      `,
      },
      {
        hora: "13h00",
        titulo:
          "Lançamento da Pedra Fundamental “POLO.TA – POLO DE INOVAÇÃO E MANUFATURA AVANÇADA DE PRODUTOS ASSISTIVOS”",
        descricao: `
Um projeto do CINTESP.Br/UFU, com apoio da SEDES/MCTI, FINEP, PREFEITURA UBERLÂNDIA.
Somente Autoridades Credenciadas.
Local: Campus Glória / UFU.
Gravação será exibida na abertura do dia 21/3.
      `,
      },
      {
        hora: "12h00",
        titulo:
          "Apresentação de Produtos Assistivos Inovadores da Rede SisAssistiva (Finep 2022) – Pitch (1,5 min)",
        descricao: "",
      },
      {
        hora: "14h00",
        titulo:
          "Mostra Interativa - Exposição e experimentação de Produtos da Rede SiSAssistiva, Empresas e Associações",
        descricao: "Mostra e planejamentos no Hotsite do evento.",
      },
      {
        hora: "14h00",
        titulo:
          "Oficinas Interativas com Tecnologias Assistivas, Rede SisAssistiva, Empresas e Associações",
        descricao: "Oficinas e planejamentos no Hotsite do evento.",
      },
      {
        hora: "14h00",
        titulo:
          "Interação com empresas, startups, empreendedores e setores do governo – LDB e outros setores",
        descricao: "Mesas para Rodas de Conversa.",
      },
      {
        hora: "14h00",
        titulo:
          "Painel 1 – Pesquisa e Inovação nas Empresas Brasileiras (Palco Principal – Arena Sabiazinho)",
        descricao: `
Mediador: Gustavo Amaral – Gerente Administrativo da AACD
Painelistas:
MARCONI ALBUQUERQUE - Coordenador de Instrumentos de Apoio à Inovação/MCTI (A Importância da Lei do Bem – Incentivos Fiscais)
REPRESENTANTE SECRETARIA DE INOVAÇÃO DA PREFEITURA DE UBERLÂNDIA (Contratos Públicos para Inovação)
ZAIMA MILAZZO – Vice-presidente da Algar Telecom (Tecnologia e Inovação)
      `,
      },
      {
        hora: "16h00",
        titulo:
          "PAINEL 2 – Dialogando sobre as oportunidades e os desafios da inclusão socioprodutiva de pessoas com deficiência e idosos nos 24 municípios da Microrregião do Vale do Paranaíba (AMVAP)",
        descricao: `
Mediador: Paulo Sérgio Ferreira, Prefeito de Uberlândia/MG.
Painelistas:
Inácio Arruda, Secretário de Ciência e Tecnologia para o Desenvolvimento Social (SEDES/MCTI)
Isadora Rodrigues Nascimento Santos, Secretária Nacional da Pessoa com Deficiência (SNDPC/MDHC)
Fábio Augusto Lima de Araújo, Secretário Nacional de Paradesporto (Snpar/MEsporte)
Aleandro Francisco da Silva (Candango) – Prefeito de Cachoeira Dourada/MG, Presidente da AMVAP
Kassio Henrique Martins de Lima – Secretário de Educação de Estrela do Sul, Presidente do Conselho Intermunicipal de Educação, CIE/AMVAP
Neívia Costa – Secretária Assistência Social de Monte Carmelo, Presidente do Conselho Intermunicipal de Assistência Social, CIAS/AMVAP
      `,
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
        titulo: "Recepção e Abertura do dia",
        descricao: "",
      },
      {
        hora: "09h00",
        titulo: "Abertura - Apresentações e Entregas",
        descricao: `
Composição da mesa (FINEP, SEDES/MCTI, UFU, CINTESP.Br, SISLAB)
Lançamento do Site SisAssistiva
Lançamento do Mapa SisAssistiva
Termo de adesão do SisAssistiva (Finep 2022)
Lançamento do Livro Digital SisAssistiva – SEDES/MCTI/SISLAB
Lançamento do Livro Digital SisAssistiva – SEDES/MCTI/SISLAB
Lançamento do POLO.TA e PRAÇA DA CIÊNCIA (Vídeo Gravado)
Mesa de Conversa com a FINEP/SISLAB/MCTI
      `,
      },
      {
        hora: "10h30",
        titulo: "Workshop Políticas Públicas de apoio à Tecnologia Assistiva",
        descricao: `
Demandas das Secretarias de Educação da AMVAP e Estruturação do Programa Intermunicipal de Educação Inclusiva para Pessoas com deficiência e idosos – ACT (AMVAP, SINTESP/UFU/MCTI, MEC, MDHC, MEsporte, MS, MDS)

Mediação: Cleudmar Araújo - Coordenador do SisLab/UFU

Expositores:
Poliana - Secretaria executiva da AMVAP
Alexandre Mapurunga - Diretor Políticas de Educação Especial na Perspectiva Inclusiva - MEC
RODRIGO ABREU DE FREITAS MACHADO - Coordenador-Geral de Planejamento e Monitoramento da Política Pública Paradesportiva - MEsp
Milton Pereira Filho – CGTA/MCTI
Polyana Penna – Editora Executiva do IBICT
XXXXXXX - Auditor do Trabalho (MTE)

Objetivos do workshop:
Proposta-Programa: Calendário de atendimento/visita da Equipe CINTESP.Br aos 24 Munícipios para desenvolvimento de Projeto Piloto de gestão e integração de dados sobre PcD.
Curso de especialização em TA para o corpo docente e técnico da educação especial/ educação inclusiva e educação física, aberto a comunidade em geral.
Estabelecimento de um programa de inclusão produtiva em parceria com o setor produtivo da região.
      `,
      },
      {
        hora: "10h30",
        titulo:
          "Mostra Interativa - Exposição e experimentação de Produtos da Rede SisAssistiva, Empresas e Associações",
        descricao: "",
      },
      {
        hora: "12h00",
        titulo: "Almoço LIVRE",
        descricao: "",
      },
      {
        hora: "13h30",
        titulo:
          "Oficinas Interativas com Tecnologias Assistivas, Empresas e Associações",
        descricao: "",
      },
      {
        hora: "14h00",
        titulo:
          "Painel 2 – Regulamentação, certificação e promoção do emprego (Lei de Cotas) para PCD",
        descricao: `
Mediador: Carla Patrícia Guimarães - Instituto Nacional de Tecnologia (INT/MCTI)

VIVIAN CARDOSO MORAIS DE OLIVEIRA - Gerente-Geral de Tecnologia de Produtos para a Saúde – ANVISA
CARLOS AUGUSTO AZEVEDO – Assessor da Presidência do INMETRO
IDARI ALVES DA SILVA – Diretor de Acessibilidade e Mobilidade Reduzida da Prefeitura de Uberlândia
Representante da ABNT
Empresa Convidada
      `,
      },
      {
        hora: "16h00",
        titulo: "Intervalo - Coffee break",
        descricao: "",
      },
      {
        hora: "16h30",
        titulo: "Painel 3 – Acessibilidade e Empreendedorismo",
        descricao: `
Mediador: Sonia da Costa – SEDES/MCTI

EDUARDO RAMOS – Analista SEBRAE (Empreendedorismo)
REPRESENTANTE SECRETARIA DE INOVAÇÃO DA PREFEITURA DE UBERLÂNDIA (Acessibilidade)
REPRESENTANTE EMBRAPII (Interação com as Empresas)
ASSOCIAÇÃO CONVIDADA
      `,
      },
      {
        hora: "18h00",
        titulo: "ENCERRAMENTO OFICIAL",
        descricao: "",
      },
      {
        hora: "20h00",
        titulo: "CONFRATERNIZAÇÃO POR ADESÃO",
        descricao: "Local a ser definido.",
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
