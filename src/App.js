import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Main from "./pages/main";
import Birimler from "./pages/birimler";
import Cihazlar from "./pages/cihazlar";
import Listeler from "./pages/listeler";
import Yenikayit from "./pages/yenikayit";
import Ayarlar from "./pages/ayarlar";
import "./App.css";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} exact>
          <Route index element={<Main />} />
          <Route path="/birimler" element={<Birimler />} />
          <Route path="/cihazlar" element={<Cihazlar />} />
          <Route path="/listeler" element={<Listeler />} />
          <Route path="/yenikayit" element={<Yenikayit />} />
          <Route path="/ayarlar" element={<Ayarlar />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}


