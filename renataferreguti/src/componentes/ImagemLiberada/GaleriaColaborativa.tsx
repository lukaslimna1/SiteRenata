import React from "react";
import ImagemLiberada from "./ImagemLiberada";
import "./galeria.css";

const GaleriaColaborativa: React.FC = () => {
  const imagens = [
    {
      src: "assets/campanha2024/Imagens_Comemorativas/13 de Julho - Dia do Estatuto da Crinaça e do Adolecente.jpeg",
      alt: "13 de Julho - Dia do Estatuto da Criança e do Adolescente",
      releaseDate: new Date("2024-07-13T00:00:00"),
    },
    {
      src: "assets/campanha2024/Imagens_Comemorativas/17 de Julho - Dia de Poroteção as Florestas do Brasil.jpeg",
      alt: "17 de Julho - Dia de Proteção às Florestas do Brasil",
      releaseDate: new Date("2024-07-17T00:00:00"),
    },
    {
      src: "assets/campanha2024/Imagens_Comemorativas/19 de Julho - Dia da Caridade.jpeg",
      alt: "19 de Julho - Dia da Caridade",
      releaseDate: new Date("2024-07-19T00:00:00"),
    },
    {
      src: "assets/campanha2024/Imagens_Comemorativas/25 de Julho - Aniversario de Criação do Ministerio da Saude.jpeg",
      alt: "25 de Julho - Aniversário de Criação do Ministério da Saúde",
      releaseDate: new Date("2024-07-25T00:00:00"),
    },
    {
      src: "assets/campanha2024/Imagens_Comemorativas/27 de Julho - Dia Nacional de Prevenção de Acidentes de Trabalho.jpeg",
      alt: "27 de Julho - Dia Nacional de Prevenção de Acidentes de Trabalho",
      releaseDate: new Date("2024-07-27T00:00:00"),
    },
    {
      src: "assets/campanha2024/Imagens_Comemorativas/28 de Julho - Dia Mundial da Luta Contra as Hepatites Virais.jpeg",
      alt: "28 de Julho - Dia Mundial da Luta Contra as Hepatites Virais",
      releaseDate: new Date("2024-07-28T00:00:00"),
    },
  ];

  return (
    <div className="galeria-colaborativa">
      {imagens.map((imagem, index) => (
        <ImagemLiberada
          key={index}
          src={imagem.src}
          alt={imagem.alt}
          releaseDate={imagem.releaseDate}
        />
      ))}
    </div>
  );
};

export default GaleriaColaborativa;
