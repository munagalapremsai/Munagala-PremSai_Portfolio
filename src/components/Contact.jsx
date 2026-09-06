import { personalInfo } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

const contactMethods = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Prem Sai Munagala',
    href: personalInfo.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.062 2.062 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'munagalapremsai',
    href: personalInfo.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          subtitle="Open to internships, full-time roles, and collaboration on security-focused projects."
        />

        <div ref={ref} className="contact__wrapper reveal">
          <div className="contact__cta-card">
            <h3>Ready to hire or collaborate?</h3>
            <p>
              I&apos;m Actively seeking opportunities to engineer digital infrastructures through advanced Ethical Hacking, VAPT, and automated threat defense.
              <br /><br />
              Specializing in custom Python scripting and security automation to accelerate vulnerability discovery, optimize threat response, and fortify scalable API architectures.
            </p>
            <div className="contact__cta-actions">
              <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                Send Email
              </a>
              <a href={personalInfo.resumeUrl} className="btn btn-outline" download>
                Download Resume
              </a>
            </div>
          </div>

          <div className="contact__methods">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="contact__method"
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact__method-icon">{method.icon}</span>
                <div>
                  <span className="contact__method-label">{method.label}</span>
                  <span className="contact__method-value">{method.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
