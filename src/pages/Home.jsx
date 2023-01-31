import Banner from '../components/Banner'
import Gallery from '../components/Gallery'


function Home() {
  // Set Page title
  const title = document.querySelector('title')
  title.textContent = 'Kasa - Accueil'

  return (
    <>
      <Banner about={false} />
      <Gallery />
    </>
  )
}

export default Home
