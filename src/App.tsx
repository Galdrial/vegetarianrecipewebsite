import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// ...existing code...
import Footer from './components/Footer'
import GridRandomCards from './components/GridRandomCards'
import GridResultsCards from './components/GridResultsCards'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import OurMission from './components/OurMission'
import RecepiDetail from './components/RecepiDetail'
import ScrollToTop from './components/ScrollToTop'

function App() {
  // Funzione base senza Redux e hooks non usati

  return (
    <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <GridRandomCards />
            </>
          } />
          <Route path="/search" element={<GridResultsCards />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/detail/:id" element={<RecepiDetail />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
