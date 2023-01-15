import propTypes from 'prop-types'
// import '../sass/main.scss'

function Banner(props) {
  const classes = props.about ?
    ["section banner banner__about", " h1 white banner__about__h1"]
    : ["section banner banner__home", "h1 white banner__home__h1"]

  return (
    <section className={classes[0]}>
      <h1 className={classes[1]}>Chez vous, <br className='banner__sm' /> partout et ailleurs</h1>
    </section>
  )
}

Banner.propTypes = {
  about: propTypes.bool.isRequired
}

export default Banner
