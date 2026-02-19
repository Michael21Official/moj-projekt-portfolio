import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { AppRouter } from './router/AppRouter'
import { initGA } from './analytics/ga4'
import './index.less'

initGA();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
)