export const scrollToSection = (sectionId) => {
  // Try to find element immediately
  let element = document.getElementById(sectionId)
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    // If element not found, retry after a short delay (for dynamic content)
    setTimeout(() => {
      element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }
}

