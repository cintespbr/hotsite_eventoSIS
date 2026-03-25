import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Programacao from "./pages/Schedule";
import Subscribe from "./pages/Subscribe";
import { VLibras } from "./components/VLibras";
import Workshops from "./pages/Workshops";
import GaleriaEvento from "./pages/GaleriaEvento";
import PopupEvento from "./components/PopupEvento/PopupEvento";

export default function App() {
  return (
    <BrowserRouter>
      <VLibras />
      <PopupEvento />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/programacao" element={<Programacao />} />
          <Route path="/inscricoes" element={<Subscribe />} />
          <Route path="/oficinas" element={<Workshops />} />
          <Route path="/galeria" element={<GaleriaEvento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
