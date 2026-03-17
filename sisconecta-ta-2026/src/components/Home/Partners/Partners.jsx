import "./Partners.css";
import cintesp from "../../../assets/partners/cintesp.png";
import sislab from "../../../assets/partners/sislab.png";
import sisassistiva from "../../../assets/partners/sisassistiva.png";
import futel from "../../../assets/partners/futel.png";
import ufu from "../../../assets/partners/ufu.png";
import finep from "../../../assets/partners/finep.png";
import viver from "../../../assets/partners/viver.png";
import mcti from "../../../assets/partners/gov.png";
import granExecutive from "../../../assets/partners/Logotipo-Grn-Dourado.jpg";
import ExecutiveInn from "../../../assets/partners/ExecutiveInn.png";
/*import logoAlgar from "../../../assets/partners/logo-algar.png";*/
import logoCNPQ from "../../../assets/partners/logo-cnpq.png";
import logompt from "../../../assets/partners/logo-mpt.png";
import logoCompod from "../../../assets/partners/logo-compod.jpg";
import logoFau from "../../../assets/partners/logo-fau.jpg";
import logoMarvit from "../../../assets/partners/logo-marvit.png";
import logoFapemig from "../../../assets/partners/logo-fapemig.png";
import logoCapes from "../../../assets/partners/logo-capes.png";

const partners = [
  { name: "MCTI", logo: mcti, color: "#9c59b6" },
  {
    name: "FUTEL",
    logo: futel,
    color: "#2ecc70",
  },
  { name: "UFU", logo: ufu, color: "#f39d12" },
  { name: "Finep", logo: finep, color: "#2ecc70" },
  {
    name: "CNPQ",
    logo: logoCNPQ,
    color: "#f39d12",
  },

  {
    name: "CINTESP.Br",
    logo: cintesp,
    color: "#8d44ad",
  },
  {
    name: "FAU",
    logo: logoFau,
    color: "#8d44ad",
  },
  {
    name: "Compod",
    logo: logoCompod,
    color: "#2ecc70",
  },

  {
    name: "Viver sem Limite",
    logo: viver,
    color: "#f39d12",
  },
  {
    name: "SisAssistiva",
    logo: sisassistiva,
    color: "#9c59b6",
  },
  {
    name: "SisLab",
    logo: sislab,
    color: "#f39d12",
  },

  /* {
    name: "Algar",
    logo: logoAlgar,
    color: "#2ecc70",
  },*/
  {
    name: "MPT",
    logo: logompt,
    color: "#f39d12",
  },

  {
    name: "Fapemig",
    logo: logoFapemig,
    color: "#9c59b6",
  },

  {
    name: "CAPES",
    logo: logoCapes,
    color: "#f39d12",
  },

  {
    name: "Marvit",
    logo: logoMarvit,
    color: "#2ecc70",
  },

  {
    name: "Gran Executive",
    logo: granExecutive,
    color: "#2ecc70",
    bgColor: "#000000",
  },
  {
    name: "Executive Inn",
    logo: ExecutiveInn,
    color: "#f39d12",
  },
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
              style={{
                "--hex-color": partner.color,
                "--bg-color": partner.bgColor,
              }}
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
