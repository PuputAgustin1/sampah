import { useState, useRef, useEffect, useMemo } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const TrashIcon = ({ color = 'currentColor', size = 72, shake = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color + '22'}
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transition: 'all 0.2s',
      filter: shake ? `drop-shadow(0 0 8px ${color}88)` : 'none',
      transform: shake ? 'scale(1.12)' : 'scale(1)',
    }}
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const FlyingItem = ({ item }) => {
  const [pos, setPos] = useState({ left: item.startX, top: item.startY, opacity: 1, transform: 'scale(1) rotate(0deg)' });

  useEffect(() => {
    const t = setTimeout(() => {
      setPos({ left: item.endX, top: item.endY, opacity: 0, transform: 'scale(0.15) rotate(360deg)' });
    }, 30);
    return () => clearTimeout(t);
  }, [item]);

  return (
    <div style={{
      position: 'fixed',
      left: pos.left,
      top: pos.top,
      opacity: pos.opacity,
      transform: pos.transform,
      transition: 'all 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 9999,
      pointerEvents: 'none',
      fontSize: '1.4rem',
      width: 44,
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white',
      borderRadius: '50%',
      boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
    }}>
      {item.icon}
    </div>
  );
};

// Fisher-Yates shuffle
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ALL_ITEMS = [
  { id: 0, icon: '🍛', label: 'Sisa Makanan', type: 'organik' },
  { id: 1, icon: '🍂', label: 'Daun', type: 'organik' },
  { id: 2, icon: '🍎', label: 'Buah', type: 'organik' },
  { id: 3, icon: '🥬', label: 'Sayur', type: 'organik' },
  { id: 4, icon: '☕', label: 'Ampas Kopi', type: 'organik' },
  { id: 5, icon: '🪵', label: 'Ranting', type: 'organik' },
  { id: 6, icon: '🧴', label: 'Botol Plastik', type: 'anorganik' },
  { id: 7, icon: '🥫', label: 'Kaleng', type: 'anorganik' },
  { id: 8, icon: '📄', label: 'Kertas', type: 'anorganik' },
  { id: 9, icon: '📦', label: 'Kardus', type: 'anorganik' },
  { id: 10, icon: '🛍️', label: 'Plastik', type: 'anorganik' },
  { id: 11, icon: '🫙', label: 'Kaca', type: 'anorganik' },
  { id: 12, icon: '🩲', label: 'Pampers', type: 'anorganik' },
  { id: 13, icon: '🩸', label: 'Pembalut', type: 'anorganik' },
  { id: 14, icon: '😷', label: 'Masker', type: 'anorganik' },
  { id: 15, icon: '🧻', label: 'Tisu Bekas', type: 'anorganik' },
  { id: 16, icon: '🥡', label: 'Styrofoam', type: 'anorganik' },
  { id: 17, icon: '📦', label: 'Kemasan', type: 'anorganik' },
];

export default function Categories() {
  const ref = useScrollReveal();

  const shuffledItems = useMemo(() => shuffle(ALL_ITEMS), []);

  const [flyingItems, setFlyingItems] = useState([]);
  const [sortedIds, setSortedIds] = useState(new Set()); // item ids sorted into bins

  // Per-bin tracking
  const [organikBin, setOrganikBin] = useState([]); // array of item ids
  const [anorganikBin, setAnorganikBin] = useState([]);

  // Shake feedback when item lands
  const [organikShake, setOrganikShake] = useState(false);
  const [anorganikShake, setAnorganikShake] = useState(false);

  const organikBinRef = useRef(null);
  const anorganikBinRef = useRef(null);

  const handleSort = (item, e) => {
    if (sortedIds.has(item.id)) return;

    const el = e.currentTarget;
    const itemRect = el.getBoundingClientRect();
    const binRef = item.type === 'organik' ? organikBinRef.current : anorganikBinRef.current;
    if (!binRef) return;
    const binRect = binRef.getBoundingClientRect();

    const flyItem = {
      id: Date.now() + Math.random(),
      icon: item.icon,
      startX: itemRect.left + itemRect.width / 2 - 22,
      startY: itemRect.top + itemRect.height / 2 - 22,
      endX: binRect.left + binRect.width / 2 - 22,
      endY: binRect.top + binRect.height / 2 - 22,
    };

    setSortedIds(prev => new Set([...prev, item.id]));
    setFlyingItems(prev => [...prev, flyItem]);

    // Animate bin
    setTimeout(() => {
      if (item.type === 'organik') {
        setOrganikBin(prev => [...prev, item.id]);
        setOrganikShake(true);
        setTimeout(() => setOrganikShake(false), 400);
      } else {
        setAnorganikBin(prev => [...prev, item.id]);
        setAnorganikShake(true);
        setTimeout(() => setAnorganikShake(false), 400);
      }
    }, 520);

    setTimeout(() => {
      setFlyingItems(prev => prev.filter(f => f.id !== flyItem.id));
    }, 620);
  };

  const handleRestore = (itemId, type) => {
    setSortedIds(prev => {
      const next = new Set(prev);
      next.delete(itemId);
      return next;
    });
    if (type === 'organik') {
      setOrganikBin(prev => prev.filter(id => id !== itemId));
    } else {
      setAnorganikBin(prev => prev.filter(id => id !== itemId));
    }
  };

  const handleRestoreAll = () => {
    setSortedIds(new Set());
    setOrganikBin([]);
    setAnorganikBin([]);
  };

  const totalSorted = sortedIds.size;
  const total = ALL_ITEMS.length;
  const progress = Math.round((totalSorted / total) * 100);
  const allDone = totalSorted === total;

  return (
    <section className="sorting" id="cara-memilah" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">CARA MEMILAH DI RUMAH</h2>
        <p className="section-subtitle reveal reveal-delay-1">Klik setiap sampah untuk memilahnya ke tempat yang benar!</p>

        {/* Single unified card */}
        <div className="sort-unified-card reveal">

          {/* Header progress */}
          <div className="sort-unified-header">
            <div className="sort-progress-info">
              <span className="sort-progress-label">
                {allDone ? '🎉 Semua sampah berhasil dipilah!' : `Sudah dipilah: ${totalSorted} / ${total}`}
              </span>
              {totalSorted > 0 && (
                <button className="sort-restore-all-btn" onClick={handleRestoreAll} title="Pulihkan semua">
                  🔄 Reset
                </button>
              )}
            </div>
            <div className="sort-progress-bar-track">
              <div className="sort-progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Trash items area */}
          <div className="sort-items-area">
            {shuffledItems.map(item => {
              const thrown = sortedIds.has(item.id);
              return (
                <button
                  key={item.id}
                  className={`sort-item-btn ${thrown ? 'thrown' : ''} ${item.type}`}
                  onClick={(e) => handleSort(item, e)}
                  disabled={thrown}
                  title={thrown ? 'Sudah dipilah' : `Klik untuk memilah ke ${item.type === 'organik' ? 'tempat hijau' : 'tempat oren'}`}
                >
                  <div className="sort-item-icon">{item.icon}</div>
                  <span className="sort-item-text">{item.label}</span>
                  {!thrown && (
                    <span className={`sort-item-badge ${item.type}`}>
                      {item.type === 'organik' ? '🌿' : '♻️'}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Bins row */}
          <div className="sort-bins-row">
            {/* Organik bin */}
            <div className={`sort-bin-card organik ${organikShake ? 'bin-shake' : ''}`}>
              <div className="sort-bin-top">
                <div ref={organikBinRef} className="sort-bin-icon-wrap">
                  <TrashIcon color="#42823f" size={64} shake={organikShake} />
                </div>
                <div className="sort-bin-info">
                  <span className="sort-bin-name">🌿 ORGANIK</span>
                  <span className="sort-bin-count">{organikBin.length} item</span>
                </div>
              </div>
              {/* Items in bin */}
              {organikBin.length > 0 && (
                <div className="sort-bin-contents">
                  {organikBin.map(id => {
                    const item = ALL_ITEMS.find(i => i.id === id);
                    return (
                      <button
                        key={id}
                        className="sort-bin-item-chip"
                        onClick={() => handleRestore(id, 'organik')}
                        title="Klik untuk pulihkan"
                      >
                        {item.icon} <span>{item.label}</span> <span className="chip-undo">↩</span>
                      </button>
                    );
                  })}
                </div>
              )}
              {organikBin.length === 0 && (
                <p className="sort-bin-empty">Belum ada sampah organik</p>
              )}
            </div>

            {/* Anorganik bin */}
            <div className={`sort-bin-card anorganik ${anorganikShake ? 'bin-shake' : ''}`}>
              <div className="sort-bin-top">
                <div ref={anorganikBinRef} className="sort-bin-icon-wrap">
                  <TrashIcon color="#ef6c00" size={64} shake={anorganikShake} />
                </div>
                <div className="sort-bin-info">
                  <span className="sort-bin-name">♻️ ANORGANIK</span>
                  <span className="sort-bin-count">{anorganikBin.length} item</span>
                </div>
              </div>
              {anorganikBin.length > 0 && (
                <div className="sort-bin-contents">
                  {anorganikBin.map(id => {
                    const item = ALL_ITEMS.find(i => i.id === id);
                    return (
                      <button
                        key={id}
                        className="sort-bin-item-chip"
                        onClick={() => handleRestore(id, 'anorganik')}
                        title="Klik untuk pulihkan"
                      >
                        {item.icon} <span>{item.label}</span> <span className="chip-undo">↩</span>
                      </button>
                    );
                  })}
                </div>
              )}
              {anorganikBin.length === 0 && (
                <p className="sort-bin-empty">Belum ada sampah anorganik</p>
              )}
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

      {flyingItems.map(item => <FlyingItem key={item.id} item={item} />)}
    </section>
  );
}
