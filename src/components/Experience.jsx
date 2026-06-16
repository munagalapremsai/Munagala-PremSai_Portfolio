import { experience } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import './Experience.css'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeading
          label="Experience"
          title="Professional Experience"
          subtitle="Hands-on industry exposure in ethical hacking, penetration testing, and full-stack development."
        />

        <div ref={ref} className="experience__list reveal">
          {experience.map((job) => (
            <article key={job.role} className="experience__card">
              <div className="experience__top">
                <div>
                  <h3>{job.role}</h3>
                  <p className="experience__company">{job.company}</p>
                </div>
                <div className="experience__meta">
                  <span>{job.period}</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <ul className="experience__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
