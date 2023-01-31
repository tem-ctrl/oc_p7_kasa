import { useState, useContext } from 'react'
import propTypes from 'prop-types'
import arrowLeft from '../assets/arrow-left.png'
import arrowRight from '../assets/arrow-right.png'
import { houseContext } from '../pages/House'

function Carousel() {

  // Set current image index to 0
  const [index, setIndex] = useState(1)

  // Get house data from context
  const pictures = useContext(houseContext).pictures

  // Get the number of pictures for the carousel
  const numPictures = pictures.length

  // Set next index according to the direction
  const scroll = (direction) => (
    direction === 'right'
      ? (setIndex(index === numPictures ? 1 : index + 1))
      : (setIndex(index === 1 ? numPictures : index - 1))
  )

  return (
    <div className="carousel light-bg">
      {numPictures > 1 && (
        <div className="carousel__arrows">
          <img src={arrowLeft} alt='flèche gauche'
            className='carousel__arrow carousel__arrow--left' onClick={() => (scroll('left'))} />
          <img src={arrowRight} alt='flèche droite'
            className='carousel__arrow carousel__arrow--right' onClick={() => (scroll('right'))} />
        </div>
      )}
      <p className="carousel__number white"> {index}/{numPictures}</p>
      <img className="carousel__img" src={pictures[index - 1]} alt="une des photos du logement" />
    </div>
  )
}

Carousel.propTypes = {
  pictures: propTypes.arrayOf(propTypes.string)
}


export default Carousel
