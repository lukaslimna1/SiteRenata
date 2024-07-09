import React, { useState } from 'react';
import '../../../estilo/campanhan2020.css';
import { FaPlayCircle } from 'react-icons/fa';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';

const imagensPautas = [
  '/assets/campanha2020/Pautas/APRESENTACAO-RENATA01.jpg',
  '/assets/campanha2020/Pautas/APRESENTACAO-RENATA02.jpg',
  '/assets/campanha2020/Pautas/APRESENTACAO-RENATA03.jpg',
  '/assets/campanha2020/Pautas/APRESENTACAO-RENATA04.jpg',
  '/assets/campanha2020/Pautas/APRESENTACAO-RENATA05.jpg',
  '/assets/campanha2020/Pautas/APRESENTACAO-RENATA06.jpg',
];

const videosApoiadores = [
  '/assets/campanha2020/Apoio/Untitled Project ‐ Made with Clipchamp (20).mp4',
  '/assets/campanha2020/Apoio/Untitled_Project_â___Made_with_Clipchamp_(12).mp4',
  '/assets/campanha2020/Apoio/video09.mp4',
  '/assets/campanha2020/Apoio/WhatsApp Video 2020-10-11 at 18.41.15.mp4',
  '/assets/campanha2020/Apoio/WhatsApp Video 2020-10-11 at 19.34.46 (1).mp4',
  '/assets/campanha2020/Apoio/WhatsApp Video 2020-10-11 at 19.34.46.mp4',
  '/assets/campanha2020/Apoio/WhatsApp Video 2020-10-11 at 19.34.54.mp4',
  '/assets/campanha2020/Apoio/WhatsApp Video 2020-10-11 at 19.35.22.mp4',
  '/assets/campanha2020/Apoio/WhatsApp Video 2020-11-01 at 20.09.36.mp4',
  '/assets/campanha2020/Apoio/WhatsApp Video 2020-11-09 at 09.34.42.mp4',
  '/assets/campanha2020/Apoio/WhatsApp Video 2020-11-09 at 09.46.49.mp4',
];

const Campanha2020: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="conteudo-campanha pdt">
      <div className="texto-intro">
        <h2 className="titulo-campanha">Campanha de 2020 - PDT</h2>
        <div className="frase-destaque">
          <p className='frase-destaque-maior'>
            Juntos somos Um, Juntos somos Mais Fortes!
          </p>
          <hr />
          <p>
            No dia 15 de Novembro, teremos as cadeiras do legislativo ocupadas por novos membros,
            e é em busca de renovação, mudança e luta pelos nossos direitos, que estou me
            candidatando a vereadora na cidade de Bauru. Gostaria de compartilhar minha história
            com você, o que me motiva a entrar no legislativo e lutar pelos nossos direitos!
          </p>
        </div>
      </div>

      <div className="video-section">
        <div className="videos-side-by-side">
          <div className="video-wrapper">
            <p className="descricao-video"><FaPlayCircle />Jingle da Campanha</p>
            <video controls>
              <source src="/assets/campanha2020/Video Renata/Video-Jingle.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
          <div className="video-wrapper">
            <p className="descricao-video"><FaPlayCircle />Vídeo de Introdução</p>
            <video controls>
              <source src="/assets/campanha2020/Video Renata/video-intro.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>

      <div className="pautas-section">
        <h3 className="titulo-pautas">MINHAS PAUTAS PARA LEGISLAR</h3>
        <p className="descricao-pautas">
          <strong>Minhas pautas são edificadas em: Inclusão, Acessibilidade e Assistência Social.</strong><br />
          Eu tenho conhecimento, vontade, caráter e coragem para integrar o legislativo de Bauru.
          Por isso, venho pedir o seu voto de confiança.
        </p>
        <Slider {...settings}>
          {imagensPautas.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Pauta ${index + 1}`}
                onClick={() => {
                  setPhotoIndex(index);
                  setLightboxOpen(true);
                }}
                style={{ cursor: 'pointer', width: '100%' }}
              />
            </div>
          ))}
        </Slider>
        <p className="descricao-pautas">
          Leis são criadas para atender às necessidades dos munícipes, e eu me comprometo a ouvir
          cada um deles para execução das minhas pautas, quando eleita.
          <br />
          Tenho ouvido várias famílias, educadores, pessoas da área da saúde e representantes de pessoas PCDs
          em Bauru, que já me deram o seu voto de confiança, por saber que minhas pautas são verdadeiras e por
          ser uma luta diária minha, por isso eles acreditam no poder da nossa união.
        </p>
      </div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={imagensPautas[photoIndex]}
          nextSrc={imagensPautas[(photoIndex + 1) % imagensPautas.length]}
          prevSrc={imagensPautas[(photoIndex + imagensPautas.length - 1) % imagensPautas.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + imagensPautas.length - 1) % imagensPautas.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imagensPautas.length)
          }
        />
      )}

      <div className="apoiadores-section">
        <h3 className="titulo-apoiadores">AMIGOS E APOIADORES</h3>
        <div className="videos-grid">
          {videosApoiadores.map((video, index) => (
            <div key={index} className="video-apoiador-wrapper">
              <video controls className="video-apoiador">
                <source src={video} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campanha2020;