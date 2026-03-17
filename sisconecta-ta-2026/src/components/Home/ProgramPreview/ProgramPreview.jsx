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
            Um dia dedicado à articulação institucional, inovação no
            paradesporto e conexão entre governo, academia e setor produtivo,
            com demonstrações, painéis estratégicos e experiências práticas em
            tecnologias assistivas.
          </p>

          <ul className="program-list">
            <li>Credenciamento e Abertura Oficial (Cerimonial)</li>
            <li>Demonstrações de Tecnologias e Paradesporto</li>
            <li>Lançamentos Institucionais (POLO.TA e Praça da Ciência)</li>
            <li>Mostra Interativa e Oficinas de Tecnologias Assistivas</li>
            <li>Painéis de Inovação e Inclusão Socioprodutiva</li>
            <li>Networking com empresas, startups e governo</li>
          </ul>
        </div>

        {/* DIA 2 */}
        <div className="program-day">
          <h3 className="program-date">21 De Março De 2026</h3>
          <h4 className="program-theme">
            Estruturação Da Rede E Transferência Tecnológica
          </h4>

          <p className="program-description">
            Um dia voltado à consolidação da Rede SisAssistiva, com foco em
            políticas públicas, capacitação, regulamentação e fortalecimento do
            ecossistema de inovação em tecnologias assistivas no Brasil.
          </p>

          <ul className="program-list">
            <li>Abertura institucional e integração da Rede SisAssistiva</li>
            <li>Painel de Políticas Públicas e Educação Inclusiva</li>
            <li>Mostra e Oficinas de Tecnologias Assistivas</li>
            <li>Painel de Regulamentação, Certificação e Emprego PcD</li>
            <li>Painel de Empreendedorismo e Inovação</li>
            <li>Encerramento oficial e confraternização</li>
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
