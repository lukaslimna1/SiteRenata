import React from "react";
import "./campanha2024.css";
import GaleriaColaborativa from "../../../componentes/ImagemLiberada/GaleriaColaborativa";
import Rodape from "../../../componentes/Rodape/rodape";

const Campanha2024: React.FC = () => {
  return (
    <div className="conteudo-campanha">
      <h2 className="titulo-campanha">Campanha de 2024 - PSDB</h2>
      <div className="frase-destaque">
        <div className="frase-destaque-maior">Construindo o futuro juntos</div>
        <div className="descricao-pautas">Junte-se a nós nesta jornada</div>
        <hr />
        <div className="descricao-pautas">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className="pautas-section">
        <h3 className="titulo-pautas">Principais pautas da campanha</h3>
        <div className="descricao-pautas">
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae;
          </p>
          <p>
            Proin vel ante a orci tempus eleifend ut et magna. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Ut faucibus elementum leo,
            nec bibendum augue placerat at.
          </p>
        </div>
      </div>
      <div>
        <h3 className="titulo-pautas">Acompanhe nossa Campanha</h3>
        <div>
          <h1 className="titulo-videos">Videos</h1>
        </div>
        <div>
          <h1 className="titulo-social">Social</h1>
        </div>
      </div>
      <div className="datas-comemorativas">
        <h3 className="titulo-pautas">Datas Comemorativas</h3>
        <GaleriaColaborativa />
      </div>
      <div>
        <h3 className="titulo-pautas">Apoiadores</h3>
      </div>
      <Rodape />
    </div>
  );
};

export default Campanha2024;
