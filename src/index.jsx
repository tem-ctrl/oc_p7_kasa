import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from './pages/Routes'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    {
      MyRoutes
    }
  </React.StrictMode>
)
