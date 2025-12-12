import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import GridRandomCards from './components/GridRandomCards'
import GridResultsCards from './components/GridResultsCards'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import NotFound from './components/NotFound'
import OurMission from './components/OurMission'
import RecipeDetail from './components/RecepiDetail'
import ScrollToTop from './components/ScrollToTop'

function App() {
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
          <Route path="/detail/:id" element={<RecipeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
