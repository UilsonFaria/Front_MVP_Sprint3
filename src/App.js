import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './pages/Inicio'
import Cadastro from './pages/Cadastro'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
    </div>
  )
}

