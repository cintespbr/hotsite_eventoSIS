import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-title">Detalhes do Evento</h2>

        <div className="row g-4 align-items-stretch">
          {/* COLUNA ESQUERDA */}
          <div className="col-lg-7">
            <div className="about-card light">
              <h3>
                Conectando Pesquisa, Indústria e Inclusão em Tecnologias
                Assistivas
              </h3>

              <p>
                O evento tem como propósito central fortalecer a articulação
                nacional da <strong>Rede SisAssistiva</strong>, promovendo
                conexões diretas entre projetos, empresas e instituições por
                meio da apresentação de tecnologias e inovações, ao mesmo tempo
                em que constrói caminhos sólidos para acreditação,
                escalabilidade e transferência de tecnologia.
              </p>

              <p>
                A iniciativa também busca ampliar o acesso da sociedade às
                Tecnologias Assistivas, estimulando sua visibilidade,
                compreensão e apropriação por usuários, profissionais e
                organizações públicas e privadas. O protagonismo técnico e
                institucional é conduzido pelo SisLab e pelo
                <strong> CINTESP.br</strong>, que lideram a articulação dos
                conteúdos, conexões e diretrizes técnicas, garantindo coerência
                estratégica, profundidade técnica e alinhamento com políticas
                públicas e demandas reais do setor.
              </p>

              <p>
                O evento reúne <strong>26 projetos da Rede SisAssistiva</strong>{" "}
                e integra um ecossistema diverso que inclui representantes do
                governo, com destaque para o MCTI, além de instituições
                estratégicas como <strong>FINEP, INMETRO e ANVISA</strong>, bem
                como ICTs, pesquisadores, startups, unidades EMBRAPII e,
                sobretudo, usuários de Tecnologias Assistivas.
              </p>

              <p>
                Ao reunir esses diferentes atores em torno de um objetivo comum,
                o encontro se consolida como um espaço estratégico para
                transformar pesquisa em impacto, inovação em acesso e tecnologia
                em inclusão, criando parcerias e desenhando caminhos concretos
                para o futuro das Tecnologias Assistivas no Brasil.
              </p>
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="col-lg-5">
            <div className="about-card dark">
              <h3>Localização e Estrutura</h3>

              <p>
                As atividades principais acontecem na{" "}
                <strong>Arena Sabiazinho</strong>, um espaço preparado para
                receber exposições, apresentações técnicas e momentos de
                integração entre os participantes.
              </p>

              <p>
                O Campus Glória atua como polo complementar, com foco nas ações
                ligadas ao Polo de Manufatura, reforçando a conexão entre
                desenvolvimento tecnológico, prototipagem e produção.
              </p>

              <p>
                Essa configuração espacial foi pensada para refletir o próprio
                conceito do evento: integração entre ideias, pessoas e
                processos.
              </p>

              <div className="map-container">
                <iframe
                  title="Mapa Arena Sabiazinho"
                  src="https://www.google.com/maps?q=Arena+Sabiazinho+Uberlândia+MG&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
