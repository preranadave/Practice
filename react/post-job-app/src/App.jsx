import { useState } from 'react'
import './App.css'
import './assets/css/CTADesign.css'
import './assets/css/footer.css'
import Header from './components/header/header'
import HeroBanner from './components/hero/HeroBanner'
import FasterImage from './components/heading-image/FasterImage'
import USPSection from './components/usp/USPSection'
import AIToolsCTA from './components/cta/AIToolsCTA'
import ResumeDesignCTA from './components/cta/ResumeDesignCTA'
import Footer from './components/footer/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroBanner />
      <FasterImage />
      <USPSection />
      <AIToolsCTA></AIToolsCTA>
      <ResumeDesignCTA></ResumeDesignCTA>
      <Footer></Footer>
    </>
  )
}

export default App
