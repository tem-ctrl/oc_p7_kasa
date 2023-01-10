import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import banner1 from '../../assets/banner-bg.png'
import banner2 from '../../assets/banner.png'
import banner1Sm from '../../assets/banner-bg-sm.png'
import banner2Sm from '../../assets/banner-sm.png'
import './index.scss'

function Home() {
  const title = document.querySelector('title')
  title.textContent = 'Kasa - Accueil'
  return (
    <main className='main'>
      <Banner
        text={<>Chez vous, <br className='banner__sm' /> partout et ailleurs</>}
        bgImage1={banner1}
        bgImage2={banner2}
        bgImage1Sm={banner1Sm}
        bgImage2Sm={banner2Sm}
      />
      <Gallery />
    </main >
  )
}

export default Home
