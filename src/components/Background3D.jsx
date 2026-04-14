import React from 'react'
import { DottedSurface } from './ui/dotted-surface'
import GeometricBlurMesh from './ui/geometric-blur-mesh'

const Background3D = () => {
    return (
        <div 
            className="fixed inset-0 overflow-hidden pointer-events-none w-full h-full" 
            style={{ zIndex: -1 }}
        >
            {/* Dark Mode Background */}
            <div className="hidden dark:block w-full h-full absolute inset-0 z-0">
                <DottedSurface className="w-full h-full absolute inset-0 z-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -top-10 left-1/2 w-full h-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_50%)] blur-[30px]"
                        />
                    </div>
                </DottedSurface>
            </div>

            {/* Light Mode Background with Inverted Colors */}
            <div className="block dark:hidden absolute inset-0 w-full h-full z-10 pointer-events-auto" style={{ filter: "invert(1)" }}>
                <GeometricBlurMesh />
            </div>
        </div>
    )
}

export default Background3D
