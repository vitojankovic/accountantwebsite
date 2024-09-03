import './App.css'
import NavBar from './components/NavBar'
import LandPage from './components/LandPage'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
