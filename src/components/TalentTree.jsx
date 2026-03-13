<<<<<<< HEAD
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TalentTree = () => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
=======

import { Link } from 'react-router-dom'
import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'

const TalentTree = () => {
    const [ref, isVisible] = useScrollAnimationEnhanced({
        threshold: 0.1,
        type: 'fade-in'
    })
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164

    return (
        <section
            id="talent-tree"
            ref={ref}
            className="py-12 px-5 relative flex flex-col items-center justify-center"
        >
<<<<<<< HEAD
            <div
                className={`transition-all duration-1000 ease-out w-full max-w-6xl ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                    }`}
            >
=======
            <div className="w-full max-w-6xl transition-all duration-1000 ease-out">
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
                <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
                    Talent Tree — Meet the Makers
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
                </h2>
                {/* Description Card */}
<<<<<<< HEAD
                <div className="card-gradient rounded-[2rem] p-8 mb-8 border border-black/5 shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
=======
                <div className="liquid-glass card-gradient rounded-[2rem] p-8 mb-8 border border-black/5 shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164

                    <p className="text-lg leading-relaxed text-[#c9a577] dark:text-white">
                        A vibrant cohort of designers, developers and creators collaborating on hands-on projects, workshops and showcases.
                        Explore member work, join sessions, and grow with mentorship and community support.
                    </p>
                </div>

                {/* Explore Button */}
                <div className="flex justify-center">
                    <Link
                        to="/team"
<<<<<<< HEAD
                        className="inline-flex items-center gap-3 px-10 py-4 rounded-full no-underline font-bold text-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 border-2 border-[#8B7355] dark:border-brand-blue bg-gradient-primary dark:bg-gradient-to-r dark:from-brand-red dark:to-brand-blue text-white"
=======
                        className="inline-flex items-center gap-3 px-10 py-4 rounded-full no-underline font-bold text-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent dark:border-[#ED3E21] bg-transparent text-[#73634F] dark:text-white dark:hover:bg-[#ED3E21]/60"
>>>>>>> edd1fe69b5b00448b228ce57f35a6e8bde864164
                    >
                        <i className="fas fa-users text-2xl"></i>
                        Explore Our Talent Universe
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default TalentTree
