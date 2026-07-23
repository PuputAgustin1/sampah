export default function ResiduGuide() {
  const steps = [
    {
      num: 1,
      title: 'Pisahkan isi kotoran (jika memungkinkan)',
      desc: 'Buang kotoran bayi ke toilet terlebih dahulu.',
      icon: '🚽',
    },
    {
      num: 2,
      title: 'Gulung kembali',
      desc: 'Gulung pampers atau pembalut hingga rapat.',
      icon: '🧻',
    },
    {
      num: 3,
      title: 'Bungkus dengan rapat',
      desc: 'Gunakan plastik bekas atau kantong lain, ikat rapat.',
      icon: '🛍️',
    },
    {
      num: 4,
      title: 'Masukkan ke tempat sampah ANORGANIK',
      desc: 'Masukkan ke tempat sampah ANORGANIK (OREN).',
      icon: '🗑️',
    },
    {
      num: 5,
      title: 'Petugas TPS akan memilah kembali',
      desc: 'Sampah anorganik akan dipisahkan menjadi plastik, logam/kertas, dan sampah residu untuk pengelolaan lebih lanjut.',
      icon: '👷',
    },
  ]

  return (
    <section className="residu">
      <div className="container">
        <h2 className="section-title residu-title">PERHATIAN! CARA MEMBUANG SAMPAH RESIDU DENGAN BENAR</h2>
        <p className="section-subtitle" style={{ color: 'var(--red-600)' }}>
          Sampah residu seperti pampers, pembalut, masker, tisu kotor tidak dapat didaur ulang.<br/>
          Ikuti langkah berikut sebelum memasukkannya ke tempat sampah ANORGANIK.
        </p>

        <div className="residu-steps-container">
          <div className="residu-steps">
            {steps.map((step) => (
              <div key={step.num} className="residu-step">
                <div className="residu-step-header">
                  <div className="step-num">{step.num}</div>
                  <h4>{step.title}</h4>
                </div>
                <p>{step.desc}</p>
                <div className="residu-step-img">{step.icon}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="residu-notices">
          <div className="residu-notice wash">
            <div className="notice-icon">🧼</div>
            <div className="notice-text">
              <h5>Cuci tangan setelah membuang sampah residu</h5>
              <p>Cuci tangan menggunakan sabun dan air mengalir agar tetap bersih dan sehat.</p>
            </div>
          </div>
          
          <div className="residu-notice">
            <div className="notice-icon">❌</div>
            <div className="notice-text">
              <h5>Jangan lakukan ini!</h5>
              <ul className="notice-list">
                <li>Jangan membakar pampers atau pembalut</li>
                <li>Jangan membuang ke sungai atau selokan</li>
                <li>Jangan membuang pampers ke toilet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
