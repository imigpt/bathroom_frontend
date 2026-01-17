import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import CategoryPage from './pages/Collections/CategoryPage';
import ListingPage from './pages/Collections/ListingPage';
import ProductDetail from './pages/Collections/ProductDetail';
import Projects from './pages/Projects';
import Store from './pages/Store';
import Contacts from './pages/Contacts';
import Catalogues from './pages/Catalogues';
import News from './pages/News';
import Login from './pages/Login';

// Import global styles
import './styles/variables.css';
import './styles/global.css';
import './styles/typography.css';
import './styles/buttons.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* Collections Routes - Multi-level navigation */}
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:category" element={<CategoryPage />} />
          <Route path="/collections/:category/:subcategory" element={<ListingPage />} />
          <Route path="/collections/:category/:subcategory/:item" element={<ProductDetail />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Projects />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/catalogues" element={<Catalogues />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<News />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
