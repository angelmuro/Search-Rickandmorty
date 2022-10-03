import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./cardResident.css"

const CardResidents = ({url}) => {

    const [residents, setResidents] = useState()

    useEffect(() => {
     axios.get(url)
       .then(res => setResidents(res.data))
       .catch(err => console.log(err))
    }, [])

    console.log(residents)

  return (
    <article className='card'>
      <header className='card__heder'>
        <img className='card_img' src={residents?.image} alt="" />
        <div className='card_container-status'>
          <div className={`card_circle-status ${residents?.status}`}></div>
          <span className= "card_status" >{residents?.status}</span>
        </div>
      </header>
      <section className='card__body'>
        <h3 className='card_name'>{residents?.name}</h3>
        <ul className='card_list'>
          <li className='card_item'>
            <span className='card_span'>Specie: </span>{residents?.species}
          </li>
          <li className='card_item'>
            <span className='card_span'>Origin: </span>{residents?.origin.name}
          </li>
          <li className='card_item'>
            <span className='card_span'>Episodes Where appear: </span>{residents?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  )
}

export default CardResidents