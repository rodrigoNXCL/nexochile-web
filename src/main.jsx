import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Privacidad from './pages/Privacidad' // Importa tu nueva página
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacidad" element={<Privacidad />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
