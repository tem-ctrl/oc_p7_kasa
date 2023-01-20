import { useState } from 'react'
import upArrow from '../assets/arrow-up.png'
import propTypes from 'prop-types'

function Dropdown(props) {

  // Set dropdown to be closed by default
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={isOpen ? 'dropdown light-bg ' : 'dropdown white-bg'}>
      <div className='dropdown__head' onClick={() => setIsOpen(!isOpen)}>
        <p className='white'>{props.title}</p>

        {/* Add arrow up/down according to the state of the dropdown */}
        <img src={upArrow} alt={isOpen ? "flèche vers le haut" : "flèche vers le bas"}
          className={isOpen ? "dropdown__img" : "dropdown__img dropdown__img__rotated"} />
      </div>
      {
        // Set dropdown body according to its input (paragraph or list)
        props.title !== 'Équipements' ? (
          <p className={isOpen ? 'dropdown__body light-bg ' : 'dropdown__body dropdown__body--closed'}>
            {props.body}
          </p>
        ) : (
          <ul className={isOpen ? 'dropdown__body light-bg ' : 'dropdown__body dropdown__body--closed'}>
            {props.body.map((elt) => (<li key={elt}>{elt}</li>))}
          </ul>
        )
      }
    </div>
  )
}

Dropdown.propTypes = {
  title: propTypes.string,
  description: propTypes.oneOfType([propTypes.array, propTypes.string])
}

Dropdown.defaultProps = {
  title: 'Description',
  description: "votre description ici..."
}

export default Dropdown
