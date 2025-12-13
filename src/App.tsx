// Main application component
// Sets up routing and layout for the entire app

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
    // Sets up the React Router for client-side navigation
    <Router>
      {/* Ensures the page scrolls to top on route change */}
      <ScrollToTop />
       {/* Main navigation bar */}
      <Navbar />
      {/* Main content area with semantic <main> tag for accessibility */}
      <main className="flex-1 flex flex-col" id="main-content">
        <Routes>
          {/* Home route: shows hero section and random recipe cards */}
          <Route path="/" element={
            <>
              <Hero />
              <GridRandomCards />
            </>
          } />
           {/* Search results page */}
          <Route path="/search" element={<GridResultsCards />} />
          {/* Mission statement page */}
          <Route path="/our-mission" element={<OurMission />} />
           {/* Recipe detail page (dynamic route by id) */}
          <Route path="/detail/:id" element={<RecipeDetail />} />
           {/* Fallback for undefined routes (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* Footer is always visible */}
      <Footer />
    </Router>
  )
}

export default App
