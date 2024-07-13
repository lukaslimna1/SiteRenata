import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import "./modal.css";

interface ModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ src, alt, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
        <button className="close-button" onClick={onClose}>
          <FaTimesCircle className="close-icon" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
