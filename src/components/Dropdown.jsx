import { useState } from 'react'
import Tag from './Tag'

function Dropdown(props) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Tag title={props.title} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <p className='light-bg'>{props.description}</p>
    </div>
  )
}


export default Dropdown
