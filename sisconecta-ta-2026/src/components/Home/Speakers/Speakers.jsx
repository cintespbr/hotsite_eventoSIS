import "./Speakers.css";

export default function Speakers() {
  return (
    <section className="speakers-section">
      <div className="container">
        <h2 className="speakers-title">Palestrantes E convidados</h2>

        <p className="speakers-subtitle">
          Experiência, diversidade e visão de futuro
        </p>

        {/* RESUME */}
        <div className="resume">
          <p className="speakers-description">
            O Sisconec.TA 2026 reúne especialistas reconhecidos nacionalmente,
            pesquisadores, gestores públicos e representantes da indústria,
            criando um ambiente plural, qualificado e orientado à prática. Os
            convidados trazem diferentes perspectivas — científica, regulatória,
            tecnológica e social — contribuindo para debates consistentes e
            conectados com a realidade do setor.
          </p>

          <div className="speakers-cta">
            <button className="speakers-button">Conheça os Palestrantes</button>
          </div>
        </div>
      </div>
    </section>
  );
}
