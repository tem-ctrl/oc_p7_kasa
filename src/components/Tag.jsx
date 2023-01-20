import propTypes from 'prop-types'

function Tag(props) {
  return (
    <div className="tag">
      <p className="white">{props.name}</p>
    </div>
  )
}

Tag.propTypes = {
  name: propTypes.string.isRequired
}

export default Tag
