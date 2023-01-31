import { Banner, Dropdown } from '../components'
import { aboutData } from '../data/aboutData'

function About() {

  // Set page title
  const title = document.querySelector('title')
  title.textContent = 'Kasa - A Propos'

  return (
    <>
      <Banner about={true} />
      <div className='about'>
        {/* Return as much Dropdowns as aboutData length with corresponding information */}
        {
          aboutData.map((elt) => (
            <Dropdown title={elt.title} body={elt.body} key={elt.title} isList={false} className='about__drop' />
          ))
        }
      </div>
    </>
  )
}

export default About
