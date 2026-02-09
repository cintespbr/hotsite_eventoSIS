import "./WhyParticipate.css";

export default function WhyParticipate() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="row align-items-center">
          {/* COLUNA TEXTO */}
          <div className="col-lg-7">
            <h2 className="why-title">Por Que Participar?</h2>

            <p className="why-subtitle">
              Participar do conecTA – Sis 2026 é fazer parte de um movimento que
              acredita na inovação como ferramenta de inclusão social.
            </p>

            <h3 className="why-highlight">Conectar, dialogar e transformar</h3>

            <p className="why-intro">
              Durante dois dias, o evento proporciona:
            </p>

            <ul className="why-list">
              <li>Diálogo qualificado entre pesquisa, indústria e governo</li>
              <li>Compartilhamento de experiências práticas e casos reais</li>
              <li>
                Discussões sobre regulação, qualidade e transferência
                tecnológica
              </li>
              <li>Articulação de redes e parcerias estratégicas</li>
              <li>
                Construção coletiva de caminhos para o futuro das Tecnologias
                Assistivas no Brasil
              </li>
            </ul>

            <button className="why-button">Realizar inscrição</button>
          </div>

          {/* COLUNA IMAGEM */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="why-image-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
