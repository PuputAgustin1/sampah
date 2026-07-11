export default function About() {
  const galleryItems = [
    {
      img: '/tps-desa-barang.png',
      label: 'TPS Desa Barang',
    },
    {
      img: '/mesin-press.png',
      label: 'Mesin Press Plastik',
    },
    {
      img: '/budidaya-maggot.png',
      label: 'Budidaya Maggot',
    },
    {
      img: '/paving-plastik.png',
      label: 'Paving dari Sampah Plastik',
    },
  ]

  return (
    <section className="about" id="tentang">
      <div className="container">
        <div className="about-inner">
          <div className="about-content">
            <h2>Tentang SIPILAH</h2>
            <p>
              SIPILAH adalah media informasi digital yang dibuat
              untuk membantu masyarakat Desa Barang memahami
              cara pengelolaan sampah dengan benar.
            </p>
            <p>
              Melalui SIPILAH, kita bisa belajar bersama mulai dari
              memilah sampah di rumah hingga mengolahnya
              menjadi sesuatu yang bermanfaat.
            </p>
            <button className="about-btn">
              Selengkapnya →
            </button>
          </div>

          <div className="about-gallery">
            {galleryItems.map((item, index) => (
              <div key={index} className="about-gallery-item">
                <img src={item.img} alt={item.label} />
                <div className="about-gallery-item-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
