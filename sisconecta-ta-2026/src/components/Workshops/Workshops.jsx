import { useState } from "react";
import "./Workshops.css";
import workshopsHero from "../../assets/hero-oficinas.jpg";

const workshops = [
  {
    titulo: "Oficina de Gameterapia: Inovações na Reabilitação Funcional",
    tema: "digital",
    link: "https://forms.gle/Pj5vrVWJ5o6X9hm86",
  },
  {
    titulo: "Tecnologia Assistiva como transformação educacional",
    tema: "digital",
    link: "https://forms.gle/fSwyLVay4PGhT6D36",
  },
  {
    titulo: "Ambientes de Realidade Aumentada para Reabilitação e Assistência",
    tema: "digital",
    link: "https://forms.gle/CkCm9YUmc4q45Ksw8",
  },
  {
    titulo: "Como avançar do TRL3 para TRL6",
    tema: "digital",
    link: "https://forms.gle/ugqtTJeY1jWU2WbF6",
  },
  {
    titulo:
      "Ciência Básica, Desenvolvimento Tecnológico ou Inovação em Tecnologia Assistiva. Onde estou?",
    tema: "digital",
    link: "https://forms.gle/2ZXB6NWaDuyGU757A",
  },
  {
    titulo:
      "O Cuidado como tecnologia assistiva de proteção social para pessoas idosas e com deficiência",
    tema: "digital",
    link: "https://forms.gle/BzqD1LLFeD6D76Xx9",
  },
  {
    titulo: "AstroRoll - Um jogo de Realidade Virtual usando cadeira de rodas",
    tema: "digital",
    link: "https://forms.gle/1NbYK9gFhqwRxim78",
  },
  {
    titulo: "Quantificação e análise de compensação do movimento",
    tema: "saude",
    link: "https://forms.gle/8ydQpWXSssxGLo688",
  },
  {
    titulo: "Criando Soluções Inclusivas com Impressão 3D",
    tema: "proteses",
    link: "https://forms.gle/8YDj7rEP5LEbFmKL8",
  },
  {
    titulo: "DuaGames: Tecnologia Assistiva para cocriação de jogos digitais",
    tema: "educacao",
    link: "https://forms.gle/Vcc2pczPD7wvXm5u7",
  },
  {
    titulo: "Projeto ALETA - Alfabetizar letrando",
    tema: "educacao",
    link: "https://forms.gle/3YXYUoADP9sf8yQY7",
  },
  {
    titulo: "Programando Robôs: introdução à programação em blocos",
    tema: "educacao",
    link: "https://forms.gle/wY6mz1J4F7i7VTCs5",
  },
  {
    titulo: "Exposição de jogos lúdicos pedagógicos para professores",
    tema: "educacao",
    link: "https://forms.gle/59RCPM3EtKHRPQut8",
  },
  {
    titulo: "Oficina de Língua Brasileira de Sinais - Libras",
    tema: "educacao",
    link: "https://forms.gle/YpfeQk1e8dovxzYi6",
  },
  {
    titulo:
      "Implementação de Comunicação Aumentativa e Alternativa no Método DHACA",
    tema: "educacao",
    link: "https://forms.gle/8PfSa9HA6JBwQysY7",
  },
  {
    titulo: "Modelos 3D Educativos: Alta resolução no significado tátil",
    tema: "educacao",
    link: "https://forms.gle/waUKEsHVFwH6gozq7",
  },
  {
    titulo: "Braille na Prática: Literatura Tátil e Escrita em Braille",
    tema: "educacao",
    link: "https://forms.gle/eQYg4KZkvWYsZX4BA",
  },
  {
    titulo:
      "Implementando recursos da CAA para famílias de crianças com Necessidades Complexas de Comunicação",
    tema: "educacao",
    link: "https://forms.gle/ry2JWqnS4Qfv2Bjr8",
  },
  {
    titulo:
      "Comunicação Aumentativa e Alternativa: acessibilidade comunicacional para estudantes com TEA",
    tema: "educacao",
    link: "https://forms.gle/s5417Ym89hFUXgRY8",
  },
  {
    titulo: "Comunicação Aumentativa e Alternativa com a plataforma Reaact",
    tema: "educacao",
    link: "https://forms.gle/4KufftHyhKZiVR1C7",
  },
  {
    titulo: "IA como ferramenta assistiva e inclusiva",
    tema: "digital",
    link: "https://forms.gle/4xkDQwK8aKFeNqaw9",
  },
  {
    titulo: "Tecnologia brasileira para acessibilidade auditiva",
    tema: "saude",
    link: "https://forms.gle/sJJ2VSGqhTqu2BMR8",
  },
  {
    titulo: "O Futuro da Reabilitação é 3D",
    tema: "proteses",
    link: "https://forms.gle/bLL6fsaBVssKrcii8",
  },
  {
    titulo: "Desvendando o BodyTracking com uso de visão computacional",
    tema: "saude",
    link: "https://forms.gle/YU6bUEkMwm5n1c6b7",
  },
];

export default function Workshops() {
  const [filtro, setFiltro] = useState("todos");

  const workshopsFiltrados =
    filtro === "todos" ? workshops : workshops.filter((w) => w.tema === filtro);

  return (
    <main className="workshops-page">
      {/* HERO */}
      <section className="workshops-hero">
        <div className="workshops-overlay"></div>
        <div className="workshops-noise"></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 workshops-left">
              <div className="glass-card workshops-card">
                <h1 className="workshops-hero-title">
                  Oficinas do Sisconec.TA 2026
                </h1>

                <p className="workshops-hero-text">
                  As oficinas do Sisconec.TA 2026 oferecem experiências práticas
                  e interativas sobre Tecnologias Assistivas, reunindo
                  pesquisadores, educadores e profissionais em atividades que
                  exploram inovação, inclusão e acessibilidade em diferentes
                  áreas do conhecimento.
                </p>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <div className="glass-card workshops-visual">
                <img
                  src={workshopsHero}
                  alt="Oficinas de Tecnologia Assistiva"
                  className="workshops-hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LISTA DE OFICINAS */}
      <section className="workshops-section">
        <div className="container">
          <h2 className="workshops-title">Oficinas do Evento</h2>

          <p className="workshops-subtitle">
            As oficinas do Sisconec.TA 2026 foram pensadas para oferecer
            experiências práticas e interativas sobre o desenvolvimento e a
            aplicação de Tecnologias Assistivas em diferentes áreas.
          </p>

          {/* FILTROS */}
          <div className="workshops-filters">
            <button onClick={() => setFiltro("todos")}>Todas</button>
            <button onClick={() => setFiltro("digital")}>
              Tecnologias Digitais
            </button>
            <button onClick={() => setFiltro("educacao")}>
              Tecnologias Educacionais
            </button>
            <button onClick={() => setFiltro("saude")}>
              Saúde e Reabilitação
            </button>
            <button onClick={() => setFiltro("proteses")}>
              Órteses e Próteses
            </button>
          </div>

          {/* GRID */}
          <div className="workshops-grid">
            {workshopsFiltrados.map((w, i) => (
              <a
                key={i}
                href={w.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`workshop-card tema-${w.tema}`}
              >
                <div className="workshop-overlay"></div>
                <h3>{w.titulo}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
