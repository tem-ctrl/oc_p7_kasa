import Banner from '../components/Banner'

function About() {
  const title = document.querySelector('title')
  title.textContent = 'Kasa - A Propos'
  return (
    <>
      <Banner about={true} />
    </>
  )
}

export default About
