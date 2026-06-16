import { personalInfo } from '../data/portfolioData'
import ProfilePhoto from './ProfilePhoto'
import { useReveal } from '../hooks/useReveal'
import './Hero.css'

export default function Hero() {
  const ref = useReveal(0.05)

  return (
    <section id="home" className="hero section">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
      </div>

      <div className="container">
        <div ref={ref} className="hero__layout reveal">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              {personalInfo.status}
            </div>

            <h1 className="hero__title">
              Hi, I&apos;m{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="hero__role">{personalInfo.title}</p>
            <p className="hero__tagline">{personalInfo.tagline}</p>

            <div className="hero__cta">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-outline">View Projects</a>
              <a href={personalInfo.resumeUrl} className="btn btn-outline" download>
                Download Resume
              </a>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-value">10.0</span>
                <span className="hero__stat-label">SSC GPA</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-value">OWASP</span>
                <span className="hero__stat-label">Security Focus</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-value">Python</span>
                <span className="hero__stat-label">Full Stack Dev</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <ProfilePhoto variant="hero" />
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  )
}
