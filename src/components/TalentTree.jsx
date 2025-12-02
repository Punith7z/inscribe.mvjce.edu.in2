import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TalentTree = () => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

    return (
        <section
            id="talent-tree"
            ref={ref}
            className="py-12 px-5 relative flex flex-col items-center justify-center"
        >
            <div
                className={`transition-all duration-1000 ease-out w-full max-w-6xl ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                    }`}
            >
                <h2 className="section-title text-4xl mb-12 text-center text-heading font-montserrat font-bold relative pb-4">
                    Talent Tree — Meet the Makers
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-primary rounded"></span>
                </h2>
                {/* Description Card */}
                <div className="card-gradient rounded-[2rem] p-8 mb-8 border border-black/5 shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                    <p className="text-lg leading-relaxed" style={{ color: '#c9a577' }}>
                        A vibrant cohort of designers, developers and creators collaborating on hands-on projects, workshops and showcases.
                        Explore member work, join sessions, and grow with mentorship and community support.
                    </p>
                </div>

                {/* Explore Button */}
                <div className="flex justify-center">
                    <Link
                        to="/team"
                        className="inline-flex items-center gap-3 px-10 py-4 rounded-full no-underline font-bold text-xl shadow-xl transition-all duration-300 hover:scale-100 hover:shadow-2xl hover:-translate-y-1 border-2"
                        style={{
                            background: 'linear-gradient(135deg, #d4a574 0%, #c9956d 100%)',
                            color: '#ffffff',
                            borderColor: '#8B7355'
                        }}
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
