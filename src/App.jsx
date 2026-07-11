import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import About from './components/About'
import WasteSorting from './components/WasteSorting'
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
      <About />
      <WasteSorting />
      <FlowDiagram />
      <VideoFaqFeedback />
      <LocationContact />
      <Footer />
    </div>
  )
}

export default App
