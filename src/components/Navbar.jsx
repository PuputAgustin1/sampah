import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('beranda')

  const links = [
    { label: 'Beranda',         href: '#beranda',          id: 'beranda' },
    { label: 'Cara Memilah',    href: '#cara-memilah',     id: 'cara-memilah' },
    { label: 'Lilin Aromaterapi', href: '#lilin-aromaterapi', id: 'lilin-aromaterapi' },
    { label: 'Alur Pengelolaan', href: '#alur',            id: 'alur' },
    { label: 'Video',           href: '#video',            id: 'video' },
    { label: 'Lokasi',          href: '#lokasi',           id: 'lokasi' },
    { label: 'FAQ',             href: '#faq',              id: 'faq' },
    { label: 'Kontak',          href: '#kontak',           id: 'kontak' },
  ]

  /* ── Scroll → scrolled state ─────────────────────────── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ── Active section via IntersectionObserver ─────────── */
  useEffect(() => {
    const sectionIds = links.map((l) => l.id)
    const observers = []

    // Track which sections are currently intersecting
    const intersectingMap = {}

    const updateActive = () => {
      // Pick the first section (top-most in the page) that is intersecting
      const firstVisible = sectionIds.find((id) => intersectingMap[id])
      if (firstVisible) setActiveSection(firstVisible)
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          intersectingMap[id] = entry.isIntersecting
          updateActive()
        },
        {
          // Fire when the section occupies at least 20% of the viewport
          threshold: 0,
          rootMargin: '-30% 0px -60% 0px',
        }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a href="#beranda" className="navbar-logo">
          <div className="navbar-logo-icon">♻</div>
          <div className="navbar-logo-text">
            <h1>SIPILAH</h1>
            <span>Desa Barang</span>
          </div>
        </a>

        <div className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={activeSection === link.id ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

