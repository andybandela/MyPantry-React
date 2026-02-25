import React from 'react'
import './AddIngredient.css'

const AddIngredient = ({onSubmit,children}) => {
    
  return (
    <div className='modal-container' onClick={(e) => {
        if(e.target.className === 'modal-container'){
            onSubmit()
        }
    }}>
        <div className='modal'>
            <div className='modal-header'>
                <h3>{children}</h3>
                <p className='close' onClick={() => onSubmit()} >&times;</p>
            </div>
            <div className='modal-content'>
                <div>
                    <label>Ingredient</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Unit</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Quantity</label>
                    <input type='text'/>
                </div>
            </div>
            <div className='modal-footer'>
                <button onClick={() => onSubmit()} className='btn btn-submit'>Add</button>
                <button onClick={() => onSubmit()} className='btn btn-cancel'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default AddIngredient