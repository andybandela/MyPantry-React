import React from 'react'
import './Card.css'

const Card = ({recipeName,recipeDesc,recipeThumbnail}) => {
  let imageUrl = `http://localhost:8080/${recipeThumbnail}`
  return (
    <div className='card'>
        <img src={imageUrl} alt='recipe thumbnail' />
        <h2 className='sn-pro-cardh2'>{recipeName}</h2>
        <p className='sn-pro-cardp'>{recipeDesc} </p>
    </div>
  )
}

export default Card