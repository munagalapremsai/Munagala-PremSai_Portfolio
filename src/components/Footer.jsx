import { personalInfo } from '../data/portfolioData'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">PS</span>
          <p>
            Crafted by <strong>{personalInfo.name}</strong>
          </p>
        </div>

        <p className="footer__copy">
          © {year} {personalInfo.name}. All rights reserved.
        </p>

        <div className="footer__links">
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
