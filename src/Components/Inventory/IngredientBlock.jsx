import React, { useState } from 'react'
import plusIng from '../../assets/add.png'
import minusIng from '../../assets/minus.png'



const Ingredient = ({name,qty,unit,children}) => {
    const [itemQty, setItemQty] = useState(qty)
    const subtraFn = () => setItemQty( prev =>  prev = prev -1)
    const addFn = () => setItemQty( prev =>  prev = prev +1)
    return (
    <div className={`${children?"ingredient-row ":"category-content-collapsed"}`}>
        <span>{name} </span>
        <div className='quantity-controls'>
            <button onClick={subtraFn} ><img className='qty-btn' src={minusIng}/></button>
            <div className='tooltip'>
                <span className='qty-number'>{itemQty} </span>
                <span className='tooltiptext'>{unit}</span>
            </div>
            
            <button onClick={addFn} ><img className='qty-btn' src={plusIng}/></button>
        </div>
    </div>
  )
}

export default Ingredient