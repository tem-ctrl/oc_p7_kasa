import propTypes from 'prop-types'

function Tag({ name }) {
  return (
    <div className="tag">
      <p className="white">{name}</p>
    </div>
  )
}

Tag.propTypes = {
  name: propTypes.string
}

Tag.defaultProps = {
  name: 'Tag name'
}

export default Tag
