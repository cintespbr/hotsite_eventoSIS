import { useEffect } from "react";

declare module "react" {
  interface HTMLAttributes<T>
    extends React.AriaAttributes, React.DOMAttributes<T> {
    // Adiciona os atributos específicos do VLibras
    vw?: string | boolean;
    "vw-access-button"?: string | boolean;
    "vw-plugin-wrapper"?: string | boolean;
  }
}

declare global {
  interface Window {
    VLibras: any;
  }
}

export const VLibras = () => {
  useEffect(() => {
    // 1. Verifica se o script já existe para evitar duplicações
    if (document.getElementById("vlibras-script")) {
      if (window.VLibras && window.VLibras.Widget) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
      return;
    }

    const script = document.createElement("script");
    script.id = "vlibras-script";
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;

    script.onload = () => {
      // Pequeno delay para garantir que as divs abaixo já existam no DOM
      setTimeout(() => {
        if (window.VLibras) {
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        }
      }, 500);
    };

    document.body.appendChild(script);
  }, []);

  return (
    // Importante: Manter exatamente essa estrutura de classes e atributos
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
};
