import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, ErrorPage, Home, House } from './pages'
import { Footer, Header } from './components'
import ScrollToTop from './utils/ScrollToTop'

// Open each route at the top of the page
//  Include header and footer to each page 
//  Define different routes 
function MyRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/house/:houseId' element={<House />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default MyRoutes
