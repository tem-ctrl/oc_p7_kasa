import { useContext, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Error from '../pages/Error'
import { AppContext } from './Home'
import Tag from '../components/Tag'
import Host from '../components/Host'
import Dropdown from '../components/Dropdown'
import Rating from '../components/Rating'


function House() {

  const houses = useContext(AppContext)
  const { houseId } = useParams()
  const house = houses.find((elt) => elt.id === houseId)

  if (!house) {
    return (
      <Error />
    )
  } else {
    const title = document.querySelector('title')
    title.textContent = `Kasa - ${house.title}`

    return (
      <Fragment>
        <Carousel props={house} />
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
            <Host hostName={house.host.name} hostPicture={house.host.picture} />
            <Rating score={parseInt(house.rating)} />
          </div>
        </section>

        <div className='house__desc'>
          <Dropdown title="Description" body={house.description} />
          <Dropdown title="Équipements" body={house.equipments} />
        </div>
      </Fragment>
    )
  }
}

export default House
