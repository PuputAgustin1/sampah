import useScrollReveal from '../hooks/useScrollReveal'

export default function ResiduGuide() {
  const ref = useScrollReveal()

  const steps = [
    {
      num: 1,
      title: 'Pisahkan isi kotoran',
      subtitle: '(jika memungkinkan)',
      desc: 'Buang kotoran bayi ke toilet terlebih dahulu.',
      icon: '🚽',
    },
    {
      num: 2,
      title: 'Gulung kembali',
      subtitle: '',
      desc: 'Gulung pampers atau pembalut hingga rapat.',
      icon: '🧻',
    },
    {
      num: 3,
      title: 'Bungkus dengan rapat',
      subtitle: '',
      desc: 'Gunakan plastik bekas atau kantong lain, ikat rapat.',
      icon: '🛍️',
    },
    {
      num: 4,
      title: 'Masukkan ke sampah ANORGANIK',
      subtitle: '',
      desc: 'Masukkan ke tempat sampah ANORGANIK (OREN).',
      icon: '🗑️',
    },
    {
      num: 5,
      title: 'Petugas TPS memilah kembali',
      subtitle: '',
      desc: 'Sampah anorganik akan dipisahkan menjadi plastik, logam/kertas, dan sampah residu.',
      icon: '👷',
    },
  ]

  return (
    <section className="residu" ref={ref}>
      <div className="container">
        <h2 className="section-title residu-title reveal">
          PERHATIAN! CARA MEMBUANG SAMPAH RESIDU DENGAN BENAR
        </h2>
        <p className="section-subtitle residu-subtitle reveal reveal-delay-1">
          Sampah residu seperti pampers, pembalut, masker, tisu kotor tidak dapat didaur ulang.
          Ikuti langkah berikut sebelum memasukkannya ke tempat sampah ANORGANIK.
        </p>

        <div className="residu-steps-container reveal reveal-delay-2">
          <div className="residu-steps">
            {steps.map((step, index) => (
              <div key={step.num} className="residu-step-card">
                {/* Icon badge */}
                <div className="residu-card-icon">{step.icon}</div>

                {/* Number + Title */}
                <div className="residu-card-num">{step.num}</div>
                <h4 className="residu-card-title">
                  {step.title}
                  {step.subtitle && (
                    <span className="residu-card-subtitle"> {step.subtitle}</span>
                  )}
                </h4>

                {/* Description */}
                <p className="residu-card-desc">{step.desc}</p>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="residu-card-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="residu-notices reveal reveal-delay-3">
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

