import starColor from '../assets/star-color.png'
import starGrey from '../assets/star-grey.png'

function Rating({ score }) {
  const listStars = [1, 2, 3, 4, 5]
  var newScore = score
  if (score <= 0) {
    newScore = 1
  }
  if (score > 5) {
    newScore = 5
  }
  return (
    <div className="rating">
      {listStars.map((starIndex) =>
        <img
          key={starIndex}
          className="rating__star"
          src={starIndex <= newScore ? starColor : starGrey}
          alt="rating star"
        />
      )}
    </div>
  )
}

export default Rating
