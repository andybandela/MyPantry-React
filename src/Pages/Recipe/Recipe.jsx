import React from 'react'
import './Recipe.css'

const Recipe = () => {
  return (
    <div className='recipe'>

        <div className='top-section'>
            <div className='title'> <h2>Recipe name</h2> </div>
            <div className='meta-info'>
                <img alt='prep time'/>
                <img alt='cook time'/>
                <img alt='serving'/>
            </div>
        </div>
        <div className='main-section'>
            <div className='instruction'>
                <img alt='recipe image' className='recipe-image'/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
            </div>
            <div className='ingredients'>
                <h4>Ingredient list</h4>
                <ul>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Recipe