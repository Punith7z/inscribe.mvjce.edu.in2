<<<<<<< HEAD
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Gallery = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

=======
import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const Gallery = () => {
  const [ref, isVisible] = useScrollAnimationEnhanced({
    threshold: 0.1,
    type: 'scale'
  })

  // Original images
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
  const galleryImages = [
    '/images/gallery 1.jpg',
    '/images/gallery 2.jpg',
    '/images/gallery 3.jpg',
    '/images/gallery 4.jpg',
    '/images/gallery 5.jpg',
    '/images/gallery 6.jpg'
  ]

<<<<<<< HEAD
  const [selectedImage, setSelectedImage] = useState(null)
=======
  // Double the images for seamless infinite scroll
  const scrollImages = [...galleryImages, ...galleryImages]
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164

  return (
    <section
      id="gallery"
      ref={ref}
<<<<<<< HEAD
      className="py-16 px-5 relative min-h-[60vh] flex flex-col items-center justify-center"
    >
      <div
        className={`transition-all duration-1000 ease-out ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
          }`}
      >
        <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
          Gallery
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="relative overflow-hidden rounded-2xl cursor-pointer group glass-effect card-gradient border border-black/5 hover-glow glass-card"
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
=======
      className={`py-20 px-5 relative min-h-screen flex items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      {/* Background Particles/Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-1/20 dark:bg-brand-red/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-2/20 dark:bg-brand-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Side: Content */}
        <div className="text-left space-y-8">
          <h2 className="section-title text-4xl md:text-5xl font-montserrat font-bold text-heading dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue relative inline-block">
            Our Journey
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-primary dark:bg-dark-blend-gradient rounded-full"></span>
          </h2>

          <div className="glass-effect dark:glass-effect p-8 rounded-[2rem] space-y-6 transform hover:scale-[1.01] transition-transform duration-300 border border-white/20 dark:border-white/5 shadow-xl backdrop-blur-md">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-poppins">
              Explore the memorable moments from our events, workshops, and team activities.
              From intense coding sessions to fun team-building activities, we've captured it all.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-poppins">
              Follow our journey on social media to stay updated with our latest projects and events!
            </p>


          </div>
        </div>

        {/* Right Side: Vertical Carousel */}
        <div className="relative h-[80vh] overflow-hidden rounded-[2rem] border-4 border-white/30 dark:border-white/10 shadow-2xl bg-white/10 dark:bg-black/20 backdrop-blur-sm">
          {/* Overlay Gradients for smooth fade in/out */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-bg-2 dark:from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg-2 dark:from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>

          <div className="animate-scroll-vertical w-full flex flex-col items-center gap-6 py-6">
            {scrollImages.map((image, index) => (
              <div
                key={index}
                className="w-[85%] relative group shrink-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-1 to-accent-2 dark:from-brand-red dark:to-brand-blue rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg transform transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src={image}
                    alt={`Gallery moment ${index % galleryImages.length + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 dark:group-hover:bg-white/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
      </div>
    </section>
  )
}

export default Gallery

