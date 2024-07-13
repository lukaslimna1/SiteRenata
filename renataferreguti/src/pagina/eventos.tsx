import React, { useState } from "react";
import Menus from "../componentes/cabecalho/menus";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./eventos.css";
import Rodape from "../componentes/Rodape/rodape";

// Importe os estilos do slick-carousel caso necessário
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CustomArrowProps {
  onClick: () => void;
}

function Eventos() {
  const [imagemFullscreen, setImagemFullscreen] = useState<string | null>(null);

  const eventosRotativos = [
    {
      imagem: "/assets/campanha2020/Eventos/arte-alterada.jpg",
      alt: "Arte Alterada",
      descricao: "Descrição da Arte Alterada",
    },
    {
      imagem: "/assets/campanha2020/Eventos/arte-ciclista.jpg",
      alt: "Arte Ciclista",
      descricao: "Descrição da Arte Ciclista",
    },
    {
      imagem: "/assets/campanha2020/Eventos/live-convidados.jpg",
      alt: "Live com Convidados",
      descricao: "Descrição da Live com Convidados",
    },
  ];

  const eventosGaleria = [
    {
      imagem: "/assets/campanha2020/Eventos/arte-alterada.jpg",
      alt: "Arte Alterada",
      descricao: "Descrição da Arte Alterada",
    },
    {
      imagem: "/assets/campanha2020/Eventos/arte-ciclista.jpg",
      alt: "Mobilidade Urbana Sustentável",
      descricao: "Descrição da Arte Ciclista",
    },
    {
      imagem: "/assets/campanha2020/Eventos/live-convidados.jpg",
      alt: "Live com Convidados",
      descricao: "Descrição da Live com Convidados",
    },
    {
      imagem:
        "/assets/campanha2020/Eventos/WhatsApp Image 2020-10-22 at 01.32.10 (2).jpeg",
      alt: "Evento 1",
      descricao: "Descrição do Evento 1",
    },
    {
      imagem:
        "/assets/campanha2020/Eventos/WhatsApp Image 2020-10-22 at 01.32.11 (1).jpeg",
      alt: "Evento 2",
      descricao: "Descrição do Evento 2",
    },
    {
      imagem:
        "/assets/campanha2020/Eventos/WhatsApp Image 2020-10-22 at 01.32.11.jpeg",
      alt: "Evento 3",
      descricao: "Descrição do Evento 3",
    },
    {
      imagem:
        "/assets/campanha2020/Eventos/WhatsApp Image 2020-11-01 at 19.44.24.jpeg",
      alt: "Evento 4",
      descricao: "Descrição do Evento 4",
    },
    {
      imagem:
        "/assets/campanha2020/Eventos/WhatsApp Image 2020-11-01 at 19.44.55.jpeg",
      alt: "Evento 5",
      descricao: "Descrição do Evento 5",
    },
  ];

  const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <button className="custom-prev-arrow" onClick={onClick}>
      <FaChevronLeft />
    </button>
  );

  const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <button className="custom-next-arrow" onClick={onClick}>
      <FaChevronRight />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow onClick={() => {}} />,
    nextArrow: <CustomNextArrow onClick={() => {}} />,
  };

  const openFullscreenImage = (imagem: string) => {
    setImagemFullscreen(imagem);
  };

  const closeFullscreenImage = () => {
    setImagemFullscreen(null);
  };

  return (
    <div className="evento-container">
      <Menus />
      <div className="titulos">
        <h1>Próximos Eventos</h1>
      </div>
      <div className="banner-rotativo">
        <Slider {...settings}>
          {eventosRotativos.map((evento, index) => (
            <div key={index} className="banner-evento">
              <img src={evento.imagem} alt={evento.alt} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="titulos">
        <h1>Eventos Passados</h1>
      </div>
      <div className="galeria-artes">
        {eventosGaleria.map((evento, index) => (
          <div className="evento-arte" key={index}>
            <h3>{evento.alt}</h3>
            <div className="arte">
              <img
                src={evento.imagem}
                alt={evento.alt}
                onClick={() => openFullscreenImage(evento.imagem)}
              />
              <p>{evento.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para Imagem em Tela Cheia */}
      {imagemFullscreen && (
        <div className="fullscreen-modal" onClick={closeFullscreenImage}>
          <img src={imagemFullscreen} alt="Imagem em tela cheia" />
        </div>
      )}

      <Rodape />
    </div>
  );
}

export default Eventos;
