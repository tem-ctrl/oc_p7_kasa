import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from './Routes'
import './sass/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Render app routes inside the div element with id "root"
root.render(
  <React.StrictMode>
    {MyRoutes}
  </React.StrictMode>
)
