import { Link } from "react-router-dom";
import "./ProgramPreview.css";

export default function ProgramPreview() {
  return (
    <section className="program-section">
      <div className="container">
        <h2 className="program-title">Nossa Programação</h2>

        <p className="program-subtitle">
          Dois Dias De Conteúdo, Articulação E Construção Coletiva
        </p>

        {/* DIA 1 */}
        <div className="program-day">
          <h3 className="program-date">20 De Março De 2026</h3>
          <h4 className="program-theme">Governança, Inovação E Comunidade</h4>

          <p className="program-description">
            Um Dia Dedicado Ao Fortalecimento Da Governança, À Troca De
            Experiências E À Aproximação Entre Projetos, Instituições E Pessoas
            Que Constroem As Tecnologias Assistivas No País.
          </p>

          <ul className="program-list">
            <li>Credenciamento E Recepção Acessível</li>
            <li>Abertura Institucional</li>
            <li>Palestra Magna</li>
            <li>Mostra Interativa De Projetos</li>
            <li>Atividades De Articulação E Networking</li>
          </ul>
        </div>

        {/* DIA 2 */}
        <div className="program-day">
          <h3 className="program-date">21 De Março De 2026</h3>
          <h4 className="program-theme">
            Estruturação, Qualidade E Transferência
          </h4>

          <p className="program-description">
            Um Dia Voltado À Consolidação De Caminhos Práticos Para A
            Implementação, Certificação E Transferência De Soluções Em
            Tecnologias Assistivas.
          </p>

          <ul className="program-list">
            <li>Mesas Técnicas E Mediação De Desafios</li>
            <li>Clínica FINEP</li>
            <li>Painéis INMETRO E ANVISA</li>
            <li>Ciência, Mercado E Transferência Tecnológica</li>
            <li>Encerramento E Pactuações Estratégicas</li>
          </ul>
        </div>

        <div className="program-cta">
          <Link className="program-button" to="/programacao">
            Ver Programação Completa
          </Link>
        </div>
      </div>
    </section>
  );
}
