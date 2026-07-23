import { useState } from 'react'

export default function VideoFaqFeedback() {
  const [openFaq, setOpenFaq] = useState(null)

  const videos = [
    { title: 'Cara Memilah Sampah', thumb: '/tps-desa-barang.jpeg' },
    { title: 'Mesin Press Plastik', thumb: '/mesin-press.png' },
    { title: 'Budidaya Maggot', thumb: '/budidaya-maggot.png' },
  ]

  const faqs = [
    {
      question: 'Kenapa sampah harus dipilah?',
      answer: 'Memilah sampah membantu mengurangi sampah yang masuk ke TPA, memudahkan proses daur ulang, dan menciptakan lingkungan yang lebih bersih dan sehat.',
    },
    {
      question: 'Apa manfaat memilah sampah?',
      answer: 'Manfaat memilah sampah antara lain: mengurangi polusi, menghasilkan kompos dan pupuk dari sampah organik, serta mengurangi volume sampah di TPA.',
    },
    {
      question: 'Apa yang terjadi jika sampah tidak dipilah?',
      answer: 'Sampah yang tidak dipilah akan menumpuk di TPA, mencemari tanah dan air, serta menghasilkan gas metana yang berbahaya bagi lingkungan.',
    },
    {
      question: 'Sampah residu dibuang ke mana?',
      answer: 'Sampah residu dikumpulkan secara terpisah dan dikelola oleh pihak pengelola TPS untuk dikirim ke tempat pemrosesan akhir.',
    },
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="video-section" id="video">
      <div className="container">
        <div className="video-faq-grid">
          {/* Video Block */}
          <div className="video-block">
            <h3>🎬 VIDEO EDUKASI</h3>
            <div className="video-grid">
              {videos.map((video, index) => (
                <div key={index} className="video-card">
                  <img
                    className="video-card-thumb"
                    src={video.thumb}
                    alt={video.title}
                  />
                  <div className="video-card-play">▶</div>
                  <div className="video-card-title">{video.title}</div>
                </div>
              ))}
            </div>
            <button className="video-all-btn">
              Lihat Semua Video →
            </button>
          </div>

          {/* FAQ Block */}
          <div className="faq-block" id="faq">
            <h3>❓ FAQ</h3>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFaq === index ? 'open' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-chevron">▼</span>
                  </button>
                  <div className="faq-answer">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback Block */}
          <div className="feedback-block">
            <h3>📢 SUARA ANDA PENTING!</h3>
            <p className="feedback-text">
              Berikan masukan atau laporkan kendala terkait sampah di desa kita.
            </p>
            <button className="feedback-btn">
              Isi Formulir →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
