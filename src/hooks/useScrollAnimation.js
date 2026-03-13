import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Optionally unobserve after animation to improve performance
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          setIsVisible(false)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [options.threshold, options.rootMargin, options.once])

  return [elementRef, isVisible]
}

// Enhanced scroll animation hook with animation type support
export const useScrollAnimationEnhanced = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)
  const animationType = options.type || 'fade-in' // fade-in, slide-left, slide-right, scale, rotate

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          setIsVisible(false)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -100px 0px',
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      // Add animation class based on type
      const baseClass = `scroll-${animationType.replace('_', '-')}`
      currentElement.classList.add(baseClass)
      
      // Add stagger delay if provided
      if (options.stagger) {
        currentElement.classList.add(`scroll-stagger-${options.stagger}`)
      }
      
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [options.threshold, options.rootMargin, options.once, animationType, options.stagger])

  useEffect(() => {
    const currentElement = elementRef.current
    if (currentElement) {
      if (isVisible) {
        currentElement.classList.add('visible')
      } else {
        currentElement.classList.remove('visible')
      }
    }
  }, [isVisible])

  return [elementRef, isVisible]
}

