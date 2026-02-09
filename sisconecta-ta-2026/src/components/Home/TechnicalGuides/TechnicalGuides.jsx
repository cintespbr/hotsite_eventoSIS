import "./TechnicalGuides.css";

export default function TechnicalGuides() {
  return (
    <section className="guides-section">
      <div className="container">
        <h2 className="guides-title">Guias Técnicos</h2>

        <div className="row g-4">
          {/* CARD ESQUERDO */}
          <div className="col-lg-6">
            <div className="guide-card">
              <div className="guide-header">
                <span className="guide-icon"></span>
                <div>
                  <h3>Clínica FINEP</h3>
                  <p>Checklist Administrativo</p>
                </div>
              </div>

              <ul className="guide-list">
                <li>Compras e contratações (Justificativas)</li>
                <li>Documentação para prestação de contas</li>
                <li>Importação de equipamentos e insumos</li>
                <li>Propriedade Intelectual e parcerias</li>
              </ul>
            </div>
          </div>

          {/* CARD DIREITO */}
          <div className="col-lg-6">
            <div className="guide-card">
              <div className="guide-header">
                <span className="guide-icon"></span>
                <div>
                  <h3>Qualidade & Regulação</h3>
                  <p>Painel INMETRO / ANVISA</p>
                </div>
              </div>

              <ul className="guide-list info">
                <li>Caminhos de qualidade e ensaios técnicos</li>
                <li>Consultoria pontual sobre conformidade</li>
                <li>Evidências mínimas por tipo de TA</li>
                <li>Orientações regulatórias específicas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
