import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Award, Calendar, X } from 'lucide-react'
import Layout from '../components/Layout'
import { awards } from '../data/content'

export default function AwardDetail() {
  const [showFullImage, setShowFullImage] = useState(false)
  const { id } = useParams()
  const index = parseInt(id, 10)
  const award = awards[index]

  if (!award) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-[#FAF3E1]">
          <div className="text-center">
            <p className="text-[#222222] mb-4">Award not found</p>
            <Link to="/#awards" className="text-[#FA8112] font-medium hover:underline">
              Back to Awards
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout activeSection="awards">
      <div className="min-h-screen bg-[#FAF3E1] flex flex-col md:overflow-hidden">
        <div className="flex-1 flex flex-col md:flex-row md:min-h-0">
          {/* Left - Image */}
          <div className="md:w-1/2 md:flex-shrink-0 md:flex md:items-center md:justify-center md:p-8">
            <button
              type="button"
              onClick={() => setShowFullImage(true)}
              className="w-full md:w-auto md:max-w-full md:max-h-[calc(100vh-120px)] p-4 md:p-0 focus:outline-none focus:ring-2 focus:ring-[#FA8112] focus:ring-offset-2 rounded-xl"
            >
              <div className="aspect-[4/3] md:aspect-auto md:max-h-[calc(100vh-140px)] rounded-xl overflow-hidden bg-[#F5E7C6] flex items-center justify-center border border-[#FA8112]/10 cursor-zoom-in">
                <img
                  src={`/images/awards/${award.img}`}
                  alt={award.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const p = e.target.nextElementSibling
                    if (p) { p.classList.remove('hidden'); p.classList.add('flex') }
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center text-[#FA8112]/40">
                  <Award size={120} strokeWidth={1.5} />
                </div>
              </div>
              <p className="text-[#222222]/60 text-sm mt-2 md:hidden">Tap to view full image</p>
            </button>
          </div>

          {/* Right - Details */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 md:flex md:flex-col md:justify-center">
            <Link
              to="/#awards"
              className="inline-flex items-center gap-2 text-[#FA8112] font-medium hover:underline mb-6 md:mb-8"
            >
              <ArrowLeft size={20} />
              Back to Awards
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold text-[#222222]">{award.title}</h1>
            <div className="flex items-center gap-2 mt-3 text-[#222222]/70 text-base md:text-lg">
              <Calendar size={20} className="shrink-0" />
              <span>{award.date}</span>
              <span className="text-[#FA8112]">·</span>
              <span>{award.issuer}</span>
            </div>
            <p className="text-[#222222]/90 text-base md:text-lg mt-6 leading-relaxed">{award.description}</p>
          </div>
        </div>
      </div>

      {/* Full image lightbox */}
      {showFullImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setShowFullImage(false)}
        >
          <button
            type="button"
            onClick={() => setShowFullImage(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <img
            src={`/images/awards/${award.img}`}
            alt={award.title}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  )
}
