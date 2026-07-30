import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import lilinVideo from '../assets/video/video_lilinaromaterapi.mov'

export default function VideoFaqFeedback() {
  const ref = useScrollReveal()
  const [openFaq, setOpenFaq] = useState(null)

  const videos = [
    { title: 'Pembuatan Lilin Aromaterapi', src: lilinVideo },
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
    <section className="video-section" id="video" ref={ref}>
      <div className="container">
        <div className="video-faq-grid">
          {/* Video Block */}
          <div className="video-block reveal-left">
            <h3>🎬 VIDEO EDUKASI</h3>
            <div className="video-grid">
              {videos.map((video, index) => (
                <div key={index} className={`video-card ${video.src ? 'video-player-card' : ''}`}>
                  {video.src ? (
                    <video
                      className="video-card-player"
                      src={video.src}
                      controls
                      preload="metadata"
                    />
                  ) : (
                    <>
                      <img
                        className="video-card-thumb"
                        src={video.thumb}
                        alt={video.title}
                      />
                      <div className="video-card-play">▶</div>
                    </>
                  )}
                  <div className="video-card-title" style={video.src ? { padding: '12px', textAlign: 'center', width: '100%' } : {}}>{video.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Block */}
          <div className="faq-block reveal reveal-delay-1" id="faq">
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
        </div>
      </div>
    </section>
  )
}
