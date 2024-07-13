import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./campanha2020.css"; // Ajuste o caminho conforme necessário
import Rodape from "../../../componentes/Rodape/rodape";

const imagensPautas = [
  "/assets/campanha2020/Pautas/APRESENTACAO-RENATA01.jpg",
  "/assets/campanha2020/Pautas/APRESENTACAO-RENATA02.jpg",
  "/assets/campanha2020/Pautas/APRESENTACAO-RENATA03.jpg",
  "/assets/campanha2020/Pautas/APRESENTACAO-RENATA04.jpg",
  "/assets/campanha2020/Pautas/APRESENTACAO-RENATA05.jpg",
  "/assets/campanha2020/Pautas/APRESENTACAO-RENATA06.jpg",
];

const videosApoiadores = [
  "/assets/campanha2020/Apoio/Video_01.mp4",
  "/assets/campanha2020/Apoio/Video_02.mp4",
  "/assets/campanha2020/Apoio/Video_03.mp4",
  "/assets/campanha2020/Apoio/Video_04.mp4",
  "/assets/campanha2020/Apoio/Video_05.mp4",
  "/assets/campanha2020/Apoio/Video_06.mp4",
  "/assets/campanha2020/Apoio/Video_07.mp4",
  "/assets/campanha2020/Apoio/Video_08.mp4",
  "/assets/campanha2020/Apoio/Video_09.mp4",
  "/assets/campanha2020/Apoio/Video_10.mp4",
  "/assets/campanha2020/Apoio/Video_11.mp4",
];

const videosRenata = [
  "/assets/campanha2020/Video Renata/video-renata.mp4",
  "assets/campanha2020/Video Renata/Video-Sobre-o-Bairro.mp4",
  "assets/campanha2020/Video Renata/video-apoiadores.mp4",
];

const imagensEventos = [
  "/assets/campanha2020/Eventos/arte-alterada.jpg",
  "/assets/campanha2020/Eventos/arte-ciclista.jpg",
  "/assets/campanha2020/Eventos/live-convidados.jpg",
  "/assets/campanha2020/Eventos/WhatsApp Image 2020-10-22 at 01.32.10 (2).jpeg",
  "/assets/campanha2020/Eventos/WhatsApp Image 2020-10-22 at 01.32.11 (1).jpeg",
  "/assets/campanha2020/Eventos/WhatsApp Image 2020-10-22 at 01.32.11.jpeg",
  "/assets/campanha2020/Eventos/WhatsApp Image 2020-11-01 at 19.44.24.jpeg",
  "/assets/campanha2020/Eventos/WhatsApp Image 2020-11-01 at 19.44.55.jpeg",
];

const Campanha2020: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaChevronRight className="arrow-right" />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaChevronLeft className="arrow-left" />
      </div>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const videoSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="conteudo-campanha pdt">
      <div className="texto-intro">
        <h2 className="titulo-campanha">Campanha de 2020 - PDT</h2>
        <div className="frase-destaque">
          <p className="frase-destaque-maior">
            Juntos somos Um, Juntos somos Mais Fortes!
          </p>
          <hr />
          <p className="descricao-pautas">
            No dia 15 de Novembro, teremos as cadeiras do legislativo ocupadas
            por novos membros, e é em busca de renovação, mudança e luta pelos
            nossos direitos, que estou me candidatando a vereadora na cidade de
            Bauru. Gostaria de compartilhar minha história com você, o que me
            motiva a entrar no legislativo e lutar pelos nossos direitos!
          </p>
        </div>
        {/* Adicione os vídeos abaixo da descrição */}
        <div className="videos-side-by-side video-section">
          <div className="video-wrapper">
            <p className="descricao-pautas"> Intro</p>
            <video
              controls
              src="/assets/campanha2020/Video Renata/video-intro.mp4"
            />
          </div>
          <div className="video-wrapper">
            <p className="descricao-pautas"> Jingle</p>
            <video
              controls
              src="/assets/campanha2020/Video Renata/Video-Jingle.mp4"
            />
          </div>
        </div>
      </div>
      <div className="pautas-section">
        <h3 className="titulo-pautas">MINHAS PAUTAS PARA LEGISLAR</h3>
        <p className="descricao-pautas">
          <span>
            <strong>
              Minhas pautas são edificadas em: Inclusão, Acessibilidade e
              Assistência Social.
            </strong>
            <br />
            Eu tenho conhecimento, vontade, caráter e coragem para integrar o
            legislativo de Bauru. Por isso, venho pedir o seu voto de confiança.
          </span>
        </p>
        <Slider {...sliderSettings} className="slider-container">
          {imagensPautas.map((image, index) => (
            <div key={index} onClick={() => setLightboxOpen(true)}>
              <img src={image} alt={`Pauta ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <p className="descricao-pautas">
          Leis são criadas para atender às necessidades dos munícipes, e eu me
          comprometo a ouvir cada um deles para execução das minhas pautas,
          quando eleita.
          <br />
          Tenho ouvido várias famílias, educadores, pessoas da área da saúde e
          representantes de pessoas PCDs em Bauru, que já me deram o seu voto de
          confiança, por saber que minhas pautas são verdadeiras e por ser uma
          luta diária minha, por isso eles acreditam no poder da nossa união.
        </p>
      </div>
      <div className="apoiadores-section">
        <h3 className="titulo-apoiadores">AMIGOS E APOIADORES</h3>
        <Slider {...videoSliderSettings}>
          {videosApoiadores.map((video, index) => (
            <div key={index}>
              <video
                controls
                width="100%"
                className="video-apoiador"
                src={video}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="apoiadores-section">
        <h3 className="titulo-apoiadores">
          Vem acompanhar de perto minha campanha...
        </h3>
        <Slider {...videoSliderSettings}>
          {videosRenata.map((video, index) => (
            <div key={index}>
              <video
                controls
                width="100%"
                className="video-apoiador"
                src={video}
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* Mosaico de imagens dos eventos */}
      <div className="eventos-section">
        <h3 className="titulo-eventos">Acompanhe os Eventos da Campanha</h3>
        <div className="mosaico-imagens">
          {imagensEventos.map((imagem, index) => (
            <div key={index} className="imagem-evento">
              <img src={imagem} alt={`Evento ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <br />
      <Rodape />
    </div>
  );
};

export default Campanha2020;
