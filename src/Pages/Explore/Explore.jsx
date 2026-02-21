import React from 'react'
import './Explore.css'
import meat from '../../assets/meat.jpg'
//import meat1 from '../../assets/meat_1.jpg'
import fish from '../../assets/fish.jpg'
import vegetable from '../../assets/vegy.jpg'
import dessert from '../../assets/dessert.jpg'

const Explore = () => {
  return (
    <div className='category'>
        <div className='cont big-group'>
            <div className='item'>
                <img src={meat} />
                <p>Meat & Poultry</p>
            </div>
            <div className='item'>
                <img src={fish}/>
                <p>Fish & Crustacean</p>
            </div>
            <div className='item'>
                <img src={vegetable}/>
                <p>Vegetarian</p>
            </div>
            <div className='item'>
                <img src={dessert}/>
                <p>Dessert</p>
            </div>
        </div>
        <div className='cont small-group'>
            <div className='item'> French</div>
            <div className='item'>Congolese</div>
            <div className='item'>Indian</div>
            <div className='item'>Mexican</div>
            <div className='item'>Chinese</div>
            <div className='item'>Italian</div>
            <div className='item'>Greek</div>
        </div>
    </div>
  )
}

export default Explore