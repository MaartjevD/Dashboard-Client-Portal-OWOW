import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClientWorkspace from './ClientWorkspace.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ClientWorkspace />
  </StrictMode>
)
