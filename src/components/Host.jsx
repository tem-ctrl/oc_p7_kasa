import { useContext } from 'react'
import { houseContext } from '../pages/House'

function Host() {
  // Get host information from house data, provided by houseContext
  const host = useContext(houseContext).host
  return (
    <div className='host'>
      <p className='host__name'>{host.name}</p>
      <img className='host__img' src={host.picture} alt={host.name} />
    </div>
  )
}

export default Host
