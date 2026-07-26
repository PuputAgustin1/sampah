import useScrollReveal from '../hooks/useScrollReveal'

export default function Footer() {
  const ref = useScrollReveal()

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <div className="footer-inner reveal">
          <div className="footer-brand">
            <h3>♻ SIPILAH DESA BARANG</h3>
            <p>KKN UNNES 2026</p>
          </div>

          <p className="footer-tagline">
            Bersama kita wujudkan Desa Barang<br />
            yang bersih, sehat, dan berkelanjutan.
          </p>

          <div className="footer-copyright">
            © 2026 | Semua Hak Dilindungi
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <span>SIPILAH - Sistem Informasi Pilah Sampah</span>
          <span>Desa Barang, Kec. Jumo, Kab. Temanggung</span>
        </div>
      </div>
    </footer>
  )
}
