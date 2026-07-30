import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('beranda')

  const isClickScrolling = useRef(false)
  const clickTimeout = useRef(null)

  const links = [
    { label: 'Beranda', href: '#beranda', id: 'beranda' },
    { label: 'Cara Memilah', href: '#cara-memilah', id: 'cara-memilah' },
    { label: 'Alur Pengelolaan', href: '#alur', id: 'alur' },
    { label: 'Lilin Aromaterapi', href: '#lilin-aromaterapi', id: 'lilin-aromaterapi' },
    { label: 'Video', href: '#video', id: 'video' },
    { label: 'Lokasi', href: '#lokasi', id: 'lokasi' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ]

  /* ── Scroll → scrolled state ─────────────────────────── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ── Active section via Scroll Position ──────────────── */
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return

      const sectionIds = links.map((l) => l.id)
      const scrollPosition = window.scrollY + 120 // offset for sticky navbar + spacing

      let active = 'beranda'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          const top = rect.top + window.scrollY
          if (scrollPosition >= top) {
            active = id
          }
        }
      }
      setActiveSection(active)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleLinkClick = (id) => {
    isClickScrolling.current = true
    setActiveSection(id)
    setMobileOpen(false)

    if (clickTimeout.current) clearTimeout(clickTimeout.current)
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false
    }, 800)
  }

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
              onClick={() => handleLinkClick(link.id)}
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

