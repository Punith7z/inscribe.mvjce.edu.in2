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
            {/* Home Page Background - Abstract Nirvana */}
            <div
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isHome ? 'opacity-100' : 'opacity-0'}`}
            >
                <iframe
                    src='https://my.spline.design/abstractnirvana-okn4087NKgzTjfVTg7QuEgFM/'
                    frameBorder='0'
                    width='100%'
                    height='100%'
                    className="absolute top-0 left-0 w-full h-[115%] md:h-[120%]"
                    style={{ border: 'none' }}
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
                    className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%]"
                    style={{ border: 'none' }}
                    title="Pages Background"
                ></iframe>
            </div>
        </div>
    )
}

export default Background3D
