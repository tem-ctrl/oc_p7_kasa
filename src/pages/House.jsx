import { createContext, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../'
import { Carousel, Error, HouseBody } from '../components'

// Context to provide to its children
export const houseContext = createContext(null)

function House() {
  // Extract house id from url  
  const { houseId } = useParams()

  // Find house by id from AppContext
  const house = useContext(AppContext).find((elt) => elt.id === houseId)

  return (
    house ? (
      // Provide house data to its children
      <houseContext.Provider value={house}>
        <Carousel />
        <HouseBody />
      </houseContext.Provider>
    ) : (
      <Error />
    ))
}

export default House
