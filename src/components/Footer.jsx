import logo from '../assets/logo-white.svg'

function Footer() {
  return (
    <footer className='footer'>
      <img src={logo} alt="Logo de la société Kasa" className='img footer__logo' />
      <h2 className='footer__h2 white'>© 2020 Kasa. All rights reserved</h2>
    </footer>
  )
}

export default Footer
