import "./TeamSection.css";
import { useState, useRef } from "react";
import teamIMG from "../../../assets/section-apoiadores.jpg";

export default function TeamSection() {
  const [open, setOpen] = useState("sislab");

  const refs = {
    sislab: useRef(null),
    mcti: useRef(null),
    apoiadores: useRef(null),
  };

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  const getHeight = (section) => {
    return open === section
      ? `${refs[section].current?.scrollHeight}px`
      : "0px";
  };

  return (
    <section className="team-section">
      <div className="container">
        <div className="row align-items-start">
          {/* TEXTO */}
          <div className="col-lg-7">
            <h2 className="team-title">Conheça Nossa Equipe</h2>

            <p className="team-text">
              Uma equipe comprometida em transformar ideias em impacto,
              promovendo inclusão, colaboração e inovação por meio das
              Tecnologias Assistivas.
            </p>

            <div className="team-accordion">
              {/* SISLAB */}
              <div
                className={`accordion-item ${open === "sislab" ? "active" : ""}`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggle("sislab")}
                >
                  <span>Organização - SisLab</span>
                  <span className="arrow">⌄</span>
                </div>

                <div
                  ref={refs.sislab}
                  className="accordion-content"
                  style={{ maxHeight: getHeight("sislab") }}
                >
                  <div className="accordion-body">
                    <ul>
                      <li>Cleudmar Amaral de Araújo - Coordenador do SisLab</li>
                      <li>Marco Túlio Rodrigues de Andrade</li>
                      <li>Denize Vilela Novais</li>
                      <li>Frederico Sousa Santos</li>
                      <li>Dayane Carolina Reges do Nascimento</li>
                      <li>Daniel Alberto Flórez Morales</li>
                      <li>José Eduardo Arruda Neto</li>
                      <li>Regina Caixeta Ribeiro</li>
                      <li>Cristiane de Paula</li>
                      <li>Leticia Vasconcelos Morais Garcez</li>
                      <li>José Gustavo Campos Maruo</li>
                      <li>Ricardo Santos</li>
                      <li>Mário Eduardo S. Rodrigues</li>
                      <li>Ana Sara Tomé Borges</li>
                      <li>Diego Augusto Costa Alves</li>
                      <li>Márcio Peres de Souza</li>
                      <li>Gabriela Lima Menegaz</li>
                      <li>Jamyle Nascimento dos Santos Rezende</li>
                      <li>Warner Artur Siquieroli</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* MCTI */}
              <div
                className={`accordion-item ${open === "mcti" ? "active" : ""}`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggle("mcti")}
                >
                  <span>Organização - SEDES / MCTI</span>
                  <span className="arrow">⌄</span>
                </div>

                <div
                  ref={refs.mcti}
                  className="accordion-content"
                  style={{ maxHeight: getHeight("mcti") }}
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        Inácio Arruda - Secretário de Ciência e Tecnologia para
                        o Desenvolvimento Social
                      </li>
                      <li>
                        Sônia da Costa - Diretora de Tecnologia Social, Economia
                        Solidária e Tecnologia Assistiva
                      </li>
                      <li>
                        Milton Pereira de Carvalho - Coordenador Geral de
                        Tecnologia Assistiva
                      </li>
                      <li>
                        João Luiz Andrade Filho - Coordenador Técnico de
                        Tecnologia Assitiva
                      </li>
                      <li>
                        Flávia Carolina de Resende Fagundes - Analista em C&T
                      </li>
                      <li>Gastão Santos Sales - Analista em C&T</li>
                      <li>
                        Ricardo Pereira Fernandes - Técnico em Secretariado
                      </li>
                      <li>
                        Valdelice da Silva Souza - Chefe de Gabinete (SEDES)
                      </li>
                      <li>Àgatha Kavalek de Lima - Assessora de Gabinete</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* APOIADORES */}
              <div
                className={`accordion-item ${open === "apoiadores" ? "active" : ""}`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggle("apoiadores")}
                >
                  <span>Apoiadores</span>
                  <span className="arrow">⌄</span>
                </div>

                <div
                  ref={refs.apoiadores}
                  className="accordion-content"
                  style={{ maxHeight: getHeight("apoiadores") }}
                >
                  <div className="accordion-body">
                    <ul>
                      <li>Ministério de Ciência e Tecnologia - MCTI</li>
                      <li>Universidade Federal de Uberlândia - UFU</li>
                      <li>
                        Fundação Uberlandense do Turismo, Esporte e Lazer -
                        FUTEL
                      </li>
                      <li>Financiadora de Estudos e Projetos - FINEP</li>
                      <li>
                        Conselho Nacional de Desenvolvimento Científico e
                        Tecnológico - CNPq
                      </li>
                      <li>
                        Centro Brasileiro de Referência em Inovação Tecnológica
                        Assistiva - CINTESP.Br
                      </li>
                      <li>Fundação de Apoio Universitário - FAU</li>
                      <li>
                        Conselho Municipal da Pessoa com Deficiência de
                        Uberlândia - COMPOD
                      </li>
                      <li>
                        Ministério dos Direitos Humanos e da Cidadania - MDHC
                      </li>
                      <li>
                        Sistema Nacional de Laboratórios de Tecnologia Assistiva
                        - SisAssistiva
                      </li>
                      <li>Laboratório Integrador SEDES/MCTI-UFU - SisLab</li>
                      <li>Ministério Público do Trabalho - MPT</li>
                      <li>
                        Fundação de Amparo à Pesquisa do Estado de Minas Gerais
                        - FAPEMIG
                      </li>
                      <li>
                        Coordenação de Aperfeiçoamento de Pessoal de Nível
                        Superior - CAPES
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIREITA */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="team-placeholder">
              <img
                src={teamIMG}
                alt="Equipe do Sisconec.TA 2026"
                className="team-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
