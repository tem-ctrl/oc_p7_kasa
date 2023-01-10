import { Link } from 'react-router-dom'
import './index.scss'
// import Tag from '../../components/Tag'

function Error() {
  const title = document.querySelector('title')
  title.textContent = 'Page inexistante'
  return (
    <main className='main error'>
      <h1 className='error__h1'>404</h1>
      <h2 className='error__h2'>Oups! La page que <br className='error__sm' /> vous demandez n'existe pas.</h2>
      <Link exact to='/' className='error__link'>Retourner sur la page d'accueil</Link>
    </main>
  )
}

export default Error
