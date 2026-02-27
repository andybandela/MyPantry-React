import React from 'react'
import yesIn from '../../assets/accept.png'
import noIn from '../../assets/cancel.png'
import subIn from '../../assets/equal.png'

const Ingredient = ({ingredient,available,sub}) => {
    let icn = ''
    switch (available) {
        case 'yes':
            icn = yesIn;
            break;
        case 'no':
            icn = noIn;
            break;
        case 'sub':
            icn = subIn;
            break;
    
        default:
            break;
    }
  return (
    <li className='ingredient'>
        <span>{ingredient}</span>
        <div className='tooltip'>
            <img src={icn} alt='availability' className='ingredient-status'/>
            <span className='tooltiptext'>{sub}</span>
        </div>
        
    </li>
  )
}

export default Ingredient