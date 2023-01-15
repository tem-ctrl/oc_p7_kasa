// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import { houses } from '../data/logements'


function House() {
  // const { houseId } = useParams()
  // console.log(useParams())
  return (
    <div>
      <Carousel props={houses[10]} />
    </div>
  )

}

export default House
