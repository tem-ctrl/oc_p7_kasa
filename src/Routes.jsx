import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import House from './pages/House'
import ScrollToTop from './ScrollToTop'

const MyRoutes = (
  <BrowserRouter>
    <ScrollToTop>                    {/* Open each route at the top of the page*/}
      <Header />                     {/* Include header to each page */}
      <main className='main'>
        <Routes>                     {/* Define different routes */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/house/:houseId' element={<House />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      <Footer />                     {/* Include footer to each page */}
    </ScrollToTop>
  </BrowserRouter>
)

export default MyRoutes
