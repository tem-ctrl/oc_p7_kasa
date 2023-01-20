import { Fragment } from 'react'
import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'
import { aboutData } from '../data/aboutData'

function About() {

  // Set page title
  const title = document.querySelector('title')
  title.textContent = 'Kasa - A Propos'

  return (
    <Fragment>
      <Banner about={true} />
      <div className='about'>
        {/* Return as much Dropdowns as aboutData length with corresponding information */}
        {
          aboutData.map((elt) => (
            <Dropdown title={elt.title} body={elt.body} key={elt.title} className='about__drop' />
          ))
        }
      </div>
    </Fragment>
  )
}

export default About
