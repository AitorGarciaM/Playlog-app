import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/sass/index.scss'
import App from './App.tsx'
import './i18n/i18n.ts'

import './styles/index.scss';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
