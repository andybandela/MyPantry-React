import React,{ useState } from 'react'
//import plusIcn from '../../assets/plus.png'
//import dwnChev from '../../assets/downchevron.png'
//import upChev from '../../assets/upchevron.png'
import Ingredient from './IngredientBlock'
import AddIngredient from '../Modal/AddIngredient'
import { createPortal } from 'react-dom'

const Category = ({category,ingredients}) => {
    const [chevronTgl,setChevronTgl] = useState(false);
    const tglSwitch = () => setChevronTgl(prev => prev === false?true:false);
    const [modalOpen,setModalOpen] = useState(false);
    const modalSwitch = () => setModalOpen( prev => prev === false?true:false);
    const handleCloseModal = () => setModalOpen(false)
    return (
    <div className={`${chevronTgl?"category-block":"category-block-collapsed"}`}>
        {
            modalOpen && createPortal(<AddIngredient onSubmit={handleCloseModal} > {category} </AddIngredient>, document.body)
        }
        <div className='category-header'>
            <h3>{category} </h3>
            
            
            <div>
                <button onClick={modalSwitch}> <i className="fa-solid fa-circle-plus fa-3x"></i> </button>
                <button onClick={tglSwitch} >{chevronTgl?<i className="fa-solid fa-circle-chevron-up fa-3x"></i>:<i className="fa-solid fa-circle-chevron-down fa-3x"></i>}</button>
            </div>
            
        </div>
        
        {ingredients.map(item => <Ingredient key={item.name} {...item}>{chevronTgl}</Ingredient>)}
        
    </div>
  )
}

export default Category