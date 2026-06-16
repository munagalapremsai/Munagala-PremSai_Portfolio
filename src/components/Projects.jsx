import { projects } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import './Projects.css'

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="Enterprise-grade solutions combining security intelligence with robust engineering."
        />

        <div ref={ref} className="projects__grid reveal">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
            >
              <div className="project-card__header">
                <span className="project-card__label">Featured Project</span>
                <h3>{project.title}</h3>
                <p className="project-card__subtitle">{project.subtitle}</p>
              </div>

              <p className="project-card__desc">{project.description}</p>

              <ul className="project-card__highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
