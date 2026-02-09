import { useState } from "react";
import "./Showcase.css";

// MOCK DE DADOS (depois pode vir de API)
const items = [
  {
    image: "src/assets/showcase/imagem_bioprot.png",
    title: "Sistemas inovadores para próteses de membro superior",
    description:
      "Desenvolvimento de tecnologias para melhorar a usabilidade de próteses de membros superiores, com feedback sensorial, aprendizado de máquina e redução da rejeição do dispositivo.",
  },
  {
    image: "src/assets/showcase/imagem_ufcgcert.png",
    title: "Psilocibina aplicada ao desenvolvimento de pessoas com TEA",
    description:
      "Pesquisa pioneira no Brasil para desenvolvimento de medicamentos à base de psilocibina, com foco no desenvolvimento cognitivo e socioemocional de pessoas com TEA.",
  },
  {
    image: "src/assets/showcase/imagem_dreanns.jpg",
    title: "Dispositivos de reabilitação e neurotecnologias assistivas",
    description:
      "Desenvolvimento de próteses, órteses, cadeiras de rodas e aplicações de reabilitação com realidade virtual, interfaces cérebro-máquina e inteligência artificial.",
  },
  {
    image: "src/assets/showcase/imagem_tecnoaging.png",
    title: "Tecnologia assistiva para avaliação funcional de idosos",
    description:
      "Uso de sensores, aplicativos e inteligência artificial para avaliação clínico-funcional, prevenção de quedas e promoção da autonomia de idosos usuários do SUS.",
  },
  {
    image: "src/assets/showcase/imagem_fabict_cer.png",
    title: "Automação na fabricação de órteses e próteses personalizadas",
    description:
      "Aplicação de CAD, CAM, CAE e impressão 3D para reduzir custos, tempo de produção e ampliar o acesso a órteses e próteses personalizadas.",
  },
  {
    image: "src/assets/showcase/imagem_amputsus.jpg",
    title: "Soluções inovadoras em protetização para usuários do SUS",
    description:
      "Desenvolvimento do aplicativo AMPUTSUS e modernização dos processos de prescrição e adaptação de próteses de membros inferiores.",
  },
  {
    image: "src/assets/showcase/imagem_crm_iot.png",
    title: "Cadeira de rodas motorizada com telemetria IoT",
    description:
      "Cadeira de rodas adaptativa com monitoramento remoto por IoT, incluindo GPS, alertas de falhas, botão de emergência e componentes de baixo custo.",
  },
  {
    image: "src/assets/showcase/imagem_dua_games.jpg",
    title: "Games acessíveis para desenvolvimento cognitivo",
    description:
      "Criação colaborativa de jogos digitais acessíveis para crianças e adolescentes com deficiência, baseados em desenho universal.",
  },
  {
    image: "src/assets/showcase/imagem_lita.png",
    title: "Desenho universal e comunicação acessível",
    description:
      "Desenvolvimento de soluções em acessibilidade, comunicação tátil, aplicações digitais e mobiliário acessível.",
  },
  {
    image: "src/assets/showcase/imagem_reablita.png",
    title: "Tecnologias móveis para reabilitação auditiva",
    description:
      "Rede de laboratórios dedicada ao desenvolvimento de soluções tecnológicas para diagnóstico, monitoramento e reabilitação auditiva ao longo da vida.",
  },
  {
    image: "src/assets/showcase/imagem_sensegames.jpg",
    title: "Jogos multissensoriais para pessoas com deficiência",
    description:
      "Desenvolvimento de jogos sérios com realidade virtual, aumentada e robótica assistiva para promover inclusão e desenvolvimento cognitivo.",
  },
  {
    image: "src/assets/showcase/imagem_op_mfa.jpg",
    title: "Órteses posturais para autonomia de idosos",
    description:
      "Avaliação do impacto de órteses posturais na mobilidade funcional, atividade física e autonomia de pessoas idosas.",
  },
  {
    image: "src/assets/showcase/imagem_neurobeep.png",
    title: "Robótica educacional para inclusão de crianças com deficiência",
    description:
      "Integração de neurociência, robótica e interfaces cérebro-máquina para inclusão educacional de crianças com deficiências motoras severas.",
  },
  {
    image: "src/assets/showcase/imagem_aleta.jpg",
    title: "Tecnologia assistiva para alfabetização inclusiva",
    description:
      "Mesa digital interativa baseada em desenho universal para apoiar o processo de alfabetização de crianças com deficiência.",
  },
  {
    image: "src/assets/showcase/imagem_teclaboral.png",
    title: "Tecnologia assistiva para autonomia laboral",
    description:
      "Desenvolvimento de dispositivos assistivos para autonomia diária e inclusão no trabalho, com formação de profissionais e transferência tecnológica.",
  },
  {
    image: "src/assets/showcase/imagem_monan.png",
    title: "Plataforma inteligente para diagnóstico do TEA",
    description:
      "Solução integrada de software e hardware para apoio ao diagnóstico e desenvolvimento cognitivo e comunicacional de crianças autistas.",
  },
  {
    image: "src/assets/showcase/imagem_3ducassist.jpg",
    title: "Tecnologias assistivas para educação inclusiva",
    description:
      "Uso de impressão 3D, jardins sensoriais e outras tecnologias assistivas para apoiar práticas educacionais inclusivas.",
  },
  {
    image: "src/assets/showcase/imagem_neurosutre.jpg",
    title: "Estimulação não invasiva para supressão de tremores",
    description:
      "Pesquisa sobre estimulação somatossensitiva para redução de tremores associados à doença de Parkinson e tremor essencial.",
  },
  {
    image: "src/assets/showcase/imagem_sivam.jpg",
    title: "Análise do movimento humano com IA e sensores",
    description:
      "Uso de inteligência artificial, sensores vestíveis e IoT para análise de movimento humano de baixo custo.",
  },
  /*  {
    image: "src/assets/showcase/imagem_assistemt.png",
    title: "Reabilitação pós-AVC com estimulação transcraniana",
    description:
      "Avaliação dos efeitos da estimulação transcraniana não invasiva na recuperação funcional do membro superior após AVC.",
  },*/
  {
    image: "src/assets/showcase/imagem_cuidarlab.png",
    title: "Tecnologias de cuidados sociais",
    description:
      "Desenvolvimento de soluções tecnológicas e estratégias de formação para cuidados sociais de pessoas com deficiência e idosos.",
  },
  {
    image: "src/assets/showcase/imagem_pdcomp.png",
    title: "Pé protético em compósito de baixo custo",
    description:
      "Desenvolvimento de próteses de membro inferior em material compósito, com foco em conforto, durabilidade e custo competitivo.",
  },
  {
    image: "src/assets/showcase/imagem_rps50_ta.jpg",
    title: "Rede de pesquisa em saúde 5.0 e tecnologia assistiva",
    description:
      "Consolidação de uma rede de pesquisa para desenvolvimento de soluções assistivas centradas no indivíduo.",
  },
  {
    image: "src/assets/showcase/imagem_tecincluir.png",
    title: "Rede interinstitucional de tecnologia assistiva",
    description:
      "Desenvolvimento e validação de soluções de tecnologia assistiva por meio de uma rede colaborativa de laboratórios.",
  },
  {
    image: "src/assets/showcase/imagem_reabnet.jpg",
    title: "Telerreabilitação para usuários de cadeiras de rodas",
    description:
      "Desenvolvimento e teste de estratégias de avaliação e intervenção em telerreabilitação para usuários com comprometimento de ombro.",
  },
  {
    image: "src/assets/showcase/imagem_roboptica.png",
    title: "Robótica assistiva e reabilitação inteligente",
    description:
      "Integração de robótica, realidade virtual, biossensores e inteligência artificial para assistência e reabilitação.",
  },
];

export default function Showcase() {
  const VISIBLE_THUMBS = 6;

  const [active, setActive] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);

  const next = () => {
    const newActive = (active + 1) % items.length;
    setActive(newActive);

    if (newActive >= thumbStart + VISIBLE_THUMBS) {
      setThumbStart(thumbStart + VISIBLE_THUMBS);
    }
  };

  const prev = () => {
    const newActive = (active - 1 + items.length) % items.length;
    setActive(newActive);

    if (newActive < thumbStart) {
      setThumbStart(Math.max(thumbStart - VISIBLE_THUMBS, 0));
    }
  };

  return (
    <section className="showcase-section">
      <div className="container">
        <h2 className="showcase-title">O que será apresentado?</h2>

        <p className="showcase-subtitle">
          O Sisconec.TA 2026 apresenta iniciativas, soluções e reflexões que
          fortalecem o ecossistema de Tecnologias Assistivas, reunindo
          diferentes atores e perspectivas.
        </p>

        {/* CARROSSEL */}
        <div className="showcase-carousel">
          {/* SETA ESQUERDA */}
          <button className="nav-arrow left" onClick={prev}>
            ‹
          </button>

          {/* SLIDE */}
          <div key={active} className="showcase-slide slide-animate">
            {" "}
            <img src={items[active].image} alt={items[active].title} />
            {/* GRADIENTE SUPERIOR */}
            <div className="gradient-top"></div>
            {/* CONTEÚDO */}
            <div className="showcase-content">
              <h3>{items[active].title}</h3>
              <p>{items[active].description}</p>
            </div>
            {/* GRADIENTE INFERIOR */}
            <div className="gradient-bottom"></div>
          </div>

          {/* SETA DIREITA */}
          <button className="nav-arrow right" onClick={next}>
            ›
          </button>
        </div>

        {/* THUMBNAILS */}
        <div className="showcase-thumbs">
          {items
            .slice(thumbStart, thumbStart + VISIBLE_THUMBS)
            .map((item, index) => {
              const realIndex = thumbStart + index;

              return (
                <button
                  key={realIndex}
                  className={realIndex === active ? "active" : ""}
                  onClick={() => setActive(realIndex)}
                >
                  <img src={item.image} alt={item.title} />
                </button>
              );
            })}
        </div>
      </div>
    </section>
  );
}
