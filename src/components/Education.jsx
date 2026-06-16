import { education } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import './Education.css'

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className="section education">
      <div className="container">
        <SectionHeading
          label="Education"
          title="Academic Journey"
          subtitle="A strong foundation from school to engineering, with consistent growth in technology and security."
        />

        <div ref={ref} className="education__timeline reveal">
          {education.map((item, index) => (
            <article key={item.degree} className="education__item">
              <div className="education__marker">
                <span className="education__dot" />
                {index < education.length - 1 && <span className="education__line" />}
              </div>
              <div className="education__card">
                <div className="education__header">
                  <h3>{item.degree}</h3>
                  <div className="education__tags">
                    {item.highlight && (
                      <span className="education__badge">{item.highlight}</span>
                    )}
                    <span className="education__score">{item.score}</span>
                  </div>
                </div>
                <p className="education__institution">{item.institution}</p>
                <p className="education__meta">
                  {item.location} · {item.period}
                </p>
                <p className="education__desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
