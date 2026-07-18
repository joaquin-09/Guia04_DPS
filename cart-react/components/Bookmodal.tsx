"use client";

import { Product } from "../types/Product";

import "../styles/modal.css";

interface BookModalProps {
  book: Product;
  onClose: () => void;
}

export default function BookModal({ book, onClose }: BookModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        <img src={book.image} alt={book.title} className="modal-image" />

        <div className="modal-info">
          <h2 className="modal-title">{book.title}</h2>
          <p className="modal-price">${book.price}</p>
          <p className="modal-summary">{book.summary}</p>
        </div>
      </div>
    </div>
  );
}