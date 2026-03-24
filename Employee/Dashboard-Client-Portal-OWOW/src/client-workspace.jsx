import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClientCollection from './ClientCollection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ClientCollection />
  </StrictMode>
)
