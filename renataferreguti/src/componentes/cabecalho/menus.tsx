import React from "react";
import "../../estilo/estilo.css";
import { Link } from "react-router-dom";

const Menus: React.FC = () => {
  return (
    <div className="menu-container">
      <nav className="menu">
        <div className="menuRenataContainer">
          <a href="/">
            <img
              src="/assets/icones/logo.png"
              alt="Logo Renata Ferreguti"
              className="logoRenata"
            />
          </a>
        </div>

        <ul className="menuLinks"></ul>
        <ul>
          <li>
            <Link to="/">
              <p>Inicio</p>
            </Link>
          </li>
          <li>
            <Link to="/campanha">
              <p>Campanhas</p>
            </Link>
          </li>
          <li>
            <Link to="/eventos">
              <p>Eventos</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menus;
