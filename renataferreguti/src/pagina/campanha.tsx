import Menu from '../componentes/cabecalho/menu';
import React, { useState } from 'react';

import '../estilo/campanha.css'
import Campanha2020 from './Campanha/2020/campanha2020';
import Campanha2024 from './Campanha/2024/campanha2024';

const Campanha: React.FC = () => {
  const [anoSelecionado, setAnoSelecionado] = useState(2020);

  return (
    <div className="campanha-container">
      <Menu />
      <h1 className="campanha-titulo">Campanha Eleitoral</h1>
      <div className="botao-anos">
        <button
          className={`botao-campanha ${anoSelecionado === 2020 ? 'ativo' : ''}`}
          onClick={() => setAnoSelecionado(2020)}
        >
          2020
        </button>
        <button
          className={`botao-campanha ${anoSelecionado === 2024 ? 'ativo' : ''}`}
          onClick={() => setAnoSelecionado(2024)}
        >
          2024
        </button>
      </div>
      <div>
        {anoSelecionado === 2020 ? <Campanha2020 /> : <Campanha2024 />}
      </div>
    </div>
  );
};

export default Campanha;
