import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="py-12 px-8 md:px-16 bg-[#222222] text-[#FAF3E1]/80 text-center text-sm">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  )
}
