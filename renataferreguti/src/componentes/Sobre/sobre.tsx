import React from 'react';
import '../../estilo/estilo.css';

const Sobre: React.FC = () => {
  return (
    <div id="sobre" className="sobre-container">
      <div className='sobre-mim'>
        <h1>Quem é Renata Ferreguti! </h1>
      </div>
      <div className="sobre-content">
        
      <div className="sobre-foto">
      </div>
        <div className="sobre-info">
          <p>
            Olá, eu sou a Renata Ferreguti, tenho 41 anos, casada com Igor Ferreguti, mãe do Thomaz. Formada em Gestão de Recursos Humanos e Técnica em serviços Jurídicos, pela ETEC. Cursando Licenciatura em Pedagogia. E quero lutar junto com VOCÊ, pela inclusão, acessibilidade e causas sociais!
          </p>
          <p className='sobre-juntos'>Juntos somos mais Fortes!</p>
        </div>
      </div>
      <div className="icone-container">
        <img src="/assets/icones/Icons_Prancheta1.png" alt="Ícone 1" />
        <img src="/assets/icones/Icons-02.png" alt="Ícone 2" />
        <img src="/assets/icones/Icons-03.png" alt="Ícone 3" />
        <img src="/assets/icones/Icons-04.png" alt="Ícone 4" />
        <img src="/assets/icones/Icons-05.png" alt="Ícone 5" />
        <img src="/assets/icones/Icons-06.png" alt="Ícone 6" />
        <img src="/assets/icones/Icons-07.png" alt="Ícone 7" />
      </div>
    </div>
  );
}

export default Sobre;
