import { useContext } from 'react'
import { houseContext } from '../pages/House'
import starColor from '../assets/star-color.png'
import starGrey from '../assets/star-grey.png'


function Rating() {

  // Get house rating from context
  const score = parseInt(useContext(houseContext).rating)
  const listStars = [1, 2, 3, 4, 5]
  var newScore = score

  // Make sure rating is neither less than 0 nor greater than 5 
  if (score <= 0) {
    newScore = 1
  }
  if (score > 5) {
    newScore = 5
  }
  return (
    // Display as much coloured stars as rating and complete with grey stars 
    <div className="rating">
      {listStars.map((starIndex) =>
        <img key={starIndex} className="rating__star" alt="rating star"
          src={starIndex <= newScore ? starColor : starGrey} />
      )}
    </div>
  )
}

export default Rating
