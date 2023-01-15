function Host(props) {
  return (
    <div className='host'>
      <p className='host__name'>{props.hostName}</p>
      <img className='host__img' src={props.hostPicture} alt={props.hostName} />
    </div>
  )
}

export default Host
