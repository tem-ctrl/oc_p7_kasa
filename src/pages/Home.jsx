import { createContext } from 'react'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import { houses } from '../data/logements'

// Create context to share houses data with app's children
export const AppContext = createContext(houses)

function Home() {
  // Set Page title
  const title = document.querySelector('title')
  title.textContent = 'Kasa - Accueil'

  return (
    <AppContext.Provider value={houses}>
      <Banner about={false} />
      <Gallery />
    </AppContext.Provider>
  )
}

export default Home
