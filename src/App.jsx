import Navbar from './components/Navbar'
import About from './components/About'
import FeatureSection from './components/FeatureSection'
import History from './components/History'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Pages/Signup'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <FeatureSection />
              <Pricing />
              <History />
              <Contact />
            </>
          }
        />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App