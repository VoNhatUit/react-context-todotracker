import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// styles
import './index.css'

// context
import AppProvider from './contexts/app-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
