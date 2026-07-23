export default function AromatherapyCandle() {
  const steps = [
    {
      step: 1,
      title: 'Saring Minyak Jelantah',
      desc: 'Saring minyak jelantah menggunakan kain saring atau saringan halus untuk menghilangkan kotoran dan sisa makanan.',
      icon: '🥣',
    },
    {
      step: 2,
      title: 'Rendam dengan Arang Aktif',
      desc: 'Rendam minyak jelantah yang telah disaring menggunakan arang aktif selama 6–12 jam (semakin lama semakin baik) untuk menghilangkan bau, warna, dan kotoran.',
      icon: '🫙',
    },
    {
      step: 3,
      title: 'Saring Kembali Minyak Jelantah',
      desc: 'Saring kembali minyak jelantah untuk memisahkan arang aktif sehingga minyak menjadi lebih jernih dan siap digunakan.',
      icon: '✨',
    },
    {
      step: 4,
      title: 'Panaskan & Tambahkan Bahan Lilin',
      desc: 'Panaskan minyak jelantah dengan api kecil. Tambahkan bahan lilin (parafin/stearid acid/palm wax) sesuai takaran. Aduk hingga bahan lilin mencair sempurna dan tercampur rata.',
      icon: '🫕',
    },
    {
      step: 5,
      title: 'Tambah Essential Oil & Tuang ke Wadah',
      desc: 'Aduk dan tambahkan essential oil atau fragrance oil sesuai selera. Kemudian tuang ke wadah dan pasang sumbu selagi cairan belum memadat. Diamkan hingga mengeras sempurna.',
      icon: '🕯️',
    },
  ]

  const tips = [
    'Gunakan minyak jelantah yang sudah benar-benar dingin sebelum disaring.',
    'Pastikan arang aktif food grade agar aman digunakan.',
    'Gunakan takaran bahan lilin yang tepat agar lilin tidak terlalu keras atau terlalu lembek.',
    'Gunakan wadah yang tahan panas dan bersih.',
    'Simpan lilin di tempat sejuk dan kering.',
  ]

  const measurements = [
    { ingredient: 'Minyak Jelantah', amount: '100 ml' },
    { ingredient: 'Parafin / Stearid Acid / Palm Wax', amount: '80 – 100 gr' },
    { ingredient: 'Essential Oil / Fragrance Oil', amount: '20 – 30 tetes' },
    { ingredient: 'Arang Aktif', amount: '1 – 2 sdm' },
    { ingredient: 'Sumbu Lilin', amount: '1 buah' },
  ]

  const benefits = [
    {
      icon: '🌱',
      text: 'Mengurangi limbah minyak jelantah dan pencemaran lingkungan',
    },
    {
      icon: '💰',
      text: 'Menciptakan produk bernilai ekonomis',
    },
    {
      icon: '🧘',
      text: 'Memberikan efek relaksasi dan aroma yang menenangkan',
    },
    {
      icon: '🕯️',
      text: 'Aman digunakan sebagai pengharum ruangan alami',
    },
  ]

  return (
    <section className="candle-section" id="lilin-aromaterapi">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">
            STEP PEMBUATAN LILIN AROMATERAPI DARI MINYAK JELANTAH
          </h2>
          <p className="section-subtitle">
            Mengubah minyak jelantah menjadi lilin aromaterapi yang bermanfaat, ramah lingkungan, dan bernilai ekonomis.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="candle-steps-container">
          <div className="candle-steps-grid">
            {steps.map((item, index) => (
              <div key={item.step} className="candle-step-card">
                <div className="candle-step-badge">{item.step}</div>
                <div className="candle-step-icon">{item.icon}</div>
                <h3 className="candle-step-title">{item.title}</h3>
                <p className="candle-step-desc">{item.desc}</p>
                {index < steps.length - 1 && <div className="candle-step-arrow">➔</div>}
              </div>
            ))}
          </div>
        </div>

        {/* 3 Columns Info Grid */}
        <div className="candle-info-grid">
          {/* Tips Card */}
          <div className="candle-info-card candle-tips">
            <div className="candle-info-header">
              <span className="candle-info-header-icon">💡</span>
              <h3>TIPS SUKSES</h3>
            </div>
            <ul className="candle-tips-list">
              {tips.map((tip, idx) => (
                <li key={idx}>
                  <span className="check-icon">✔</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measurements Table Card */}
          <div className="candle-info-card candle-measurements">
            <div className="candle-info-header">
              <span className="candle-info-header-icon">📊</span>
              <h3>TAKARAN REKOMENDASI</h3>
            </div>
            <div className="table-responsive">
              <table className="candle-table">
                <thead>
                  <tr>
                    <th>Bahan</th>
                    <th>Perkiraan Takaran</th>
                  </tr>
                </thead>
                <tbody>
                  {measurements.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.ingredient}</td>
                      <td>{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="candle-info-card candle-benefits">
            <div className="candle-info-header">
              <span className="candle-info-header-icon">🌿</span>
              <h3>MANFAAT</h3>
            </div>
            <ul className="candle-benefits-list">
              {benefits.map((b, idx) => (
                <li key={idx}>
                  <div className="benefit-icon-badge">{b.icon}</div>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="candle-banner">
          <span className="banner-leaf">🍃</span>
          <p>Jangan buang minyak jelantah sembarangan, yuk olah menjadi lilin aromaterapi yang bermanfaat!</p>
          <span className="banner-leaf">🍃</span>
        </div>
      </div>
    </section>
  )
}
