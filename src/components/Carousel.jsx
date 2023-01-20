import { useState, useContext } from 'react'
import arrowLeft from '../assets/arrow-left.png'
import arrowRight from '../assets/arrow-right.png'
import { houseContext } from '../pages/House'

function Carousel() {

  // Set current image index to 0
  const [currentIndex, setCurrentIndex] = useState(0)

  // Get house data from context
  const house = useContext(houseContext)

  // Get the number of pictures for the carousel
  const maxLength = house.pictures.length

  // Set next index according to the direction chosed by the user
  function Scroll(direction) {
    if (direction === 'right') {
      return setCurrentIndex(currentIndex === maxLength - 1 ? 0 : currentIndex + 1)
    } else {
      return setCurrentIndex(currentIndex === 0 ? maxLength - 1 : currentIndex - 1)
    }
  }

  return (
    <div className="carousel light-bg">
      {house.pictures.map((picture, index) => (
        <div className="carousel__item" key={`${house.id}-${index}`}>

          {/* Add scroll arrows if there's more than one picture */}
          {maxLength > 1 && (
            <div className="carousel__arrows">
              <img src={arrowLeft} alt='flèche gauche'
                className='carousel__arrow carousel__arrow--left' onClick={() => (Scroll('left'))} />
              <img src={arrowRight} alt='flèche droite'
                className='carousel__arrow carousel__arrow--right' onClick={() => (Scroll('right'))} />
            </div>
          )}
          {/* Add picture number over total number of pictures */}
          {index === currentIndex && (
            <p className="carousel__item__number white">
              {currentIndex + 1}/{maxLength}
            </p>
          )}
          {/* Add image and set classes according to its index */}
          {index === currentIndex && (
            <img className={index === currentIndex ? ("carousel__img carousel__img__active") : ("carousel__img")}
              src={picture}
              alt="Une des photos de l'appartement"
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default Carousel
