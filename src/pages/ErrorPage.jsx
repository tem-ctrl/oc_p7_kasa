import { Error } from '../components'

function ErrorPage() {
  // Set page title
  const title = document.querySelector('title')
  title.textContent = 'Page inexistante'

  return (
    <Error />
  )
}

export default ErrorPage
