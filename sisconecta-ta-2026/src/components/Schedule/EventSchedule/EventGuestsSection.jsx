import { useState } from "react";
import "./EventGuestsSection.css";

import luciana from "../../../assets/mctifiles/minis-luciana.jpeg";
import paulo from "../../../assets/mctifiles/pref-paulo.jpg";
import reitor from "../../../assets/mctifiles/reitor.jpeg";
import inacio from "../../../assets/mctifiles/secre-inacio.jpeg";

export default function EventGuestsSection() {
  const [selectedGuest, setSelectedGuest] = useState(null);

  const guests = [
    {
      name: "Luciana Santos",
      cargo: "Ministra da Ciência, Tecnologia e Inovação do Brasil",
      image: luciana,
      bio: "<strong>Luciana Barbosa de Oliveira Santos</strong> é engenheira eletricista formada pela UFPE e atual Ministra da Ciência, Tecnologia e Inovação do Brasil, cargo que assumiu em 2022, tornando-se a primeira mulher a ocupá-lo. Iniciou sua trajetória no movimento estudantil e construiu carreira política como deputada estadual e federal, prefeita de Olinda por dois mandatos, secretária estadual e vice-governadora de Pernambuco, destacando-se pela atuação em ciência, tecnologia, inovação e políticas públicas.",
    },
    {
      name: "Inácio Arruda",
      cargo:
        "Secretário de Ciência e Tecnologia para o Desenvolvimento Social – MCTI",
      image: inacio,
      bio: "<strong>Inácio Arruda</strong>, é servidor aposentado do Tribunal de Justiça do Ceará, possui formação técnica em Mecânica de Máquinas e Eletrotécnica pela Escola Técnica Federal do Ceará e também cursou Direito e Matemática pela Universidade Federal do Ceará. Foi deputado estadual, deputado federal por três mandatos e senador da República pelo Ceará.",
    },
    {
      name: "Paulo Sérgio",
      cargo: "Prefeito de Uberlândia",
      image: paulo,
      bio: "<strong>Paulo Sérgio Ferreira</strong> é engenheiro civil e administrador de empresas, com MBA em Gestão Empresarial pela USP. Atuou como secretário municipal em diversas áreas da Prefeitura de Uberlândia, incluindo Indústria e Comércio, Trânsito e Transportes e Desenvolvimento Econômico. Foi vice-prefeito do município e também diretor-geral do Departamento Municipal de Água e Esgoto (DMAE).",
    },
    {
      name: "Carlos Henrique de Carvalho",
      cargo: "Reitor da Universidade Federal de Uberlândia - UFU",
      image: reitor,
      bio: "<strong>Carlos Henrique de Carvalho</strong> é professor titular da Faculdade de Educação. Possui graduação em História pela UFU, doutorado em História Econômica pela Universidade de São Paulo e pós-doutorado em História da Educação pela Universidade de Lisboa. Atua há mais de três décadas na UFU e foi pró-reitor de Pesquisa e Pós-Graduação entre 2017 e 2024.",
    },
  ];

  return (
    <section className="guests-section">
      <div className="container">
        <div className="guests-header">
          <h2>Autoridades Confirmadas</h2>

          <p>
            O Sisconec.TA 2026 contará com a presença de autoridades,
            pesquisadores e gestores públicos que atuam diretamente na
            construção de políticas e iniciativas de inovação em Tecnologia
            Assistiva no Brasil.
          </p>
        </div>

        <div className="guests-grid">
          {guests.map((guest, index) => (
            <div
              key={index}
              className="guest-card"
              onClick={() => setSelectedGuest(guest)}
            >
              <img src={guest.image} alt={guest.name} />

              <div className="guest-gradient"></div>

              <div className="guest-name">{guest.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}

      {selectedGuest && (
        <div className="guest-modal-overlay">
          <div className="guest-modal">
            <button
              className="guest-modal-close"
              onClick={() => setSelectedGuest(null)}
            >
              ✕
            </button>

            <div className="guest-modal-content">
              <div className="guest-modal-image">
                <img src={selectedGuest.image} alt={selectedGuest.name} />
              </div>

              <div className="guest-modal-info">
                <h3>{selectedGuest.name}</h3>
                {/* CARGO */}
                <p className="guest-role">
                  <b>Cargo:</b> {selectedGuest.cargo}
                </p>
                <p
                  dangerouslySetInnerHTML={{ __html: selectedGuest.bio }}
                ></p>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
