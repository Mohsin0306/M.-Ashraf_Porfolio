import FadeIn from './FadeIn'
import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="py-24 px-8 md:px-16 bg-[#F5E7C6]">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">03</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-8">Education</h2>
          <div className="p-8 rounded-3xl bg-[#FAF3E1] border border-[#F5E7C6] shadow-sm">
            <h3 className="text-xl font-bold text-[#222222]">{education.degree}</h3>
            <p className="text-[#222222]/90 mt-2">{education.institution}</p>
            <p className="text-[#222222]/70 text-sm mt-1">{education.period} · {education.location}</p>
            <p className="text-[#222222]/90 mt-6">{education.description}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
