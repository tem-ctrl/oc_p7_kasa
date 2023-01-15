import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Error from '../pages/Error'
import { AppContext } from './Home'


function House() {
  const houses = useContext(AppContext)
  const { houseId } = useParams()
  const house = houses.find((elt) => elt.id === houseId)

  return (
    <>{house ? <Carousel props={house} /> : <Error />}</>
  )
}

export default House
