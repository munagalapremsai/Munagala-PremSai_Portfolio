import { useReveal } from '../hooks/useReveal'
import './SectionHeading.css'

export default function SectionHeading({ label, title, subtitle }) {
  const ref = useReveal()

  return (
    <div ref={ref} className="section-heading reveal">
      <span className="section-heading__label">{label}</span>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  )
}
