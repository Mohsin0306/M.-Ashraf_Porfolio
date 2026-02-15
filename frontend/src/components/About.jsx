import { Briefcase, Shield, Target } from 'lucide-react'
import FadeIn from './FadeIn'
import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-16 bg-[#F5E7C6]">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#FA8112]/20 text-[#FA8112] text-sm font-bold">01</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222]">About Me</h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-[#FA8112]" />
            <div className="pl-8">
              <p className="text-[#222222]/90 leading-relaxed text-lg md:text-xl">
                {about.text}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 border border-[#FA8112]/20 hover:border-[#FA8112]/40 transition-colors">
              <span className="p-3 rounded-xl bg-[#FA8112]/15 text-[#FA8112] shrink-0">
                <Briefcase size={24} strokeWidth={1.5} />
              </span>
              <div>
                <h4 className="font-bold text-[#222222] mb-1">26 Years Service</h4>
                <p className="text-[#222222]/70 text-sm">Pakistan Army • Retired NCO</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 border border-[#FA8112]/20 hover:border-[#FA8112]/40 transition-colors">
              <span className="p-3 rounded-xl bg-[#FA8112]/15 text-[#FA8112] shrink-0">
                <Shield size={24} strokeWidth={1.5} />
              </span>
              <div>
                <h4 className="font-bold text-[#222222] mb-1">Disciplined & Reliable</h4>
                <p className="text-[#222222]/70 text-sm">Operationally skilled</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 border border-[#FA8112]/20 hover:border-[#FA8112]/40 transition-colors">
              <span className="p-3 rounded-xl bg-[#FA8112]/15 text-[#FA8112] shrink-0">
                <Target size={24} strokeWidth={1.5} />
              </span>
              <div>
                <h4 className="font-bold text-[#222222] mb-1">Vehicle Administration</h4>
                <p className="text-[#222222]/70 text-sm">POL & Fleet Management</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
