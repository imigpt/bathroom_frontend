import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSlider from '../../components/HeroSlider';
import {
  HistorySection,
  AWayOfLivingSection,
  ProjectsSection,
  CataloguesSection,
  NewsSection,
  PhilosophySection,
  BoffiDePadovaSection,
} from '../../components/HomeSections';
import './Home.css';

const Home = () => {
  return (
    <div className="page page--home">
      <Header />
      
      <main className="main">
        <HeroSlider />
        <HistorySection />
        <AWayOfLivingSection />
        <ProjectsSection />
        <CataloguesSection />
        <NewsSection />
        <PhilosophySection />
        <BoffiDePadovaSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
