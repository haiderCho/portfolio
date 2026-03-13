import { portfolioData } from '../data/portfolioData';

export default function Portfolio() {
  return (
    <div className="page">
      <h2 className="page-title">Creative Showcase</h2>
      <div className="page-underline" />

      <div className="portfolio-grid">
        {portfolioData.map((project) => (
          <a
            key={project.title}
            className="portfolio-card"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-card-image"
            />
            <div className="portfolio-card-body">
              <div className="portfolio-card-url">URL : {project.url}</div>
              <div className="portfolio-card-title">{project.title}</div>
              <div className="portfolio-card-desc">{project.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
