import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "../../estilo/estilo.css";

const Contato: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert("Mensagem enviada com sucesso!");
    setEmail("");
    setNome("");
    setMensagem("");
    setTelefone("");
  };

  return (
    <div id="contato" className="contato-container">
      <h2 className="contato-titulo">Entre em Contato</h2>
      <div className="contato-content">
        <div className="contato-form">
          <h2>Envie sua mensagem !</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                type="tel"
                placeholder="(xx) xxxxx-xxxx"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </label>
            <label className="mensagem">
              <textarea
                placeholder="Digite sua mensagem!"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              ></textarea>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="contato-info">
          <p>
            <FaWhatsapp /> (14) 99101-2961
          </p>
          <p>
            <FaEnvelope /> contato@renataferreguti.com.br
          </p>
          <img
            src="/assets/fotos/Pose 05 - Sem Fundo.png"
            alt="Renata Ferreguti"
          />
        </div>
      </div>
    </div>
  );
};

export default Contato;
