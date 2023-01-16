import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'
import { aboutData } from '../data/aboutData'

function About() {
  const title = document.querySelector('title')
  title.textContent = 'Kasa - A Propos'
  return (
    <>
      <Banner about={true} />
      <div className='about'>
        {
          aboutData.map((elt) => (
            <Dropdown title={elt.title} body={elt.body} key={elt.title} className='about__drop' />
          ))
        }
      </div>
    </>
  )
}

export default About
