import Banner from '../../components/Banner'
import about1 from '../../assets/banner-bg.png'
import about2 from '../../assets/about.png'
import about1Sm from '../../assets/about-bg-sm.png'
import about2Sm from '../../assets/about-sm.png'

function About() {
  const title = document.querySelector('title')
  title.textContent = 'Kasa - A Propos'
  return (
    <main className='main'>
      <Banner
        text='A Propos'
        bgImage1={about1}
        bgImage2={about2}
        bgImageSm1={about1Sm}
        bgImageSm2={about2Sm}
      />
      {/* <h1>A Propos</h1> */}
    </main>
  )
}

export default About
