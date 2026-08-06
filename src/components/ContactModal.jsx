import React from 'react';

export default function ContactModal({ activeItem, onClose }) {
  if (!activeItem) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <span className="eyebrow">Contact finder</span>
        <h3>{activeItem.title}</h3>
        <p>{activeItem.description}</p>
        <p><strong>Region:</strong> {activeItem.region}</p>
        <p><strong>Contact:</strong> {activeItem.contact}</p>
        <button className="primary-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
