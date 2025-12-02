import { useEffect } from 'react'

const CustomCursor = () => {
  useEffect(() => {
    const cursorLens = document.createElement('div')
    cursorLens.id = 'cursorLens'
    cursorLens.setAttribute('aria-hidden', 'true')
    document.body.appendChild(cursorLens)

    const cursorRipples = document.createElement('div')
    cursorRipples.id = 'cursorRipples'
    cursorRipples.setAttribute('aria-hidden', 'true')
    document.body.appendChild(cursorRipples)

    let mouseX = 0
    let mouseY = 0
    let lensX = 0
    let lensY = 0

    const updateCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateLens = () => {
      lensX += (mouseX - lensX) * 0.1
      lensY += (mouseY - lensY) * 0.1
      cursorLens.style.left = lensX + 'px'
      cursorLens.style.top = lensY + 'px'
      requestAnimationFrame(animateLens)
    }

    const createRipple = (e) => {
      const ripple = document.createElement('div')
      ripple.className = 'cursor-ripple'
      ripple.style.left = e.clientX + 'px'
      ripple.style.top = e.clientY + 'px'
      cursorRipples.appendChild(ripple)
      setTimeout(() => ripple.remove(), 700)
    }

    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('click', createRipple)

    // Add hover class to body when hovering over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'))
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'))
    })

    animateLens()

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('click', createRipple)
      cursorLens.remove()
      cursorRipples.remove()
    }
  }, [])

  return null
}

export default CustomCursor

