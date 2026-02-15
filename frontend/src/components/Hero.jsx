import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import FadeIn from './FadeIn'
import { profile } from '../data/content'
import { useTheme } from '../context/ThemeContext'

export default function Hero() {
  const { profileImage } = useTheme()

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 relative overflow-hidden bg-white">
      {/* Animated blurred background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-40"
          style={{ background: 'linear-gradient(135deg, var(--accent) 0%, #F5E7C6 50%, var(--accent) 100%)' }}
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-30"
          style={{ background: 'linear-gradient(225deg, #F5E7C6 0%, #FAF3E1 100%)' }}
          animate={{
            x: [0, -50, 0],
            y: [0, 70, 0],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full blur-[90px] opacity-35"
          style={{ background: 'linear-gradient(45deg, var(--accent) 0%, #F5E7C6 100%)' }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, 50, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <FadeIn className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden mb-8 ring-4 ring-[var(--accent-30)] shadow-2xl flex items-center justify-center bg-transparent">
          <img
            src={profileImage}
            alt={profile.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              const p = e.target.nextElementSibling
              if (p) { p.classList.remove('hidden'); p.classList.add('flex') }
            }}
          />
          <div className="hidden w-full h-full items-center justify-center bg-transparent text-[var(--accent)] text-5xl font-bold">
            MA
          </div>
        </div>
        <p className="text-[var(--accent)] font-semibold text-sm uppercase tracking-[0.2em] mb-4">
          Administration & Vehicle Management
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#222222] mb-4 tracking-tight leading-[1.1]">
          {profile.name}
        </h1>
        <p className="text-xl text-[#222222]/80 mb-12">{profile.subtitle}</p>
        <motion.a
          href="#about"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#222222] text-white text-sm font-medium hover:bg-[#333] transition-colors shadow-lg"
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          View Profile
          <ChevronDown size={18} />
        </motion.a>
      </FadeIn>
    </section>
  )
}
