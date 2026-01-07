import { useTheme } from '../contexts/ThemeContext'

const SplineBackground = () => {
    const { theme } = useTheme()

    if (theme !== 'dark') return null

    return (
        <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none transition-opacity duration-500">
            <iframe
                src='https://my.spline.design/waveform-o8aqPI3vdfQRWoe8xyOjzB8f/'
                frameBorder='0'
                width='100%'
                height='100%'
                className="w-full h-full border-0"
                title="Spline 3D Background"
            ></iframe>
        </div>
    )
}

export default SplineBackground
