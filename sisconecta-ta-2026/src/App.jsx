import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Programacao from "./pages/Schedule";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/programacao" element={<Programacao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
