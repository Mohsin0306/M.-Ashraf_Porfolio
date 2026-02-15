import { Mail, Phone, MapPin } from 'lucide-react'
import FadeIn from './FadeIn'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 px-4 md:px-16 bg-[#F5E7C6]">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs md:text-sm font-semibold text-[#FA8112] uppercase tracking-wider mb-2 md:mb-4">09</p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#222222] mb-6 md:mb-12">Contact</h2>
          <div className="space-y-3 md:space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 md:gap-5 p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#FAF3E1] border border-[#FA8112]/20 hover:border-[#FA8112]/40 hover:bg-[#FAF3E1]/90 transition-all group"
            >
              <span className="shrink-0 p-2.5 md:p-4 rounded-xl md:rounded-2xl bg-[#FA8112]/15 text-[#FA8112] group-hover:bg-[#FA8112]/25 transition-colors">
                <Mail size={20} />
              </span>
              <span className="font-semibold text-[#222222] text-sm md:text-base break-all min-w-0">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 md:gap-5 p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#FAF3E1] border border-[#FA8112]/20 hover:border-[#FA8112]/40 hover:bg-[#FAF3E1]/90 transition-all group"
            >
              <span className="shrink-0 p-2.5 md:p-4 rounded-xl md:rounded-2xl bg-[#FA8112]/15 text-[#FA8112] group-hover:bg-[#FA8112]/25 transition-colors">
                <Phone size={20} />
              </span>
              <span className="font-semibold text-[#222222] text-sm md:text-base">{profile.phone}</span>
            </a>
            <div className="flex items-center gap-3 md:gap-5 p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#FAF3E1] border border-[#FA8112]/20">
              <span className="shrink-0 p-2.5 md:p-4 rounded-xl md:rounded-2xl bg-[#FA8112]/15 text-[#FA8112]">
                <MapPin size={20} />
              </span>
              <span className="font-semibold text-[#222222] text-sm md:text-base">{profile.location}</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
