import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactRouting from './react-routing.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactRouting />
  </StrictMode>,
)
