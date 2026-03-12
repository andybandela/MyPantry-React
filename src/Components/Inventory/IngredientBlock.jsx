import React, { useState } from 'react'
//import plusIng from '../../assets/add.png'
//import minusIng from '../../assets/minus.png'



const Ingredient = ({name,qty,unit,children}) => {
    const [itemQty, setItemQty] = useState(qty)
    const subtraFn = () => setItemQty( prev =>  prev = prev -1)
    const addFn = () => setItemQty( prev =>  prev = prev +1)
    return (
    <div className={`${children?"ingredient-row ":"category-content-collapsed"}`}>
        <span>{name} </span>
        <div className='quantity-controls'>
            <button onClick={subtraFn} ><i className="fa-regular fa-square-minus fa-xl"></i></button>
            <div className='tooltip uni-disp'>
                <span className='qty-number'>{itemQty} </span>
                <span className='tooltiptext'>{unit}</span>
            </div>
            
            <button onClick={addFn} ><i className="fa-regular fa-square-plus fa-xl"></i></button>
        </div>
    </div>
  )
}

export default Ingredient