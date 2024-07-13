import React, { useState, useEffect } from "react";
import "../../estilo/estilo.css";
import { Link } from "react-router-dom";
import Campanha from "../../pagina/campanha";

const Menu: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const scrollPosition = window.scrollY;

        // Check each section and determine which one is visible
        const sections = ["sobre", "jornada", "contato"];
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop - 80; // Ajuste de margem
            const offsetBottom = offsetTop + element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveLink(section);
            }
          }
        });
      }, 100); // Debounce time ajustado para 100ms (pode ajustar conforme necessário)
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up listener on unmount
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId!);
    if (targetElement) {
      const offset = targetElement.offsetTop - 80; // Ajuste de margem
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

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

        <ul className="menuLinks">
          <li>
            <a
              href="#sobre"
              className={`nav-link ${activeLink === "sobre" ? "active" : ""}`}
              onClick={handleSmoothScroll}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#jornada"
              className={`nav-link ${activeLink === "jornada" ? "active" : ""}`}
              onClick={handleSmoothScroll}
            >
              Jornada
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className={`nav-link ${activeLink === "contato" ? "active" : ""}`}
              onClick={handleSmoothScroll}
            >
              Contato
            </a>
          </li>
        </ul>
        <ul>
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

export default Menu;
