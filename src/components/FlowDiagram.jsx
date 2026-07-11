export default function FlowDiagram() {
  return (
    <section className="flow" id="alur">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">ALUR PENGELOLAAN SAMPAH DESA BARANG</h2>
        </div>

        <div className="flow-diagram">
          {/* Main flow row */}
          <div className="flow-main-row">
            <div className="flow-step">
              <div className="flow-step-icon">🏠</div>
              <span className="flow-step-label">Rumah</span>
              <span className="flow-step-sublabel">Pilah sampah sejak dari rumah</span>
            </div>

            <span className="flow-arrow">→</span>

            <div className="flow-step">
              <div className="flow-step-icon">🚛</div>
              <span className="flow-step-label">TPS Desa</span>
              <span className="flow-step-sublabel">Sampah dikumpulkan di TPS</span>
            </div>

            <span className="flow-arrow">→</span>

            <div className="flow-step">
              <div className="flow-step-icon">🔄</div>
              <span className="flow-step-label">Pemilahan</span>
              <span className="flow-step-sublabel">Dipilah berdasarkan jenisnya</span>
            </div>
          </div>

          {/* Branches */}
          <div className="flow-branches">
            {/* Organik Branch */}
            <div className="flow-branch organik">
              <span className="flow-branch-tag">Organik</span>
              <span className="flow-branch-arrow">→</span>
              <div className="flow-branch-steps">
                <div className="flow-branch-step">
                  <span className="flow-branch-step-icon">🐛</span>
                  <span className="flow-branch-step-text">Maggot</span>
                </div>
                <span className="flow-branch-inner-arrow">→</span>
                <div className="flow-branch-step">
                  <span className="flow-branch-step-icon">🌱</span>
                  <span className="flow-branch-step-text">Pupuk</span>
                </div>
              </div>
            </div>

            {/* Plastik Branch */}
            <div className="flow-branch plastik">
              <span className="flow-branch-tag">Plastik</span>
              <span className="flow-branch-arrow">→</span>
              <div className="flow-branch-steps">
                <div className="flow-branch-step">
                  <span className="flow-branch-step-icon">⚙️</span>
                  <span className="flow-branch-step-text">Mesin Press</span>
                </div>
                <span className="flow-branch-inner-arrow">→</span>
                <div className="flow-branch-step">
                  <span className="flow-branch-step-icon">🧱</span>
                  <span className="flow-branch-step-text">Paving / Daur Ulang</span>
                </div>
              </div>
            </div>

            {/* Residu Branch */}
            <div className="flow-branch residu">
              <span className="flow-branch-tag">Residu</span>
              <span className="flow-branch-arrow">→</span>
              <div className="flow-branch-steps">
                <div className="flow-branch-step">
                  <span className="flow-branch-step-icon">📦</span>
                  <span className="flow-branch-step-text">Penyimpanan Khusus</span>
                </div>
                <span className="flow-branch-inner-arrow">→</span>
                <div className="flow-branch-step">
                  <span className="flow-branch-step-icon">🏭</span>
                  <span className="flow-branch-step-text">Pengelolaan Lanjutan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
