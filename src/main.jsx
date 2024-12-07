import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RestrictedTextarea from "./RestrictedTextarea.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RestrictedTextarea />
  </StrictMode>,
)
