import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Questions from './pages/Questions'
import SpecialMessage from './pages/SpecialMessage'

function App() {
  return (
    <Router basename="/romantic-website">
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/special-message" element={<SpecialMessage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
