import styled from 'styled-components'
import propTypes from 'prop-types'
import './index.scss'
import arrow from '../../assets/arrow-up.png'

function Tag(props) {
  const StyledImg = styled.img`
    rotate: ${props.isOpen ? '0deg' : '180deg'}
  `
  return (
    <div className="tag">
      <p className="white">{props.text}</p>
      <StyledImg src={arrow} alt="flèche d'ouverture/fermeture du dépliant" />
    </div>
  )
}


Tag.propTypes = {
  text: propTypes.string.isRequired,
  isOpen: propTypes.bool
}

Tag.defaultProps = {
  text: 'Tag-name',
  isOpen: false
}


export default Tag
