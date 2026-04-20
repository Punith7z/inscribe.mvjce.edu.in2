import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { SpeedLinesShader } from './ui/speed-lines-shader'
import { WarpBackground } from './ui/background-shaders'

const Background3D = () => {
    const { theme } = useTheme()

    // Vibrant teal used as a transition bridge between light/dark modes
    const transitionTeal = '#35A2FF'

    return (
        <div 
            style={{ 
                position: 'fixed', 
                top: 0, left: 0, right: 0, bottom: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden', 
                pointerEvents: 'none', 
                zIndex: -1,
                // Bridging background color: goes to teal during transition for a smoother flash
                backgroundColor: theme === 'dark' ? '#000000' : transitionTeal,
                transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                willChange: 'background-color'
            }}
        >
            {/* Dark mode layer: Speed Lines */}
            <div 
                style={{ 
                    position: 'absolute', 
                    top: 0, left: 0, right: 0, bottom: 0,
                    width: '100%',
                    height: '100%',
                    opacity: theme === 'dark' ? 1 : 0,
                    transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    visibility: theme === 'dark' ? 'visible' : 'hidden',
                    willChange: 'opacity'
                }}
            >
                <SpeedLinesShader />
            </div>

            {/* Light mode layer: Warp */}
            <div 
                style={{ 
                    position: 'absolute', 
                    top: 0, left: 0, right: 0, bottom: 0,
                    width: '100%',
                    height: '100%',
                    opacity: theme === 'light' ? 1 : 0,
                    transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    visibility: theme === 'light' ? 'visible' : 'hidden',
                    willChange: 'opacity'
                }}
            >
                <WarpBackground />
            </div>
        </div>
    )
}

export default Background3D
