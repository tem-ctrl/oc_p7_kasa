import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
import MyRoutes from './Routes'
import { houses } from './data/logements1'
import './sass/main.scss'

const root = createRoot(document.getElementById('root'))

// Create context to share houses data with app's children
export const AppContext = createContext(houses)

// Render app routes inside the div element with id "root"
root.render(
  <AppContext.Provider value={houses}>
    <StrictMode>
      {
        MyRoutes
      }
    </StrictMode>
  </AppContext.Provider>
)
