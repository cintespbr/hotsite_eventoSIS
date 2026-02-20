import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Programacao from "./pages/Schedule";
import Subscribe from "./pages/Subscribe";
import { VLibras } from "./components/VLibras";

export default function App() {
  return (
    <BrowserRouter>
      <VLibras />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/programacao" element={<Programacao />} />
          <Route path="/inscricoes" element={<Subscribe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
