import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScroll({ children }) {
    return (
        <ReactLenis root options={{ 
            lerp: 0.1, 
            duration: 1.0, 
            smoothTouch: true,
            syncTouch: true,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.2,
            infinite: false
        }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScroll;
