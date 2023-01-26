import propTypes from 'prop-types'

function Tag(props) {
  return (
    <div className="tag">
      <p className="white">{props.name}</p>
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
