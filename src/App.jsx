import './App.css'
import {  Routes, Route } from 'react-router-dom'
// Importing Components
import Header from './components/Header'

// Importing Pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import OurWork from './pages/OurWork'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/our-work" element={<OurWork />} />
    </Routes>
    </>
  )
}

export default App
