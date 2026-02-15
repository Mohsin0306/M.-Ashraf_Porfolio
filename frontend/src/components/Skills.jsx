import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { skills, languages } from '../data/content'

function LanguageBar({ name, level, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const percent = (level / 5) * 100
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-[#222222]">{name}</span>
        <span className="text-[#222222]/70">{level}/5</span>
      </div>
      <div className="h-2.5 rounded-full bg-[#F5E7C6] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-[#FA8112]"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-6 md:px-16 bg-[#FAF3E1]">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full bg-[#FA8112]/20 text-[#FA8112] text-sm font-bold">04</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#222222]">Skills</h2>
          </div>

          <div className="space-y-1">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-[#FA8112]/5 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#FA8112] shrink-0" />
                <span className="text-[#222222] font-medium">{skill}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-[#FA8112]/20">
            <p className="text-[#222222]/70 text-sm font-medium mb-5">Languages</p>
            <div className="space-y-5">
              {languages.map((lang, i) => (
                <LanguageBar key={lang.name} name={lang.name} level={lang.level} delay={i * 0.15} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
