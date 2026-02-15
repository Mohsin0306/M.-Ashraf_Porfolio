import { useState } from 'react'
import { Menu } from 'lucide-react'
import Sidebar from './Sidebar'

export default function Layout({ children, activeSection = null, onNavClick }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleNavClick = (id) => {
    onNavClick?.(id)
    setSidebarOpen(false)
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} activeSection={activeSection} onNavClick={handleNavClick} />
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-30 p-3 rounded-xl bg-[#222222] text-white md:hidden shadow-lg hover:bg-[#333] transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>
      <main className="flex-1 md:ml-[260px] min-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
