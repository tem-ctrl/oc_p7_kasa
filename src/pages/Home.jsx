// import { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'


function Home() {
  const title = document.querySelector('title')
  title.textContent = 'Kasa - Accueil'
  return (
    <div>
      <Banner about={false} />
      <Gallery />
    </div>
  )
}

export default Home
