
import { Link } from 'react-router-dom'
import { Users } from 'lucide-react'
import { useScrollAnimationEnhanced } from '../hooks/useScrollAnimation'
import { useTheme } from '../contexts/ThemeContext'

const TalentTree = () => {
    const { theme } = useTheme()
    const [ref, isVisible] = useScrollAnimationEnhanced({
        threshold: 0.1,
        type: 'fade-in'
    })

    return (
        <section
            id="talent-tree"
            ref={ref}
            className="py-12 px-5 relative flex flex-col items-center justify-center"
        >
            <div className="w-full max-w-6xl transition-all duration-1000 ease-out">
                <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
                    Talent Tree — Meet the Makers
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-primary dark:bg-dark-blend-gradient rounded"></span>
                </h2>
                {/* Description Card */}
                <div className="liquid-glass card-gradient rounded-[2rem] p-8 mb-8 border border-black/5 shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                    <p className="text-lg leading-relaxed text-light-brown dark:text-white">
                        A vibrant cohort of designers, developers and creators collaborating on hands-on projects, workshops and showcases.
                        Explore member work, join sessions, and grow with mentorship and community support.
                    </p>
                </div>

                {/* Explore Button */}
                <div className="flex justify-center">
                    <Link
                        to="/team"
                        className="inline-flex items-center gap-3 px-10 py-4 rounded-full no-underline font-bold text-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 dark-hover-effect"
                        style={{
                            backgroundColor: theme === 'dark' ? 'transparent' : '#3D0A05',
                            color: '#FFFFFF',
                            border: theme === 'dark' ? '2px solid #ED3E21' : '2px solid transparent'
                        }}
                    >
                        <Users size={20} />
                        Explore Our Talent Universe
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default TalentTree
