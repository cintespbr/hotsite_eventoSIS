import { useEffect } from "react";
import "./InstagramPost.css";

declare global {
  interface Window {
    instgrm?: any;
  }
}

export default function InstagramPost() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    script.onload = () => {
      window.instgrm?.Embeds.process();
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section className="instagram-section">
      <h2 className="instagram-title">Acompanhe as atualizações do evento!</h2>

      <div className="instagram-grid">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DVb6HiwAe9g/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          data-instgrm-version="14"
        />

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DVhL3MbARO1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          data-instgrm-version="14"
        />

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DVwlkuLATAz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          data-instgrm-version="14"
        />
      </div>

      <div className="instagram-cta">
        <h3>Gostou do que viu?</h3>
        <p>
          Siga nosso Instagram e acompanhe de perto as novidades, os convidados
          confirmados, os bastidores da organização, conteúdos exclusivos sobre
          tecnologia assistiva e as histórias que mostram como a inovação pode
          ampliar autonomia, inclusão e possibilidades reais na vida das
          pessoas.
        </p>

        <a
          href="https://www.instagram.com/sisassistiva_mcti/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-button"
        >
          Fique por dentro de tudo!
        </a>
      </div>
    </section>
  );
}
