import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import AromatherapyCandle from './components/AromatherapyCandle'
import ResiduGuide from './components/ResiduGuide'
import FlowDiagram from './components/FlowDiagram'
import VideoFaqFeedback from './components/VideoFaqFeedback'
import LocationContact from './components/LocationContact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Categories />
      <AromatherapyCandle />
      <ResiduGuide />
      <FlowDiagram />
      <VideoFaqFeedback />
      <LocationContact />
      <Footer />
    </div>
  )
}

export default App
