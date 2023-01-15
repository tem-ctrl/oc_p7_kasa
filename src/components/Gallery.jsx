import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../pages/Home'
import Card from './Card'

function Gallery() {
  const houses = useContext(AppContext)

  return (
    <AppContext.Provider value={houses}>
      <div className='gallery'>
        {houses.map((house) => (
          <Link className='gallery__link' key={`${house.id}`} to={`/house/${house.id}`}>
            <Card title={`${house.title}`} image={`${house.cover}`} />
          </Link>
        ))}
      </div>
    </AppContext.Provider>
  )
}

export default Gallery
