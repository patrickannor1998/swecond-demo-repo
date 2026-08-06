import React, { useState } from 'react';

const defaultForm = {
  title: '',
  category: 'Phones',
  region: 'Accra',
  description: '',
  contact: '',
  badge: 'New'
};

export default function ReportForm({ onAddReport }) {
  const [form, setForm] = useState(defaultForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.title || !form.description || !form.contact) return;

    const newReport = {
      id: Date.now(),
      title: form.title,
      category: form.category,
      region: form.region,
      date: 'Just now',
      description: form.description,
      contact: form.contact,
      badge: form.badge
    };

    onAddReport(newReport);
    setForm(defaultForm);
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <label className="field full">
        <input
          type="text"
          placeholder="Item title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </label>

      <label className="field">
        <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
          <option>Phones</option>
          <option>National ID Cards</option>
          <option>Passports</option>
          <option>Wallets</option>
          <option>School Bags</option>
          <option>Pets</option>
        </select>
      </label>

      <label className="field">
        <select value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })}>
          <option>Accra</option>
          <option>Kumasi</option>
          <option>Tamale</option>
          <option>Takoradi</option>
          <option>Ho</option>
          <option>Cape Coast</option>
        </select>
      </label>

      <label className="field full">
        <textarea
          rows="4"
          placeholder="Describe the item and where it was found"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </label>

      <label className="field full">
        <input
          type="text"
          placeholder="Contact name and phone number"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
        />
      </label>

      <button className="primary-btn full" type="submit">Publish report</button>
    </form>
  );
}
