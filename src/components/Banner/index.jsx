import propTypes from 'prop-types'
import styled from 'styled-components'
import './index.scss'


function Banner(props) {
  // props: text, bgImage1, bgImage2, bgImage1Sm, bgImage2Sm 

  let StyledSection = styled.section`
    background: url(${props.bgImage1}), url(${props.bgImage2}) center no-repeat;
    background-size: cover;
    @media all and (max-width: 767px){
      background: url(${props.bgImage1Sm}), url(${props.bgImage2Sm});
    }
  `

  return (
    <StyledSection className="section banner">
      <h1 className="h1 white banner__h1">{props.text}</h1>
    </StyledSection>
  )
}

Banner.propTypes = {
  // text: propTypes.string,
  bgImage1: propTypes.string.isRequired,
  bgImage2: propTypes.string.isRequired,
  bgImage1Sm: propTypes.string.isRequired,
  bgImage2Sm: propTypes.string.isRequired
}

export default Banner
