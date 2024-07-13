import Menu from "../componentes/cabecalho/menu";
import Campanha2020 from "./Campanha/2020/campanha2020";
import Campanha2024 from "./Campanha/2024/campanha2024";
import React, { useState } from "react";
import "./campanha.css";
import Menus from "../componentes/cabecalho/menus";

const Campanha: React.FC = () => {
  const [anoSelecionado, setAnoSelecionado] = useState(2020);

  return (
    <div className="campanha-container">
      <Menus />

      <h1 className="campanha-titulo">Campanhas Eleitorais</h1>
      <div className="botao-anos">
        <button
          className={`botao-campanha ${anoSelecionado === 2024 ? "ativo" : ""}`}
          onClick={() => setAnoSelecionado(2024)}
        >
          2024
        </button>
        <button
          className={`botao-campanha ${anoSelecionado === 2020 ? "ativo" : ""}`}
          onClick={() => setAnoSelecionado(2020)}
        >
          2020
        </button>
      </div>
      <div>
        {anoSelecionado === 2020 ? <Campanha2020 /> : <Campanha2024 />}{" "}
      </div>

      <section></section>
    </div>
  );
};

export default Campanha;
