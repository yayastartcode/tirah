import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: '/images/gallery/tirah1.jpeg', alt: 'Gallery 1' },
  { src: '/images/gallery/tirah2.jpeg', alt: 'Gallery 2' },
  { src: '/images/gallery/tirah3.jpeg', alt: 'Gallery 3' },
  { src: '/images/gallery/tirah4.jpeg', alt: 'Gallery 4' },
  { src: '/images/gallery/tirah5.jpeg', alt: 'Gallery 5' },
  { src: '/images/gallery/tirah6.jpeg', alt: 'Gallery 6' },
  { src: '/images/gallery/tirah7.jpeg', alt: 'Gallery 7' },
  { src: '/images/gallery/tirah8.jpeg', alt: 'Gallery 8' },
  { src: '/images/gallery/tirah9.jpeg', alt: 'Gallery 9' },
  { src: '/images/gallery/tirah10.jpeg', alt: 'Gallery 10' },
  { src: '/images/gallery/tirah11.jpeg', alt: 'Gallery 11' },
  { src: '/images/gallery/tirah12.jpeg', alt: 'Gallery 12' }
]

function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Galeri</h2>
      <p className="text-sm text-gray-500 mb-8 text-center">Lihat suasana dan fasilitas Tirah Homestay</p>
      
      {/* Grid Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {galleryImages.map((image, index) => (
          <div 
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 z-50 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors hidden sm:flex"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 z-50 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors hidden sm:flex"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div 
            className="max-w-[90vw] max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[currentImageIndex].src} 
              alt={galleryImages[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full">
            <p className="text-white text-sm">
              {currentImageIndex + 1} / {galleryImages.length}
            </p>
          </div>

          {/* Mobile Navigation Arrows (Bottom) */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4 sm:hidden">
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default GallerySection
