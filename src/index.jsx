import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
import MyRoutes from './Routes'
import { houses } from './data/logements'
import './sass/main.scss'

const root = createRoot(document.getElementById('root'))

// Create context to share houses data with app's children
export const AppContext = createContext(houses)

// Render app routes inside the div element with id "root"
root.render(
  <StrictMode>
    <AppContext.Provider value={houses}>
      <MyRoutes />
    </AppContext.Provider>
  </StrictMode>
)
