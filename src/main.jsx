// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // ✅ Вот он, главный роутер
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { AdminAuthProvider } from './context/AdminAuthContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <AdminAuthProvider>
          <App />
        </AdminAuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)