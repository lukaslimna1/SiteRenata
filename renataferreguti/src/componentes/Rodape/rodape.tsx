import React from "react";
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import "./rodape.css";
const Rodape: React.FC = () => {
  return (
    <footer className="rodape-container">
      <div className="social-icons">
        <a
          href="https://www.facebook.com/renatasferreguti"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.tiktok.com/@renataferreguti"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.instagram.com/ferregutirenata/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="rodape-texto">
        © 2024 Renata Ferreguti. Todos os direitos reservados.
      </p>
      <p className="rodape-producao">
        Site produzido por
        <a
          href="https://linktr.ee/lucasmslima"
          target="_blank"
          rel="noopener noreferrer"
          className="link-lucas-lima"
        >
          {" "}
          Lucas Lima
        </a>
      </p>
    </footer>
  );
};

export default Rodape;
