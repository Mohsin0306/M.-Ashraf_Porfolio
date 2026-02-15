import { Heart } from 'lucide-react'
import FadeIn from './FadeIn'
import { interests } from '../data/content'

export default function Interests() {
  return (
    <section id="interests" className="py-12 md:py-24 px-4 md:px-16 bg-[#FAF3E1]">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs md:text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-2 md:mb-4">08</p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#222222] mb-6 md:mb-10">Interests</h2>
          <div className="grid md:grid-cols-3 gap-3 md:gap-6">
            {interests.map((item, i) => (
              <div key={i} className="p-4 md:p-8 rounded-2xl md:rounded-3xl bg-[#F5E7C6] border border-[var(--accent-20)] shadow-sm hover:border-[var(--accent-40)] transition-all">
                <span className="inline-flex p-2 md:p-3 rounded-xl md:rounded-2xl bg-[var(--accent-15)] text-[var(--accent)] mb-3 md:mb-4">
                  <Heart size={20} strokeWidth={1.5} />
                </span>
                <h4 className="font-bold text-[#222222] text-sm md:text-base">{item.title}</h4>
                <p className="text-[#222222]/70 text-xs md:text-sm mt-1 md:mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
