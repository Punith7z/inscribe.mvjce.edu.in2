import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Gallery = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
  
  const galleryImages = [
    '/images/gallery 1.jpg',
    '/images/gallery 2.jpg',
    '/images/gallery 3.jpg',
    '/images/gallery 4.jpg',
    '/images/gallery 5.jpg',
    '/images/gallery 6.jpg'
  ]

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section 
      id="gallery" 
      ref={ref}
      className="py-16 px-5 relative min-h-[60vh] flex flex-col items-center justify-center"
    >
      <div 
        className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
          Gallery
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary rounded"></span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className="relative overflow-hidden rounded-2xl cursor-pointer group card-gradient border border-black/5 transition-all duration-400 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-5 right-5 text-white text-4xl font-bold hover:text-accent-2 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery

