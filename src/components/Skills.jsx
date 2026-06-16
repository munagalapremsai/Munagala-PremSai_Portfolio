import { skills } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import './Skills.css'

const skillCategories = [
  { key: 'languages', title: 'Languages', icon: '</>' },
  { key: 'frameworks', title: 'Frameworks & Libraries', icon: '⚡' },
  { key: 'tools', title: 'Developer Tools', icon: '🛠' },
  { key: 'security', title: 'Security Expertise', icon: '🛡' },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          label="Skills"
          title="Technical Arsenal"
          subtitle="A versatile stack spanning full-stack development, data processing, and cybersecurity."
        />

        <div ref={ref} className="skills__grid reveal">
          {skillCategories.map((cat) => (
            <div key={cat.key} className="skills__card">
              <div className="skills__card-header">
                <span className="skills__icon" aria-hidden="true">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skills__tags">
                {skills[cat.key].map((skill) => (
                  <span key={skill} className="skills__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
