import { useState, useRef, useEffect, useMemo } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const TrashIcon = ({ color = 'currentColor', size = 72, shake = false, glow = false }) => (
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
      filter: (shake || glow) ? `drop-shadow(0 0 10px ${color}bb)` : 'none',
      transform: shake ? 'scale(1.15)' : 'scale(1)',
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
  // Organik (15)
  { id: 0,  icon: '🍛', label: 'Sisa Makanan',   type: 'organik' },
  { id: 1,  icon: '🍂', label: 'Daun',           type: 'organik' },
  { id: 2,  icon: '🍎', label: 'Buah',           type: 'organik' },
  { id: 3,  icon: '🥬', label: 'Sayur',          type: 'organik' },
  { id: 4,  icon: '☕', label: 'Ampas Kopi',     type: 'organik' },
  { id: 5,  icon: '🪵', label: 'Ranting',        type: 'organik' },
  { id: 6,  icon: '🌾', label: 'Jerami',         type: 'organik' },
  { id: 7,  icon: '🌿', label: 'Rumput',         type: 'organik' },
  { id: 8,  icon: '🥚', label: 'Cangkang Telur', type: 'organik' },
  { id: 9,  icon: '🌸', label: 'Bunga',          type: 'organik' },
  { id: 10, icon: '🍃', label: 'Kompos',         type: 'organik' },
  { id: 11, icon: '🫖', label: 'Ampas Teh',      type: 'organik' },
  { id: 12, icon: '🥜', label: 'Kulit Kacang',   type: 'organik' },
  { id: 13, icon: '🌽', label: 'Tongkol Jagung', type: 'organik' },
  { id: 14, icon: '🪴', label: 'Serbuk Kayu',    type: 'organik' },
  // Anorganik (20)
  { id: 15, icon: '🧴', label: 'Botol Plastik',  type: 'anorganik' },
  { id: 16, icon: '🥫', label: 'Kaleng',         type: 'anorganik' },
  { id: 17, icon: '📄', label: 'Kertas',         type: 'anorganik' },
  { id: 18, icon: '📦', label: 'Kardus',         type: 'anorganik' },
  { id: 19, icon: '🛍️', label: 'Plastik',        type: 'anorganik' },
  { id: 20, icon: '🫙', label: 'Kaca',           type: 'anorganik' },
  { id: 21, icon: '🩲', label: 'Pampers',        type: 'anorganik' },
  { id: 22, icon: '🩸', label: 'Pembalut',       type: 'anorganik' },
  { id: 23, icon: '😷', label: 'Masker',         type: 'anorganik' },
  { id: 24, icon: '🧻', label: 'Tisu Bekas',     type: 'anorganik' },
  { id: 25, icon: '🥡', label: 'Styrofoam',      type: 'anorganik' },
  { id: 26, icon: '📦', label: 'Kemasan',        type: 'anorganik' },
  { id: 27, icon: '💡', label: 'Lampu Bekas',    type: 'anorganik' },
  { id: 28, icon: '🔋', label: 'Baterai',        type: 'anorganik' },
  { id: 29, icon: '👟', label: 'Sandal Bekas',   type: 'anorganik' },
  { id: 30, icon: '🧃', label: 'Kotak Minuman',  type: 'anorganik' },
  { id: 31, icon: '🍶', label: 'Botol Kaca',     type: 'anorganik' },
  { id: 32, icon: '🔩', label: 'Logam',          type: 'anorganik' },
  { id: 33, icon: '🧷', label: 'Kawat',          type: 'anorganik' },
  { id: 34, icon: '📰', label: 'Koran',          type: 'anorganik' },
];

// Wrong bin flash state
const WRONG_FLASH_MS = 700;

export default function Categories() {
  const ref = useScrollReveal();

  const shuffledItems = useMemo(() => shuffle(ALL_ITEMS), []);

  const [flyingItems, setFlyingItems] = useState([]);
  const [sortedIds, setSortedIds] = useState(new Set());

  // Score tracking
  const [scoreCorrect, setScoreCorrect] = useState(0);
  const [scoreWrong, setScoreWrong]     = useState(0);

  const [organikBin, setOrganikBin]     = useState([]);
  const [anorganikBin, setAnorganikBin] = useState([]);

  const [organikShake, setOrganikShake]     = useState(false);
  const [anorganikShake, setAnorganikShake] = useState(false);

  // Highlight bins when an item is selected
  const [organikGlow, setOrganikGlow]     = useState(false);
  const [anorganikGlow, setAnorganikGlow] = useState(false);

  // Wrong-bin flash
  const [wrongBin, setWrongBin] = useState(null); // 'organik' | 'anorganik' | null

  // Selected item waiting to be placed
  const [selectedItem, setSelectedItem] = useState(null);

  const organikBinRef   = useRef(null);
  const anorganikBinRef = useRef(null);
  const itemRefs        = useRef({}); // keyed by item.id

  // When user selects an item, highlight bins
  useEffect(() => {
    if (selectedItem) {
      setOrganikGlow(true);
      setAnorganikGlow(true);
    } else {
      setOrganikGlow(false);
      setAnorganikGlow(false);
    }
  }, [selectedItem]);

  const triggerFly = (item, binRef) => {
    const el = itemRefs.current[item.id];
    if (!el || !binRef.current) return;
    const itemRect = el.getBoundingClientRect();
    const binRect  = binRef.current.getBoundingClientRect();

    const flyItem = {
      id: Date.now() + Math.random(),
      icon: item.icon,
      startX: itemRect.left + itemRect.width  / 2 - 22,
      startY: itemRect.top  + itemRect.height / 2 - 22,
      endX:   binRect.left  + binRect.width   / 2 - 22,
      endY:   binRect.top   + binRect.height  / 2 - 22,
    };

    setFlyingItems(prev => [...prev, flyItem]);
    setTimeout(() => {
      setFlyingItems(prev => prev.filter(f => f.id !== flyItem.id));
    }, 620);
  };

  // Commit item into bin (correct placement)
  const commitToOrganik = (item) => {
    triggerFly(item, organikBinRef);
    setSortedIds(prev => new Set([...prev, item.id]));
    setTimeout(() => {
      setOrganikBin(prev => [...prev, item.id]);
      setOrganikShake(true);
      setTimeout(() => setOrganikShake(false), 400);
    }, 520);
  };

  const commitToAnorganik = (item) => {
    triggerFly(item, anorganikBinRef);
    setSortedIds(prev => new Set([...prev, item.id]));
    setTimeout(() => {
      setAnorganikBin(prev => [...prev, item.id]);
      setAnorganikShake(true);
      setTimeout(() => setAnorganikShake(false), 400);
    }, 520);
  };

  // Click on item card: select it
  const handleSelectItem = (item) => {
    if (sortedIds.has(item.id)) return;
    setSelectedItem(prev => (prev && prev.id === item.id ? null : item));
  };

  // Click on a bin
  const handleBinClick = (binType) => {
    if (!selectedItem) return;

    if (selectedItem.type === binType) {
      // Correct!
      setScoreCorrect(prev => prev + 1);
      if (binType === 'organik') commitToOrganik(selectedItem);
      else commitToAnorganik(selectedItem);
      setSelectedItem(null);
    } else {
      // Wrong bin — increment wrong score & flash red
      setScoreWrong(prev => prev + 1);
      setWrongBin(binType);
      setTimeout(() => setWrongBin(null), WRONG_FLASH_MS);
    }
  };

  const handleRestore = (itemId, type) => {
    setSortedIds(prev => {
      const next = new Set(prev);
      next.delete(itemId);
      return next;
    });
    if (type === 'organik') setOrganikBin(prev => prev.filter(id => id !== itemId));
    else setAnorganikBin(prev => prev.filter(id => id !== itemId));
    setScoreCorrect(prev => Math.max(0, prev - 1));
  };

  const handleRestoreAll = () => {
    setSortedIds(new Set());
    setOrganikBin([]);
    setAnorganikBin([]);
    setSelectedItem(null);
    setScoreCorrect(0);
    setScoreWrong(0);
  };

  const totalSorted = sortedIds.size;
  const total       = ALL_ITEMS.length;
  const progress    = Math.round((totalSorted / total) * 100);
  const allDone     = totalSorted === total;

  return (
    <section className="sorting" id="cara-memilah" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">CARA MEMILAH DI RUMAH</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          Pilih sampah lalu klik tempat sampah yang sesuai!
        </p>

        {/* Instruction hint */}
        {selectedItem && (
          <div className="sort-hint-banner">
            <span className="sort-hint-icon">{selectedItem.icon}</span>
            <span className="sort-hint-text">
              <strong>{selectedItem.label}</strong> dipilih — klik tempat sampah yang sesuai!
            </span>
            <button className="sort-hint-cancel" onClick={() => setSelectedItem(null)}>✕</button>
          </div>
        )}

        {/* Single unified card */}
        <div className="sort-unified-card reveal">

          {/* Header progress & Score */}
          <div className="sort-unified-header">
            <div className="sort-progress-info">
              <span className="sort-progress-label">
                {allDone ? '🎉 Semua sampah berhasil dipilah!' : `Sudah dipilah: ${totalSorted} / ${total}`}
              </span>
              
              <div className="sort-score-container">
                <span className="score-badge correct">🎯 Benar: <strong>{scoreCorrect}</strong></span>
                <span className="score-badge wrong">❌ Salah: <strong>{scoreWrong}</strong></span>
                {(totalSorted > 0 || scoreWrong > 0) && (
                  <button className="sort-restore-all-btn" onClick={handleRestoreAll} title="Pulihkan semua">
                    🔄 Reset
                  </button>
                )}
              </div>
            </div>
            <div className="sort-progress-bar-track">
              <div className="sort-progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Trash items area */}
          <div className="sort-items-area">
            {shuffledItems.map(item => {
              const thrown   = sortedIds.has(item.id);
              const isSelected = selectedItem && selectedItem.id === item.id;
              return (
                <button
                  key={item.id}
                  ref={el => { itemRefs.current[item.id] = el; }}
                  className={`sort-item-btn ${thrown ? 'thrown' : ''} ${item.type} ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelectItem(item)}
                  disabled={thrown}
                  title={thrown ? 'Sudah dipilah' : 'Klik untuk memilih'}
                >
                  <div className="sort-item-icon">{item.icon}</div>
                  <span className="sort-item-text">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Bins row */}
          <div className="sort-bins-row">
            {/* Organik bin */}
            <div
              className={[
                'sort-bin-card organik',
                organikShake ? 'bin-shake' : '',
                organikGlow  ? 'bin-glow organik-glow' : '',
                selectedItem ? 'bin-clickable' : '',
                wrongBin === 'organik' ? 'bin-wrong' : '',
              ].join(' ')}
              onClick={() => handleBinClick('organik')}
              role={selectedItem ? 'button' : undefined}
              tabIndex={selectedItem ? 0 : undefined}
              onKeyDown={e => e.key === 'Enter' && handleBinClick('organik')}
              title={selectedItem ? 'Tempatkan ke Organik' : ''}
            >
              <div className="sort-bin-top">
                <div ref={organikBinRef} className="sort-bin-icon-wrap">
                  <TrashIcon color="#42823f" size={64} shake={organikShake} glow={organikGlow} />
                </div>
                <div className="sort-bin-info">
                  <span className="sort-bin-name">🌿 ORGANIK</span>
                  <span className="sort-bin-count">{organikBin.length} item</span>
                </div>
              </div>
              {organikBin.length > 0 && (
                <div className="sort-bin-contents">
                  {organikBin.map(id => {
                    const item = ALL_ITEMS.find(i => i.id === id);
                    return (
                      <button
                        key={id}
                        className="sort-bin-item-chip"
                        onClick={e => { e.stopPropagation(); handleRestore(id, 'organik'); }}
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
            <div
              className={[
                'sort-bin-card anorganik',
                anorganikShake ? 'bin-shake' : '',
                anorganikGlow  ? 'bin-glow anorganik-glow' : '',
                selectedItem   ? 'bin-clickable' : '',
                wrongBin === 'anorganik' ? 'bin-wrong' : '',
              ].join(' ')}
              onClick={() => handleBinClick('anorganik')}
              role={selectedItem ? 'button' : undefined}
              tabIndex={selectedItem ? 0 : undefined}
              onKeyDown={e => e.key === 'Enter' && handleBinClick('anorganik')}
              title={selectedItem ? 'Tempatkan ke Anorganik' : ''}
            >
              <div className="sort-bin-top">
                <div ref={anorganikBinRef} className="sort-bin-icon-wrap">
                  <TrashIcon color="#ef6c00" size={64} shake={anorganikShake} glow={anorganikGlow} />
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
                        onClick={e => { e.stopPropagation(); handleRestore(id, 'anorganik'); }}
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
