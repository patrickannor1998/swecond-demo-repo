import React from 'react';

export default function Hero({ stats }) {
  return (
    <header className="hero">
      <div>
        <span className="eyebrow">Trusted community platform</span>
        <h1>Recover what was lost with Ghana’s own community finder.</h1>
        <p>
          Post found items like phones, identity cards, passports, wallets, school bags, and pets.
          Neighbors can search, verify, and reconnect the owner quickly.
        </p>

        <div className="hero-cta">
          <button className="primary-btn">Start searching</button>
          <button className="secondary-btn">Report a found item</button>
        </div>
      </div>

      <div className="hero-summary">
        <div className="stat-grid">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
