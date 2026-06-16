import { aboutText, personalInfo } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import ProfilePhoto from './ProfilePhoto'
import { useReveal } from '../hooks/useReveal'
import './About.css'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading
          label="About Me"
          title="Bridging Development & Cybersecurity"
          subtitle="Passionate about building secure, production-ready systems that solve real-world problems."
        />

        <div ref={ref} className="about__grid reveal">
          <div className="about__card about__card--main">
            <p className="about__text">{aboutText}</p>
            <div className="about__highlights">
              <div className="about__highlight">
                <span className="about__highlight-icon">01</span>
                <div>
                  <h3>Full Stack Development</h3>
                  <p>Python backends with REST APIs and modern front-end integration.</p>
                </div>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">02</span>
                <div>
                  <h3>Security Analysis</h3>
                  <p>Penetration testing, threat modeling, and vulnerability remediation.</p>
                </div>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">03</span>
                <div>
                  <h3>System Architecture</h3>
                  <p>Scalable MVC design with performance and resilience at the core.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about__card about__card--info">
            <ProfilePhoto variant="about" />
            <h3 className="about__info-title">Quick Info</h3>
            <ul className="about__info-list">
              <li>
                <span>Location</span>
                <strong>{personalInfo.location}</strong>
              </li>
              <li>
                <span>Education</span>
                <strong>B.Tech Cyber Security</strong>
              </li>
              <li>
                <span>Status</span>
                <strong>4th Year Student</strong>
              </li>
              <li>
                <span>Focus</span>
                <strong>Python · Security · APIs</strong>
              </li>
            </ul>
            <div className="about__info-links">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={`mailto:${personalInfo.email}`}>Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
