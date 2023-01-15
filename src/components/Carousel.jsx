import { useState } from 'react'
import arrowLeft from '../assets/arrow-left.png'
import arrowRight from '../assets/arrow-right.png'

function Carousel({ props }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxLength = props.pictures.length

  function Scroll(direction) {
    if (direction === 'right') {
      return setCurrentIndex(currentIndex === maxLength - 1 ? 0 : currentIndex + 1)
    } else {
      return setCurrentIndex(currentIndex === 0 ? maxLength - 1 : currentIndex - 1)
    }
  }

  return (
    <div className="carousel light-bg">
      {props.pictures.map((picture, index) => (
        <div className="carousel__item" key={`${props.id}-${index}`}>
          {maxLength > 1 && (
            <div className="carousel__arrows">
              <img
                src={arrowLeft}
                alt='flèche gauche'
                className='carousel__arrow carousel__arrow--left'
                onClick={() => (
                  Scroll('left')
                )}
              />
              <img
                src={arrowRight}
                alt='flèche droite'
                className='carousel__arrow carousel__arrow--right'
                onClick={() => (
                  Scroll('right')
                )}
              />
            </div>
          )}
          {index === currentIndex && (
            <p className="carousel__item__number white">
              {currentIndex + 1}/{maxLength}
            </p>
          )}
          {index === currentIndex && (
            <img
              className={index === currentIndex ? (
                "carousel__img carousel__img__active"
              ) : ("carousel__img")}
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
