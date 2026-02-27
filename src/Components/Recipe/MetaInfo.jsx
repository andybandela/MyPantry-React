import React from 'react'
import prep from '../../assets/prep.png'
import cook from '../../assets/cooking_time.png'
import serv from '../../assets/dish.png'
import rest from '../../assets/timer.png'
import cool from '../../assets/fridge.png'

const MetaInfo = ({meta_type,meta_time}) => {
    let icn = ''
    let srv = false
    switch (meta_type) {
        case 'prep time':
            icn = prep;
            break;
        case 'cook time':
            icn = cook;
            break;
        case 'rest time':
            icn = rest;
            break;
        case 'servings':
            icn = serv;
            srv = true
            break;
        case 'fridge time':
            icn = cool;
            break;
    
        default:
            break;
    }
  return (
    <>
        <div className='meta-item'>
            <div className='tooltip'>
                <img src={icn} alt={`${meta_type} time`} />
                <span className='tooltiptext'>{`${meta_type}`}</span>
            </div>
            <span>{meta_time} {srv?'servings':'min'}</span>
        </div>
    </>
    
  )
}

export default MetaInfo