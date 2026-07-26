import useScrollReveal from '../hooks/useScrollReveal'

export default function FlowDiagram() {
  const ref = useScrollReveal()

  const mainSteps = [
    { icon: '🏠', label: 'Rumah', sub: 'Pilah sejak dari rumah' },
    { icon: '🚛', label: 'TPS Desa', sub: 'Sampah dikumpulkan' },
    { icon: '🔄', label: 'Pemilahan', sub: 'Dipilah berdasarkan jenis' },
  ]

  const branches = [
    {
      type: 'organik',
      label: 'Organik',
      color: 'var(--green-600)',
      bg: 'var(--green-50)',
      border: 'var(--green-200)',
      icon: '🍃',
      outputs: [
        { icon: '🐛', label: 'Budidaya Maggot' },
        { icon: '🌱', label: 'Pupuk Kompos' },
      ],
    },
    {
      type: 'plastik',
      label: 'Plastik',
      color: 'var(--orange-600)',
      bg: 'var(--orange-50)',
      border: 'var(--orange-200)',
      icon: '♻️',
      outputs: [
        { icon: '⚙️', label: 'Mesin Press' },
        { icon: '🧱', label: 'Paving / Daur Ulang' },
      ],
    },
    {
      type: 'residu',
      label: 'Residu',
      color: 'var(--red-600)',
      bg: 'var(--red-50)',
      border: 'var(--red-100)',
      icon: '🗑️',
      outputs: [
        { icon: '📦', label: 'Penyimpanan Khusus' },
        { icon: '🏭', label: 'Pengelolaan Lanjutan' },
      ],
    },
  ]

  return (
    <section className="flow" id="alur" ref={ref}>
      <div className="container">
        <div className="section-title-wrapper reveal">
          <h2 className="section-title">ALUR PENGELOLAAN SAMPAH DESA BARANG</h2>
          <p className="section-subtitle">Dari rumah hingga pengelolaan akhir yang bertanggung jawab</p>
        </div>

        {/* ── Main flow row ── */}
        <div className="fd-main-row reveal reveal-delay-1">
          {mainSteps.map((step, i) => (
            <div key={i} className="fd-main-group">
              <div className="fd-node">
                <div className="fd-node-icon">{step.icon}</div>
                <span className="fd-node-label">{step.label}</span>
                <span className="fd-node-sub">{step.sub}</span>
              </div>
              {i < mainSteps.length - 1 && (
                <div className="fd-arrow-h">→</div>
              )}
            </div>
          ))}
        </div>

        {/* ── Divider line down to branches ── */}
        <div className="fd-connector reveal reveal-delay-2">
          <div className="fd-connector-line" />
          <div className="fd-connector-dots">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* ── Branch cards ── */}
        <div className="fd-branches reveal reveal-delay-3">
          {branches.map((branch) => (
            <div
              key={branch.type}
              className="fd-branch-card"
              style={{
                '--branch-color': branch.color,
                '--branch-bg': branch.bg,
                '--branch-border': branch.border,
              }}
            >
              {/* Branch header */}
              <div className="fd-branch-head">
                <span className="fd-branch-icon">{branch.icon}</span>
                <span className="fd-branch-label">{branch.label}</span>
              </div>

              {/* Output steps */}
              <div className="fd-branch-body">
                {branch.outputs.map((out, j) => (
                  <div key={j} className="fd-output-group">
                    {j > 0 && <div className="fd-output-arrow">→</div>}
                    <div className="fd-output">
                      <span className="fd-output-icon">{out.icon}</span>
                      <span className="fd-output-label">{out.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
