import useScrollReveal from '../hooks/useScrollReveal'

export default function Categories() {
  const ref = useScrollReveal()

  const organikItems = [
    { icon: '🍛', label: 'Sisa Makanan' },
    { icon: '🍂', label: 'Daun' },
    { icon: '🍎', label: 'Buah' },
    { icon: '🥬', label: 'Sayur' },
    { icon: '☕', label: 'Ampas Kopi' },
    { icon: '🪵', label: 'Ranting' },
  ]

  const anorganikItems = [
    { icon: '🧴', label: 'Botol Plastik' },
    { icon: '🥫', label: 'Kaleng' },
    { icon: '📄', label: 'Kertas' },
    { icon: '📦', label: 'Kardus' },
    { icon: '🛍️', label: 'Plastik' },
    { icon: '🫙', label: 'Kaca' },
    { icon: '🩲', label: 'Pampers' },
    { icon: '🩸', label: 'Pembalut' },
    { icon: '😷', label: 'Masker' },
    { icon: '🧻', label: 'Tisu Bekas' },
    { icon: '🥡', label: 'Styrofoam' },
    { icon: '🥡', label: 'Kemasan' },
  ]

  return (
    <section className="sorting" id="cara-memilah" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">CARA MEMILAH DI RUMAH</h2>
        <p className="section-subtitle reveal reveal-delay-1">Di rumah, kita cukup memilah sampah menjadi 2 jenis:</p>

        <div className="sorting-grid">
          {/* Organik */}
          <div className="sort-card organik reveal-left reveal-delay-1">
            <div className="sort-card-header">
              <h3>SAMPAH ORGANIK</h3>
              <p className="sort-card-desc">Sampah yang mudah terurai secara alami</p>
            </div>

            <div className="sort-card-body">
              <div className="sort-bin-img">
                <span className="sort-bin-icon">🗑️</span>
              </div>
              <div className="sort-items-grid">
                {organikItems.map((item, i) => (
                  <div key={i} className="sort-item">
                    <div className="sort-item-icon">{item.icon}</div>
                    <span className="sort-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sort-card-footer">
              <span>✔️</span> Masukkan ke tempat sampah ORGANIK (HIJAU)
            </div>
          </div>



          {/* Anorganik */}
          <div className="sort-card anorganik reveal-right reveal-delay-2">
            <div className="sort-card-header">
              <h3>SAMPAH ANORGANIK</h3>
              <p className="sort-card-desc">Sampah yang tidak mudah terurai</p>
            </div>

            <div className="sort-card-body">
              <div className="sort-bin-img">
                <span className="sort-bin-icon" style={{ color: 'var(--orange-500)' }}>🗑️</span>
              </div>
              <div className="sort-items-grid">
                {anorganikItems.map((item, i) => (
                  <div key={i} className="sort-item">
                    <div className="sort-item-icon">{item.icon}</div>
                    <span className="sort-item-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sort-card-footer">
              <span>✔️</span> Masukkan ke tempat sampah ANORGANIK (OREN)
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="sort-note">
          <div className="sort-note-icon">📝</div>
          <div className="sort-note-text">
            <strong>Catatan:</strong>
            <p>Sampah anorganik yang terkumpul akan dipilah kembali oleh petugas TPS menjadi sampah yang dapat didaur ulang dan sampah residu untuk pengelolaan lebih lanjut.</p>
          </div>
          <div className="sort-note-truck">🚛</div>
        </div>
      </div>
    </section>
  )
}
