import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'
import BillProvider from './context/BillContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BillProvider>
        <App />
      </BillProvider>
    </AuthProvider>
  </React.StrictMode>,
)
