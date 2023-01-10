import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Error from './Error'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyRoutes = (
  <Router>
    <Header />
    <Routes>
      <Route exact path='/' element={[<Home />, <Footer />]} />
      <Route exact path='/about' element={[<About />, <Footer />]} />
      <Route path='*' element={<Error />} />
    </Routes>
  </Router>
)

export default MyRoutes
