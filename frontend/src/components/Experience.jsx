import { MapPin, Calendar } from 'lucide-react'
import FadeIn from './FadeIn'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-6 md:px-16 bg-[#FAF3E1]">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <span className="px-3 py-1 rounded-full bg-[var(--accent-20)] text-[var(--accent)] text-sm font-bold">02</span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#222222]">Experience</h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Main role */}
            <div className="p-5 md:p-6 rounded-2xl bg-white/80 border border-[var(--accent-15)] shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-[#222222]">{experience.main.title}</h3>
              <p className="text-[var(--accent)] font-semibold text-sm md:text-base mt-1">{experience.main.role}</p>
              <div className="flex flex-wrap gap-4 mt-2 text-[#222222]/70 text-xs md:text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="shrink-0" />
                  {experience.main.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="shrink-0" />
                  {experience.main.location}
                </span>
              </div>
              <p className="text-[#222222]/90 text-sm md:text-base mt-3 leading-relaxed">{experience.main.description}</p>
            </div>

            {/* Postings */}
            <div className="p-5 md:p-6 rounded-2xl bg-white/80 border border-[var(--accent-15)] shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-[#222222]">{experience.details.title}</h3>
              <p className="text-[#222222]/70 text-xs md:text-sm mt-1">
                {experience.details.period} · {experience.details.location}
              </p>
              <ul className="mt-4 space-y-3">
                {experience.details.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2" />
                    <span>
                      <strong className="text-[#222222]">{item.place}</strong>
                      <span className="text-[#222222]/80"> — {item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
