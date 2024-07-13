import React, { useState, useEffect } from "react";
import Modal from "./modal";
import "./ImagemLiberada.css";

interface ImagemLiberadaProps {
  src: string;
  alt: string;
  releaseDate: Date;
}

const ImagemLiberada: React.FC<ImagemLiberadaProps> = ({
  src,
  alt,
  releaseDate,
}) => {
  const [isReleased, setIsReleased] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkRelease = () => {
      const now = new Date();
      if (now >= releaseDate) {
        setIsReleased(true);
      }
    };

    checkRelease();
    const intervalId = setInterval(checkRelease, 1000);

    return () => clearInterval(intervalId);
  }, [releaseDate]);

  const handleImageClick = () => {
    if (isReleased) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="imagem-liberada">
      {isReleased && (
        <>
          <div className="alt-overlay" onClick={handleImageClick}>
            <p className="alt-text">{alt}</p>
          </div>
          <img
            src={src}
            alt={alt}
            onClick={handleImageClick}
            className="thumbnail"
          />
          {isModalOpen && (
            <Modal src={src} alt={alt} onClose={() => setIsModalOpen(false)} />
          )}
        </>
      )}
    </div>
  );
};

export default ImagemLiberada;
