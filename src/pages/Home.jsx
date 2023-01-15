import { createContext } from 'react'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import { houses } from '../data/logements'

export const AppContext = createContext(houses)

function Home() {
  const title = document.querySelector('title')
  title.textContent = 'Kasa - Accueil'
  return (
    <div>
      <Banner about={false} />
      <Gallery />
    </div>
  )
}

export default Home
