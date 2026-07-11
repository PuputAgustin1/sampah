import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Beranda', href: '#beranda', active: true },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Cara Memilah', href: '#cara-memilah' },
    { label: 'Alur Pengelolaan', href: '#alur' },
    { label: 'Video', href: '#video' },
    { label: 'Lokasi', href: '#lokasi' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#kontak' },
  ]

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
              className={link.active ? 'active' : ''}
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
