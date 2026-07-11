export default function WasteSorting() {
  const sortingData = [
    {
      type: 'organik',
      title: 'Sampah Organik',
      icon: '🥬',
      items: ['Sisa makanan', 'Daun', 'Buah', 'Sayur'],
      instruction: 'Masukkan ke tempat sampah hijau',
      binColor: '🟢',
    },
    {
      type: 'plastik',
      title: 'Sampah Plastik',
      icon: '🧴',
      items: ['Botol plastik', 'Gelas plastik', 'Kemasan plastik', 'Kresek, dll'],
      instruction: 'Masukkan ke tempat sampah kuning',
      binColor: '🟡',
    },
    {
      type: 'residu',
      title: 'Sampah Residu',
      icon: '🚮',
      items: ['Pampers', 'Pembalut', 'Tisu kotor', 'Masker, dll'],
      instruction: 'Masukkan ke tempat sampah merah',
      binColor: '🔴',
    },
  ]

  return (
    <section className="sorting" id="cara-memilah">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">CARA MEMILAH SAMPAH</h2>
        </div>

        <div className="sorting-grid">
          {sortingData.map((item) => (
            <div key={item.type} className={`sorting-card ${item.type}`}>
              <div className="sorting-card-header">
                <div className="sorting-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>

              <ul>
                {item.items.map((listItem, idx) => (
                  <li key={idx}>{listItem}</li>
                ))}
              </ul>

              <div className="sorting-card-instruction">
                {item.binColor} {item.instruction}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
