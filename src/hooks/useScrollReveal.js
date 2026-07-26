import { useEffect, useRef } from 'react'

/**
 * useScrollReveal
 * Attach this ref to a wrapper element.
 * Children with class "reveal" will animate in when they enter the viewport.
 * Children with class "reveal-left" / "reveal-right" slide in from the sides.
 * Children with class "reveal-scale" scale up.
 * Add "reveal-delay-N" (N = 1..5) for staggered delays.
 */
export default function useScrollReveal() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return containerRef
}
