import { User, Briefcase, GraduationCap, Wrench, Award, FileCheck, Heart, Mail, Phone, MapPin, Palette } from 'lucide-react'
import { profile } from '../data/content'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { href: '/#about', label: 'About', icon: User, id: 'about' },
  { href: '/#experience', label: 'Experience', icon: Briefcase, id: 'experience' },
  { href: '/#education', label: 'Education', icon: GraduationCap, id: 'education' },
  { href: '/#skills', label: 'Skills', icon: Wrench, id: 'skills' },
  { href: '/#awards', label: 'Awards', icon: Award, id: 'awards' },
  { href: '/#certificates', label: 'Certificates & Courses', icon: FileCheck, id: 'certificates' },
  { href: '/#interests', label: 'Interests', icon: Heart, id: 'interests' },
  { href: '/#contact', label: 'Contact', icon: Mail, id: 'contact' },
]

export default function Sidebar({ isOpen = false, onClose, activeSection = null, onNavClick }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 md:hidden backdrop-blur-sm" onClick={onClose} aria-hidden />
      )}
      <aside className={`fixed left-0 top-0 bottom-0 w-[260px] flex flex-col z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="h-full flex flex-col bg-white overflow-hidden border-r border-gray-200">
          {/* Top - Name + Theme toggle */}
          <div className="px-6 py-8 shrink-0">
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-[var(--accent)] font-bold text-xl tracking-tight">{profile.name}</h2>
              <button
                type="button"
                onClick={toggleTheme}
                className="shrink-0 p-2 rounded-lg bg-[var(--accent-15)] text-[var(--accent)] hover:bg-[var(--accent-25)] transition-colors"
                title={theme === 'default' ? 'Switch to Orange theme' : 'Switch to Default theme'}
                aria-label="Toggle theme"
              >
                <Palette size={20} />
              </button>
            </div>
            <p className="text-[#222222]/70 text-sm mt-1 font-medium">{profile.tagline}</p>
          </div>

          {/* Nav */}
          <nav className="flex-1 min-h-0 px-4 py-2 space-y-1">
            {navLinks.map(({ href, label, icon: Icon, id }) => {
              const isActive = activeSection === id
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    onNavClick?.(id)
                    onClose?.()
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-[var(--accent)] text-white'
                      : 'text-[#222222] hover:bg-[var(--accent)] hover:text-white'
                  }`}
                >
                  <Icon size={18} strokeWidth={2} className="shrink-0" />
                  <span className="truncate">{label}</span>
                </a>
              )
            })}
          </nav>

          {/* Bottom - Contact */}
          <div className="px-6 py-6 shrink-0 border-t border-gray-200 space-y-2">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-gray-600 font-medium text-sm hover:text-gray-900 hover:underline">
              <Mail size={16} className="shrink-0" />
              <span className="truncate">{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-3 text-gray-600 font-medium text-sm hover:text-gray-900 hover:underline">
              <Phone size={16} className="shrink-0" />
              {profile.phone}
            </a>
            <div className="flex items-center gap-3 text-gray-600 font-medium text-sm">
              <MapPin size={16} className="shrink-0" />
              <span className="truncate">{profile.location}</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
