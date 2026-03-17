import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Background3D = () => {
    const location = useLocation()
    const [isHome, setIsHome] = useState(true)

    useEffect(() => {
        setIsHome(location.pathname === '/')
    }, [location])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none hidden dark:block" style={{ zIndex: -1 }}>
            {/* Home Page Background - Particle Nebula */}
            <div
                className={`absolute inset-0 ${isHome ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
                <iframe 
                    src='https://my.spline.design/particlenebula-VdukAca4T5r8ipRYZHIXwqD0/' 
                    frameBorder='0' 
                    width='100%' 
                    height='100%'
                    fetchpriority='high'
                    loading='lazy'
                    className="absolute top-0 left-0 w-full h-[115%] md:h-[120%] opacity-60 mix-blend-screen"
                    style={{ border: 'none', pointerEvents: 'none' }}
                    title="Home Background"
                ></iframe>
            </div>


            {/* Other Pages Background - Square Chips */}
            <div
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${!isHome ? 'opacity-100' : 'opacity-0'}`}
            >
                <iframe
                    src='https://my.spline.design/squarechipsscrollingsplinecoursecom-8S3fuy3VQaFy2bdowU2iFpXo/'
                    frameBorder='0'
                    width='100%'
                    height='100%'
                    loading='lazy'
                    className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%]"
                    style={{ border: 'none', pointerEvents: 'none' }}
                    title="Pages Background"
                ></iframe>
            </div>
        </div>
    )
}

export default Background3D
