import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../sass/main.scss'

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="Logo de la société Kasa" className='img header__logo' />
      <nav className='nav'>
        <Link to='/' className='link nav__link'>Accueil</Link>
        <Link to='/about' className='link nav__link'>A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
