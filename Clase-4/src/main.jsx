import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* // App se lo conoce como componente

    // Todo lo que comienze y se cierre con <></> y comienze con Mayuscula
    // Se lo conoce como componente */}
    <App />
  </StrictMode>,
)
