import useScrollReveal from '../hooks/useScrollReveal'

export default function Hero() {
  const ref = useScrollReveal()

  return (
    <section className="hero" id="beranda" ref={ref}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content reveal-left">
            <h2 className="hero-title">
              SIPILAH
              <br />
              <span className="hero-title-highlight">DESA BARANG</span>
            </h2>

            <p className="hero-subtitle reveal reveal-delay-1">
              Pusat Informasi Pengelolaan Sampah Berbasis Digital
            </p>

            <div className="hero-actions reveal reveal-delay-2">
              <a href="#cara-memilah" className="btn-primary">
                Pelajari Sekarang
                <span className="hero-cta-arrow">→</span>
              </a>
            </div>

            <div className="hero-features-inline reveal reveal-delay-3">
              <div className="hero-feature-inline">
                <span className="hero-feature-check">✔</span>
                Edukasi
              </div>
              <div className="hero-feature-inline">
                <span className="hero-feature-check">✔</span>
                Informasi
              </div>
              <div className="hero-feature-inline">
                <span className="hero-feature-check">✔</span>
                Lingkungan
              </div>
            </div>
          </div>

          <div className="hero-image-masonry reveal-right">
            <div className="masonry-col col-left">
              <div className="masonry-img masonry-img-1">
                <img src="/tps-desa-barang.jpeg" alt="TPS Desa Barang" />
              </div>
              <div className="masonry-img masonry-img-2">
                <img src="/mesin-press.png" alt="Mesin Press" />
              </div>
            </div>
            <div className="masonry-col col-right">
              <div className="masonry-img masonry-img-3">
                <img src="/budidaya-maggot.png" alt="Budidaya Maggot" />
              </div>
              <div className="masonry-img masonry-img-4">
                <img src="/paving-plastik.png" alt="Paving Plastik" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

