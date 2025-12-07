import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Main from './components/Grid'
import OurMission from './components/OurMission'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Main />
            </>
          } />
          <Route path="/our-mission" element={<OurMission />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
