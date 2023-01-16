function Host({hostName, hostPicture}) {
  return (
    <div className='host'>
      <p className='host__name'>{hostName}</p>
      <img className='host__img' src={hostPicture} alt={hostName} />
    </div>
  )
}

export default Host
