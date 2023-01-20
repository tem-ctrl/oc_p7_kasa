import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import House from './pages/House'
import ScrollToTop from './utils/ScrollToTop'

const MyRoutes = (
  <BrowserRouter>

    {/* Open each route at the top of the page
       Include header and footer to each page 
       Define different routes */}

    <ScrollToTop>
      <Header />
      <main className='main'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/house/:houseId' element={<House />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </ScrollToTop>
  </BrowserRouter>
)

export default MyRoutes
