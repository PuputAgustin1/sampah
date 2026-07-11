export default function Categories() {
  const categories = [
    {
      type: 'organik',
      icon: '🥬',
      title: 'Organik',
      description: 'Sampah sisa makanan, daun, buah, dan sayur.',
      btnText: 'Pelajari',
    },
    {
      type: 'plastik',
      icon: '🧴',
      title: 'Plastik',
      description: 'Botol, gelas, kemasan plastik, dan barang plastik lainnya.',
      btnText: 'Pelajari',
    },
    {
      type: 'residu',
      icon: '🚮',
      title: 'Residu',
      description: 'Pampers, pembalut, tisu kotor, masker, dan lainnya.',
      btnText: 'Pelajari',
    },
    {
      type: 'jadwal',
      icon: '📅',
      title: 'Jadwal',
      description: 'Jadwal pengangkutan dan kegiatan pengelolaan sampah.',
      btnText: 'Lihat Jadwal',
    },
  ]

  return (
    <section className="categories">
      <div className="container">
        <div className="categories-grid">
          {categories.map((cat) => (
            <div key={cat.type} className={`category-card ${cat.type}`}>
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
              <button className="category-btn">
                {cat.btnText} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
