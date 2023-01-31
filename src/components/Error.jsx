import { Link } from 'react-router-dom'

function Error() {
  // Error page body
  return (
    <div className='main error'>
      <h1 className='error__h1'>404</h1>
      <h2 className='error__h2'>Oups! La page que <br className='error__sm' /> vous demandez n'existe pas.</h2>
      <Link to='/' className='error__link'>Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error
