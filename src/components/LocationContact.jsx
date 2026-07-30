import useScrollReveal from '../hooks/useScrollReveal'

export default function LocationContact() {
  const ref = useScrollReveal()

  const locations = [
    { icon: '📍', name: 'TPS Desa Barang' },
  ]

  return (
    <section className="location-contact" id="lokasi" ref={ref}>
      <div className="container">
        <div className="location-contact-grid">
          {/* Location */}
          <div className="location-block reveal-left">
            <h3>📍 LOKASI DESA BARANG</h3>

            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124053.39572459072!2d110.11268736990067!3d-7.226504274792954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e707100602a80cb%3A0xd6238fa83c8c6763!2sTPS3R%20BARANG%20KEC.JUMO!5e0!3m2!1sen!2sid!4v1785344121422!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Peta Lokasi Desa Barang"
              ></iframe>
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
        </div>
      </div>
    </section>
  )
}
