import { Link } from 'react-router-dom'
import { Award, Calendar } from 'lucide-react'
import FadeIn from './FadeIn'
import { awards } from '../data/content'

export default function Awards() {
  return (
    <section id="awards" className="py-16 md:py-24 px-6 md:px-16 bg-[#FAF3E1]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <span className="px-3 py-1 rounded-full bg-[#FA8112]/20 text-[#FA8112] text-sm font-bold">05</span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#222222]">Awards & Recognition</h2>
          </div>
          <p className="text-[#222222]/70 text-sm mb-8">
            Add award images in <code className="px-2 py-0.5 rounded bg-[#F5E7C6] text-[#222222]">public/images/awards/</code>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {awards.map((award, i) => (
              <Link
                key={i}
                to={`/award/${i}`}
                className="flex flex-col gap-4 p-5 md:p-6 rounded-2xl bg-white border border-[#FA8112]/15 shadow-sm hover:border-[#FA8112]/30 transition-colors text-left w-full"
              >
                <div className="flex justify-center">
                  <div className="w-full min-h-[180px] md:h-[140px] md:min-h-0 rounded-xl overflow-hidden bg-[#F5E7C6] flex items-center justify-center border border-[#FA8112]/10">
                    <img
                      src={`/images/awards/${award.img}`}
                      alt={award.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        const p = e.target.nextElementSibling
                        if (p) { p.classList.remove('hidden'); p.classList.add('flex') }
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center text-[#FA8112]/50">
                      <Award size={48} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="min-w-0 flex-1 text-center md:text-left">
                  <h3 className="font-bold text-[#222222] text-base md:text-lg">{award.title}</h3>
                  <div className="flex items-center justify-center md:justify-start gap-2 mt-1 text-[#222222]/70 text-xs md:text-sm">
                    <Calendar size={14} className="shrink-0" />
                    <span>{award.date}</span>
                    <span className="text-[#FA8112]">·</span>
                    <span className="truncate">{award.issuer}</span>
                  </div>
                  <p className="text-[#222222]/90 text-sm md:text-base mt-3 leading-relaxed line-clamp-3">{award.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
