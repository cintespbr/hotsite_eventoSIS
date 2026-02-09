import "./TargetAudience.css";

export default function TargetAudience() {
  return (
    <section className="target-section">
      <div className="container">
        <h2 className="target-title">Para quem é o SiSconec.TA 2026</h2>

        <p className="target-subtitle">
          O conecTA – Sis 2026 é direcionado a todos que atuam ou se interessam
          pelo ecossistema de Tecnologias Assistivas:
        </p>

        <div className="target-card">
          <ul className="target-list">
            <li>Pesquisadores, docentes e estudantes</li>
            <li>Startups, desenvolvedores e empreendedores</li>
            <li>Indústrias e polos de manufatura</li>
            <li>Gestores públicos e formuladores de políticas</li>
            <li>Profissionais da saúde, reabilitação e educação</li>
            <li>Instituições de fomento, inovação e regulação</li>
            <li>Usuários e representantes da sociedade civil</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
