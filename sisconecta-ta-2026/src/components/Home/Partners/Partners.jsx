import "./Partners.css";

// depois isso pode vir de API ou CMS
const partners = [
  {
    name: "CINTESP.br",
    logo: "/src/assets/partners/cintesp.png",
    color: "#8d44ad",
  },
  {
    name: "SisLab",
    logo: "/src/assets/partners/sislab.png",
    color: "#f39d12",
  },
  {
    name: "SisAssistiva",
    logo: "/src/assets/partners/sisassistiva.png",
    color: "#9c59b6",
  },
  {
    name: "Prefeitura de Uberlândia",
    logo: "/src/assets/partners/futel.png",
    color: "#2ecc70",
  },
  { name: "UFU", logo: "/src/assets/partners/ufu.png", color: "#f39d12" },
  { name: "Finep", logo: "/src/assets/partners/finep.png", color: "#2ecc70" },
  {
    name: "Viver sem Limite",
    logo: "/src/assets/partners/viver.png",
    color: "#f39d12",
  },
  { name: "gov", logo: "/src/assets/partners/gov.png", color: "#9c59b6" },
];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="partners-title">
          Apoio Institucional,
          <br />
          Patrocínio e Parcerias
        </h2>

        <p className="partners-subtitle">
          O Sisconec.TA 2026 conta com o apoio de instituições e parceiros que
          acreditam na inovação tecnológica como instrumento de inclusão e
          transformação social, fortalecendo a articulação entre ciência,
          indústria, governo e sociedade.
        </p>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="hex-wrapper"
              style={{ "--hex-color": partner.color }}
            >
              <div className="hex">
                <img src={partner.logo} alt={partner.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
