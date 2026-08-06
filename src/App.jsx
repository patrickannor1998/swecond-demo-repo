import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SearchFilters from './components/SearchFilters';
import ListingCard from './components/ListingCard';
import ReportForm from './components/ReportForm';
import ContactModal from './components/ContactModal';

const initialReports = [
  {
    id: 1,
    title: 'Lost iPhone 14',
    category: 'Phones',
    region: 'Accra',
    date: 'Today',
    description: 'Black iPhone 14 with a blue case, last seen around Kwame Nkrumah Circle.',
    contact: 'Kwabena Mensah • 024 123 4567',
    badge: 'Urgent'
  },
  {
    id: 2,
    title: 'National ID found',
    category: 'National ID Cards',
    region: 'Kumasi',
    date: '1 day ago',
    description: 'Found a Ghana card on a bus route near Adum. Please visit the station desk.',
    contact: 'Ama Afriyie • 020 765 4321',
    badge: 'Verified'
  },
  {
    id: 3,
    title: 'Brown passport',
    category: 'Passports',
    region: 'Tamale',
    date: '2 days ago',
    description: 'Passport found in a taxi after a late-night ride. Owner can claim after ID check.',
    contact: 'Musa Salifu • 054 998 1122',
    badge: 'Needs Claim'
  },
  {
    id: 4,
    title: 'Leather wallet',
    category: 'Wallets',
    region: 'Takoradi',
    date: 'Today',
    description: 'Wallet with a credit card, student ID, and several receipts found near the beach.',
    contact: 'Belinda Yeboah • 026 111 3344',
    badge: 'High Priority'
  },
  {
    id: 5,
    title: 'Blue school bag',
    category: 'School Bags',
    region: 'Ho',
    date: 'Today',
    description: 'Blue school bag with an English textbook and a water bottle found after school.',
    contact: 'Peter Dela • 055 879 1009',
    badge: 'Available'
  },
  {
    id: 6,
    title: 'Cocoa brown dog',
    category: 'Pets',
    region: 'Cape Coast',
    date: '3 days ago',
    description: 'Friendly pet dog with a red collar found near the market. Safe and waiting for pickup.',
    contact: 'Efua Boateng • 020 440 1678',
    badge: 'Found'
  }
];

const categories = ['All', 'Phones', 'National ID Cards', 'Passports', 'Wallets', 'School Bags', 'Pets'];
const regions = ['All', 'Accra', 'Kumasi', 'Tamale', 'Takoradi', 'Ho', 'Cape Coast'];

function App() {
  const [reports, setReports] = useState(initialReports);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [activeItem, setActiveItem] = useState(null);

  const filteredReports = useMemo(() => {
    return reports.filter((item) => {
      const matchesQuery = [item.title, item.description, item.contact, item.category, item.region]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesRegion = selectedRegion === 'All' || item.region === selectedRegion;

      return matchesQuery && matchesCategory && matchesRegion;
    });
  }, [reports, query, selectedCategory, selectedRegion]);

  const stats = [
    { label: 'Cases tracked', value: reports.length + 14 },
    { label: 'Community visits', value: '2.8k' },
    { label: 'Safe reunions', value: '89%' }
  ];

  return (
    <div className="app-shell">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero stats={stats} />
              <section className="page-section">
                <div className="section-heading">
                  <span className="eyebrow">Search board</span>
                  <h2>Find or report community items</h2>
                </div>

                <SearchFilters
                  query={query}
                  setQuery={setQuery}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedRegion={selectedRegion}
                  setSelectedRegion={setSelectedRegion}
                  categories={categories}
                  regions={regions}
                />

                <div className="cards-grid">
                  {filteredReports.map((item) => (
                    <ListingCard key={item.id} item={item} onContact={() => setActiveItem(item)} />
                  ))}
                </div>
              </section>

              <section className="page-section split-layout">
                <div className="section-card">
                  <span className="eyebrow">Report</span>
                  <h3>Post a found item</h3>
                  <p>Share the details of what you found and let the right person connect with you.</p>
                  <ReportForm
                    onAddReport={(newReport) => {
                      setReports((current) => [newReport, ...current]);
                    }}
                  />
                </div>

                <div className="section-card highlighted">
                  <span className="eyebrow">Highlights</span>
                  <h3>What the platform supports</h3>
                  <ul className="feature-list">
                    <li>Lost phones and wallets</li>
                    <li>National IDs and passports</li>
                    <li>School bags and pets</li>
                    <li>Community-led finder response</li>
                  </ul>
                </div>
              </section>
            </>
          }
        />

        <Route
          path="/search"
          element={
            <section className="page-section">
              <div className="section-heading">
                <span className="eyebrow">Browse</span>
                <h2>Search the latest community reports</h2>
              </div>
              <SearchFilters
                query={query}
                setQuery={setQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                categories={categories}
                regions={regions}
              />
              <div className="cards-grid">
                {filteredReports.map((item) => (
                  <ListingCard key={item.id} item={item} onContact={() => setActiveItem(item)} />
                ))}
              </div>
            </section>
          }
        />

        <Route
          path="/report"
          element={
            <section className="page-section">
              <div className="section-heading">
                <span className="eyebrow">Report</span>
                <h2>Post a new found item</h2>
              </div>
              <ReportForm onAddReport={(newReport) => setReports((current) => [newReport, ...current])} />
            </section>
          }
        />

        <Route
          path="/about"
          element={
            <section className="page-section">
              <div className="section-heading">
                <span className="eyebrow">Community</span>
                <h2>Built to reconnect people with what they lost</h2>
              </div>
              <div className="info-grid">
                <div className="info-card">
                  <h3>How it works</h3>
                  <p>Finders can post a discovered item and others can search by type or location.</p>
                </div>
                <div className="info-card">
                  <h3>Why Ghana?</h3>
                  <p>Our communities are stronger when people can quickly help each other recover valuable possessions.</p>
                </div>
                <div className="info-card">
                  <h3>Fast handoff</h3>
                  <p>Every listing includes region, description, and the finder’s direct contact details.</p>
                </div>
              </div>
            </section>
          }
        />

        <Route
          path="/contact"
          element={
            <section className="page-section">
              <div className="section-heading">
                <span className="eyebrow">Reach out</span>
                <h2>Help the community stay connected</h2>
              </div>
              <div className="contact-panel">
                <div>
                  <h3>Call center</h3>
                  <p>+233 (0) 20 444 9876</p>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>support@lostfoundghana.org</p>
                </div>
                <div>
                  <h3>Office</h3>
                  <p>Accra Civic Centre, Greater Accra</p>
                </div>
              </div>
            </section>
          }
        />
      </Routes>

      <ContactModal activeItem={activeItem} onClose={() => setActiveItem(null)} />
      <Footer />
    </div>
  );
}

export default App;
