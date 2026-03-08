import React from 'react'
import thumbnail from '../../assets/thumbnail.png'
import thumbnail2 from '../../assets/carbonara.jpg'
import './Card.css'

const rand = () => Math.floor(Math.random()*2)

const Card = ({recipeName,recipeDesc}) => {
  let ar = [thumbnail,thumbnail2];
  let image = ar[rand()]
  return (
    <div className='card'>
        <img src={image} alt='recipe thumbnail' />
        <h2 className='sn-pro-cardh2'>{recipeName}</h2>
        <p className='sn-pro-cardp'>{recipeDesc} </p>
        {console.log(recipeName)}
    </div>
  )
}

export default Card