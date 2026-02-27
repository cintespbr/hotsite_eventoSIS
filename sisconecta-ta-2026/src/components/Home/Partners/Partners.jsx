import "./Partners.css";
import cintesp from "../../../assets/partners/cintesp.png";
import sislab from "../../../assets/partners/sislab.png";
import sisassistiva from "../../../assets/partners/sisassistiva.png";
import futel from "../../../assets/partners/futel.png";
import ufu from "../../../assets/partners/ufu.png";
import finep from "../../../assets/partners/finep.png";
import viver from "../../../assets/partners/viver.png";
import gov from "../../../assets/partners/gov.png";

const partners = [
  {
    name: "CINTESP.Br",
    logo: cintesp,
    color: "#8d44ad",
  },
  {
    name: "SisLab",
    logo: sislab,
    color: "#f39d12",
  },
  {
    name: "SisAssistiva",
    logo: sisassistiva,
    color: "#9c59b6",
  },
  {
    name: "FUTEL",
    logo: futel,
    color: "#2ecc70",
  },
  { name: "UFU", logo: ufu, color: "#f39d12" },
  { name: "Finep", logo: finep, color: "#2ecc70" },
  {
    name: "Viver sem Limite",
    logo: viver,
    color: "#f39d12",
  },
  { name: "gov", logo: gov, color: "#9c59b6" },
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
