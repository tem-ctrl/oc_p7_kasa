import { Banner, Gallery } from '../components'

function Home() {
  // Set Page title
  const title = document.querySelector('title')
  title.textContent = 'Kasa - Accueil'

  return (
    <>
      <Banner />
      <Gallery />
    </>
  )
}

export default Home
