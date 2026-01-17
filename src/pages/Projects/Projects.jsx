import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'residential', label: 'Residential' },
    { id: 'hospitality', label: 'Hospitality' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Mougins, France',
      type: 'residential',
      image: '/images/projects/mougins.jpg',
      link: '/project/mougins-france',
    },
    {
      id: 2,
      title: 'New York, USA',
      type: 'residential',
      image: '/images/projects/new-york.jpg',
      link: '/project/new-york-usa',
    },
    {
      id: 3,
      title: 'Milan Penthouse',
      type: 'residential',
      image: '/images/projects/milan-penthouse.jpg',
      link: '/project/milan-penthouse',
    },
    {
      id: 4,
      title: 'London Residence',
      type: 'residential',
      image: '/images/projects/london-residence.jpg',
      link: '/project/london-residence',
    },
    {
      id: 5,
      title: 'Four Seasons Hotel',
      type: 'hospitality',
      image: '/images/projects/four-seasons.jpg',
      link: '/project/four-seasons',
    },
    {
      id: 6,
      title: 'Luxury Resort Maldives',
      type: 'hospitality',
      image: '/images/projects/maldives-resort.jpg',
      link: '/project/maldives-resort',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.type === activeFilter);

  return (
    <div className="page page--projects">
      <Header />
      
      <main className="main">
        {/* Hero Section */}
        <section className="projects-hero">
          <h1>Projects</h1>
          <p className="projects-hero__subtitle">
            Discover our worldwide installations and collaborations
          </p>
        </section>

        {/* Filter */}
        <section className="projects-filter">
          <div className="projects-filter__container">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-grid-section">
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <Link key={project.id} to={project.link} className="project-card">
                <div className="project-card__image">
                  <img src={project.image} alt={project.title} />
                </div>
                <h3 className="project-card__title">{project.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
