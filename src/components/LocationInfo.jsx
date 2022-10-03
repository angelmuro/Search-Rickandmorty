import React from 'react'
import "./locationInfo.css"

const LocationInfo = ({location}) => {

  return (
    <article className='info'>
      
        <ul className='info_list'>
          <li className='info_item'><span><strong>Name: </strong> </span>{location?.name}</li>
          <li className='info_item'><span><strong>Type: </strong>  </span>{location?.type}</li>
          <li className='info_item'><span><strong>Dimension: </strong> </span>{location?.dimension}</li>
          <li className='info_item'><span><strong>Population: </strong> </span>{location?.residents.length}</li>
        </ul>
        
    </article>
  )
}

export default LocationInfo