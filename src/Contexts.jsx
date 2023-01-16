import { createContext } from "react"
import { houses } from './data/logements'

export const AppContext = createContext(null)

export const makeHouseContext = (houseId) => {
  const house = houses.find(elt => elt.id === houseId)
  return createContext(house)
}
