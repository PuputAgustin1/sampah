export default function Hero() {
  return (
    <section className="hero" id="beranda">
      {/* Decorative leaves */}
      <span className="hero-leaf">🍃</span>
      <span className="hero-leaf">🌿</span>
      <span className="hero-leaf">🍂</span>

      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Pusat Informasi Pengelolaan Sampah Berbasis Digital
            </div>

            <h2 className="hero-title">
              SIPILAH
              <span>DESA BARANG</span>
            </h2>

            <p className="hero-subtitle">
              Pusat Informasi Pengelolaan Sampah Berbasis Digital
            </p>

            <blockquote className="hero-quote">
              "Mulai dari Rumah,<br />
              Selamatkan Lingkungan"
            </blockquote>

            <a href="#cara-memilah" className="hero-cta">
              Pelajari Sekarang
              <span className="hero-cta-arrow">→</span>
            </a>
          </div>

          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img
                src="/tps-desa-barang.png"
                alt="TPS Desa Barang - Tempat pemilahan sampah"
              />
              <div className="hero-image-overlay">
                <span className="hero-image-overlay-badge">
                  🏠 TPS Desa Barang
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
