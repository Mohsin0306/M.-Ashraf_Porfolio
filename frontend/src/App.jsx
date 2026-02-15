import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AwardDetail from './pages/AwardDetail'
import CertificateDetail from './pages/CertificateDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/award/:id" element={<AwardDetail />} />
        <Route path="/certificate/:id" element={<CertificateDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
