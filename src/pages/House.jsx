import { createContext, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Error from '../pages/Error'
import { AppContext } from './Home'
import HouseBody from '../components/HouseBody'

// Context to provide to its children
export const houseContext = createContext(null)

function House() {

  // Extract house id from url  
  const { houseId } = useParams()

  // Find house by id from AppContext
  const house = useContext(AppContext).find((elt) => elt.id === houseId)

  // Return Error Page if house don't exist
  if (!house) {
    return (
      <Error />
    )
  } else {
    // Set the page title
    const title = document.querySelector('title')
    title.textContent = `Kasa - ${house.title}`

    return (
      // Provide house data to its children through context
      <houseContext.Provider value={house}>
        <Carousel />
        <HouseBody />
      </houseContext.Provider>
    )
  }
}

export default House
