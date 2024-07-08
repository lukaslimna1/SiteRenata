import React from 'react';
import '../../estilo/estilo.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';


const Jornada: React.FC = () => {
  return (
    <div id="jornada" className="jornada-container">
      <br />  
      <div className='jornada-texto'>
      <h1>Minha Jornada até aqui...</h1>
      </div>
      <div className="timeline">
        {/* Item 2020-2021 */}
        <div id="item-2020-2021" className="timeline-item">
        <div className="ano"><FaCalendarAlt /> 2020 - 2021</div>
          <div className="descricao">
            <h2><FontAwesomeIcon icon={faClipboardCheck} className="icone-customizado" /> INÍCIO DA CARREIRA POLÍTICA</h2>
            <p>Participação na campanha com a pré-candidata a vereadora na cidade de Bauru.
            <br />Assumiu posto como segunda secretaria do <strong>CMDCA (Conselho Municipal da Criança e Adolescente).</strong></p>
          </div>
        </div>

        {/* Item 2019 */}
        <div id="item-2019" className="timeline-item">
          <div className="ano"><FaCalendarAlt /> 2019</div>
          <div className="descricao">
            <h2><FontAwesomeIcon icon={faClipboardCheck} className="icone-customizado" /> PROJETO UM OLHAR DE MÂE SOBRE O  <strong>AUTISMO</strong></h2>
            <p>Realização de palestras em escolas e na secretaria da educação.
            <br />Convidada a falar na tribuna da Câmara sobre autismo.</p>
          </div>
        </div>

        {/* Item 2018-2019 */}
        <div id="item-2018-2019" className="timeline-item">
          <div className="ano"><FaCalendarAlt /> 2018 - 2019</div>
          <div className="descricao">
            <h2><FontAwesomeIcon icon={faClipboardCheck} className="icone-customizado" /> PARTICIPAÇÃO ATIVA EM CAUSAS SOCIAIS</h2>
            <p>Idealização da rede de apoio anjo azul, com palestras para gerar acolhimento às famílias
              <br />Participação em campanhas sociais para ajudar a população em épocas de desastres.</p>
          </div>
        </div>

        {/* Item 2016-2017 */}
        <div id="item-2016-2017" className="timeline-item">
          <div className="ano"><FaCalendarAlt /> 2016 - 2017</div>
          <div className="descricao">
            <h2><FontAwesomeIcon icon={faClipboardCheck} className="icone-customizado" /> PRIMEIRAS MILITÂNCIAS DE BAIRRO</h2>
            <p>Conquista de Asfalto: Mobilização para conquistar asfalto no bairro Parque Viaduto.
              <br />Transporte escolar: Solicitação para ônibus escolar a pedido de mães do bairro.</p>
          </div>
        </div>

        {/* Item 2014 */}
        <div id="item-2014" className="timeline-item">
          <div className="ano"><FaCalendarAlt /> 2014</div>
          <div className="descricao">
            <h2><FontAwesomeIcon icon={faClipboardCheck} className="icone-customizado" /> FILIAÇÃO AO PDT</h2>
            <p>Escolha do Partido Democrático dos Trabalhadores devido às suas ideologias voltadas ao trabalhador e à educação.
              <br />Inspirada por ícones como Leonel Brizola e Darcy Ribeiro.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jornada;
