import { useState } from 'react'
import upArrow from '../assets/arrow-up.png'

function Dropdown(props) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='dropdown light-bg'>
      <div className='dropdown__head' onClick={() => setIsOpen(!isOpen)}>
        <p className='white'>{props.title}</p>
        <img
          src={upArrow}
          alt={isOpen ? "flèche vers le haut" : "flèche vers le bas"}
          className={isOpen ? "dropdown__img" : "dropdown__img dropdown__img__rotated"}
        />
      </div>
      <p className={isOpen ? 'dropdown__body light-bg ' : 'dropdown__body dropdown__body--closed light-bg'}>
        {props.description}
      </p>
    </div>
  )
}


export default Dropdown
