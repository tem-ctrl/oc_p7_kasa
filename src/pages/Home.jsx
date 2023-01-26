import { Fragment } from 'react'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'


function Home() {
  // Set Page title
  const title = document.querySelector('title')
  title.textContent = 'Kasa - Accueil'

  return (
    <Fragment>
      <Banner about={false} />
      <Gallery />
    </Fragment>
  )
}

export default Home
