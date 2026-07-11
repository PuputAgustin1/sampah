export default function LocationContact() {
  const locations = [
    { icon: '📍', name: 'TPS Desa Barang' },
    { icon: '🏦', name: 'Bank Sampah' },
    { icon: '🏛️', name: 'Balai Desa Barang' },
  ]

  return (
    <section className="location-contact" id="lokasi">
      <div className="container">
        <div className="location-contact-grid">
          {/* Location */}
          <div className="location-block">
            <h3>📍 LOKASI PENTING</h3>

            <div className="location-map">
              <div className="location-map-placeholder">
                <span>🗺️</span>
                <span>Peta Lokasi Desa Barang</span>
              </div>
            </div>

            <div className="location-list">
              {locations.map((loc, index) => (
                <div key={index} className="location-item">
                  <div className="location-item-icon">{loc.icon}</div>
                  <span className="location-item-text">{loc.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="contact-block" id="kontak">
            <h3>📞 KONTAK</h3>

            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">🏛️</div>
                <div className="contact-info-content">
                  <h4>Pemerintah Desa Barang</h4>
                  <p>(0298) 1234567</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">👤</div>
                <div className="contact-info-content">
                  <h4>Pengelola TPS</h4>
                  <p>0812-3456-7890</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">✉️</div>
                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>desabarang@gmail.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div className="contact-info-content">
                  <h4>Alamat</h4>
                  <p>Desa Barang, Kec. Jumo, Kab. Temanggung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
