import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClientInputForm from './ClientInputForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ClientInputForm />
  </StrictMode>,
)
