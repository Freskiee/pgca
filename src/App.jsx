import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PenalPage from './pages/PenalPage'
import FiscalPage from './pages/FiscalPage'
import CorporativoPage from './pages/CorporativoPage'
import ContabilidadPage from './pages/ContabilidadPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/derecho-penal" element={<PenalPage />} />
        <Route path="/derecho-fiscal" element={<FiscalPage />} />
        <Route path="/derecho-corporativo" element={<CorporativoPage />} />
        <Route path="/contabilidad" element={<ContabilidadPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App