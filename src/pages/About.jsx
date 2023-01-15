import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'

function About() {
  const title = document.querySelector('title')
  title.textContent = 'Kasa - A Propos'
  return (
    <>
      <Banner about={true} />
      <Dropdown title="Temgoua Tag" description="Bla bla bla" />
    </>
  )
}

export default About
