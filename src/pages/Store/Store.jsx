import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Store.css';

const Store = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const stores = [
    {
      id: 1,
      name: 'Boffi Milan Flagship',
      address: 'Via Solferino, 11',
      city: 'Milan',
      country: 'Italy',
      phone: '+39 02 659 7890',
      email: 'milan@boffi.com',
      image: '/images/stores/milan.jpg',
    },
    {
      id: 2,
      name: 'Boffi New York',
      address: '31-32 31st Street',
      city: 'New York',
      country: 'USA',
      phone: '+1 212 555 0123',
      email: 'newyork@boffi.com',
      image: '/images/stores/new-york.jpg',
    },
    {
      id: 3,
      name: 'Boffi London',
      address: '254 Brompton Road',
      city: 'London',
      country: 'United Kingdom',
      phone: '+44 20 7589 8899',
      email: 'london@boffi.com',
      image: '/images/stores/london.jpg',
    },
    {
      id: 4,
      name: 'Boffi Paris',
      address: '242 Boulevard Saint-Germain',
      city: 'Paris',
      country: 'France',
      phone: '+33 1 45 44 72 72',
      email: 'paris@boffi.com',
      image: '/images/stores/paris.jpg',
    },
    {
      id: 5,
      name: 'Boffi Munich',
      address: 'Salvatorstraße 2',
      city: 'Munich',
      country: 'Germany',
      phone: '+49 89 290 5100',
      email: 'munich@boffi.com',
      image: '/images/stores/munich.jpg',
    },
  ];

  const countries = [...new Set(stores.map(store => store.country))].sort();
  const cities = selectedCountry
    ? [...new Set(stores.filter(s => s.country === selectedCountry).map(s => s.city))]
    : [];

  const filteredStores = stores.filter(store => {
    if (selectedCountry && store.country !== selectedCountry) return false;
    if (selectedCity && store.city !== selectedCity) return false;
    return true;
  });

  return (
    <div className="page page--store">
      <Header />
      
      <main className="main">
        {/* Hero */}
        <section className="store-hero">
          <h1>Store Locator</h1>
          <p>Find a Boffi showroom near you</p>
        </section>

        {/* Filters */}
        <section className="store-filters">
          <div className="store-filters__container">
            <div className="filter-group">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedCity('');
                }}
              >
                <option value="">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="city">City</label>
              <select
                id="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedCountry}
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Stores List */}
        <section className="stores-list">
          <div className="stores-grid">
            {filteredStores.map(store => (
              <div key={store.id} className="store-card">
                <div className="store-card__image">
                  <img src={store.image} alt={store.name} />
                </div>
                <div className="store-card__info">
                  <h3 className="store-card__name">{store.name}</h3>
                  <p className="store-card__address">
                    {store.address}<br />
                    {store.city}, {store.country}
                  </p>
                  <p className="store-card__phone">
                    <a href={`tel:${store.phone}`}>{store.phone}</a>
                  </p>
                  <p className="store-card__email">
                    <a href={`mailto:${store.email}`}>{store.email}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Store;
