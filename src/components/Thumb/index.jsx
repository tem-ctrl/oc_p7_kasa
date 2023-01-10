import styled from 'styled-components'

function Thumb(props) {
  const StyledArticle = styled.article`
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${props.image});
  background-size: cover;
  height: 340px;
  width: 340px;
  position: relative;
  & h2 {
    font-size: 18px;
    line-height: 24px;
    width: 50%;
    text-align: left;
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-weight: 400;
  }
`
  return (
    <StyledArticle className="article card" key={props.key}>
      <h2 className="h2 card__title white">{props.title}</h2>
    </StyledArticle>
  )
}

export default Thumb
