import { Fragment, useContext } from 'react'
import { houseContext } from '../pages/House'
import Dropdown from './Dropdown'
import Host from './Host'
import Rating from './Rating'
import Tag from './Tag'

function HouseBody() {
  // Get house data from context
  const house = useContext(houseContext)

  return (
    // Display this data on House page
    <Fragment>
      <section className="house">
        <div className="house__head">
          <h1 className="house__title">{house.title}</h1>
          <h2 className="house__location">{house.location}</h2>
          <div className="house__tags">
            {house.tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        </div>
        <div className="house__host">
          <Host />
          <Rating />
        </div>
      </section>

      <div className='house__desc'>
        <Dropdown title="Description" body={house.description} isList={false} />
        <Dropdown title="Équipements" body={house.equipments} isList={true} />
      </div>
    </Fragment>
  )
}

export default HouseBody
