import './App.css'
import {  Routes, Route } from 'react-router-dom'
// Importing Components
import Header from './components/Header'

// Importing Pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import OurWork from './pages/OurWork'
import Services from './pages/Services'
import Influencers from './pages/Influencers'
import CreatorTag from './pages/CreatorTag'


function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/influencers" element={<Influencers />} />
      <Route path="/creator-tag" element={<CreatorTag />} />
    </Routes>
    </>
  )
}

export default App
