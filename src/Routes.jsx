import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import House from './pages/House'

const MyRoutes = (
  <Router>
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
  </Router>
)

export default MyRoutes