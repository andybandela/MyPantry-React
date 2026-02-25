import React,{ useState } from 'react'
import plusIcn from '../../assets/plus.png'
import dwnChev from '../../assets/downchevron.png'
import upChev from '../../assets/upchevron.png'
import Ingredient from './IngredientBlock'
import AddIngredient from '../Modal/AddIngredient'
import { createPortal } from 'react-dom'

const Category = ({category,ingredients}) => {
    const [chevronTgl,setChevronTgl] = useState(true);
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
                <button onClick={modalSwitch} > <img className='add-btn' src={plusIcn}/> </button>
                <button onClick={tglSwitch} ><img className="collapse-btn" src={chevronTgl?upChev:dwnChev}/></button>
            </div>
            
        </div>
        
        {ingredients.map(item => <Ingredient key={item.name} {...item}>{chevronTgl}</Ingredient>)}
        
    </div>
  )
}

export default Category