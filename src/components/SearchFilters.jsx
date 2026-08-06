import React from 'react';

export default function SearchFilters({
  query,
  setQuery,
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
  categories,
  regions
}) {
  return (
    <div className="filter-bar">
      <label className="field">
        <input
          type="text"
          placeholder="Search by item, location, or contact"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <label className="field">
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>

      <label className="field">
        <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
          {regions.map((region) => (
            <option key={region}>{region}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
