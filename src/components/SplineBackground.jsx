import { useTheme } from '../contexts/ThemeContext'
import { useEffect, useState } from 'react'

const SplineBackground = () => {
    const { theme } = useTheme()
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    if (theme !== 'dark') return null

    // On mobile, use CSS gradient background instead of 3D Spline for better performance
    if (isMobile) {
        return (
            <div 
                className="fixed inset-0 w-full h-full z-[-1] pointer-events-none transition-opacity duration-500"
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
                    backgroundSize: '400% 400%',
                    animation: 'gradientShift 15s ease infinite'
                }}
            >
                <style>{`
                    @keyframes gradientShift {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}</style>
            </div>
        )
    }

    return (
        <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none transition-opacity duration-500">
            <iframe
                src='https://my.spline.design/waveform-o8aqPI3vdfQRWoe8xyOjzB8f/'
                frameBorder='0'
                width='100%'
                height='100%'
                className="w-full h-full border-0"
                title="Spline 3D Background"
                loading="lazy"
                style={{ display: 'block' }}
            ></iframe>
        </div>
    )
}

export default SplineBackground
