import { houses } from '../../data/logements'
import Thumb from '../Thumb'
import './index.scss'

function Gallery() {
  return (
    <div className='gallery light-bg'>
      {houses.map((house) => (
        <Thumb key={`${house.id}`} title={`${house.title}`} image={`${house.cover}`} />
      ))}
    </div>
  )
}

export default Gallery
