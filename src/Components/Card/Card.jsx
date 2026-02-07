import React from 'react'
import thumbnail from '../../assets/thumbnail.png'
import './Card.css'
const Card = () => {
  return (
    <div className='card'>
                <img src={thumbnail} alt='recipe thumbnail' />
                <h2>Ramen Noodle</h2>
                <p>Make your firsrt bowl of ramen</p>
            </div>
  )
}

export default Card