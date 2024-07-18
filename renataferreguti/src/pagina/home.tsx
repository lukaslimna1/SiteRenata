import React from "react";
import "../estilo/estilo.css";
import Menu from "../componentes/cabecalho/menu";
import Sobre from "../componentes/Sobre/sobre";
import Jornada from "../componentes/jornada/jornada";
import Rodape from "../componentes/Rodape/rodape";
import Contato from "../componentes/contato/contato";

function Home() {
  return (
    <div>
      <Menu />
      <section id="sobre">
        <Sobre />
      </section>
      <section id="jornada">
        <Jornada />
      </section>
      <section id="contato">
        <Contato />
      </section>
      <Rodape />
    </div>
  );
}

export default Home;
