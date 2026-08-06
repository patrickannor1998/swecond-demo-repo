import React from 'react';

export default function ListingCard({ item, onContact }) {
  return (
    <article className="card">
      <div className="card-top">
        <span className="badge">{item.badge}</span>
        <span>{item.date}</span>
      </div>

      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <div className="card-meta">
        <span>{item.category}</span>
        <span>{item.region}</span>
      </div>

      <div className="contact-inline">
        <span>{item.contact}</span>
        <button className="small-btn" onClick={onContact}>Contact</button>
      </div>
    </article>
  );
}
