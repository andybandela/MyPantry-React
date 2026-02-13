import React from 'react'
import './AddRecipe.css'
import addIcn from '../../assets/add.png'

const AddRecipe = () => {
  return (
    <div className='add-recipe-page'>
        <h1 className='page-title'>Add New Recipe</h1>
        <div className='form-paper'>
            <div className='form-group'>
                <label>Recipe Name </label>
                <input type='text' className='text-input'/>
            </div>
            <div className='form-group'>
                <label>Recipe Instructions</label>
                <textarea className='textarea-input' rows={6}/>
            </div>
            <div className='form-group'>
                <div className='section-header'>
                    <label>Ingredients</label>
                    <button className='add-btn'><img src={addIcn} className='add-btn-img'/></button>
                </div>
                <div className='ingredient-input'>
                    <input type='text' placeholder='Ingredient name'/>
                </div>
            </div>
            <div className='form-group'>
                <div className='meta-grid'>
                    <div className='meta-toggle'>
                        <label>Prep Time</label>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                        
                        <input type='text' placeholder='e.g. 30 min' disabled/>
                    </div>
                    <div className='meta-toggle'>
                        <label>Cooking Time</label>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                        <input type='text' placeholder='e.g. 30 min' disabled/>
                    </div>
                    <div className='meta-toggle'>
                        <label>Cooling Time</label>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                        <input type='text' placeholder='e.g. 30 min' disabled/>
                    </div>
                    <div className='meta-toggle'>
                        <label>Bake Time</label>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                        <input type='text' placeholder='e.g. 30 min' disabled/>
                    </div>
                    <div className='meta-toggle'>
                        <label>Servings</label>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                        <input type='text'  disabled/>
                    </div>
                </div>
            </div>

            <div className='form-group'>
                <label>Recipe Photo</label>
                <div className='photo-drop'>
                    <p>Drag & Drop Photo Here</p>
                </div>
            </div>
            <button className='publish-btn'>Publish Recipe</button>

        </div>
    </div>
  )
}

export default AddRecipe