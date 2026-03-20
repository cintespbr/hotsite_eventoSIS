import GaleriaEventoComponent from "../components/GaleriaEvento/GaleriaEvento";

export default function GaleriaEvento() {
  return (
    <main>
      <GaleriaEventoComponent
        titulo="📸 Galeria Oficial do Evento"
        subtitulo="Acompanhe os melhores momentos em tempo real"
        permitirUpload={true}
      />
    </main>
  );
}
