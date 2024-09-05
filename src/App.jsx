import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ThemeToggleButton from './components/ThemeToggleBtn'

function App() {

  return (
    <>
      <ThemeToggleButton />
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
