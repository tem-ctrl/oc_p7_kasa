import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../pages/Home'
import Card from './Card'

function Gallery() {

  // Get array of houses data from context
  const houses = useContext(AppContext)

  return (
    // Create one card per houses data entry
    <div className='gallery'>
      {houses.map((house) => (
        <Link className='gallery__link' key={`${house.id}`} to={`/house/${house.id}`}>
          <Card title={`${house.title}`} image={`${house.cover}`} />
        </Link>
      ))}
    </div>
  )
}

export default Gallery
