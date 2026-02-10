import React from 'react'
import './Recipe.css'
import thumbnail from '../../assets/thumbnail.png'
import prep from '../../assets/prep.png'
import cook from '../../assets/cooking_time.png'
import serv from '../../assets/dish.png'
import rest from '../../assets/timer.png'
import yesIn from '../../assets/accept.png'
import noIn from '../../assets/cancel.png'
import subIn from '../../assets/equal.png'

const Recipe = () => {
  return (
    <div className='recipe'>

        <div className='top-section'>
            <div className='title'> <h2>Recipe name</h2> </div>
            <div className='meta-info'>
                
                <div className='meta-item'>
                    <img src={prep} alt='prep time'/>
                    <span>15min</span>
                </div>
                <span className='meta-divider'/>
                <div className='meta-item'>
                    <img src={cook} alt='cook time'/>
                    <span>30min</span>
                </div>
                <span className='meta-divider'/>
                <div className='meta-item'>
                    <img src={rest} alt='rest time'/>
                    <span>30min</span>
                </div>
                <span className='meta-divider'/>
                <div className='meta-item'>
                    <img src={serv} alt='serving'/>
                    <span>4 servings</span>
                </div>
                
            </div>
        </div>
        <div className='main-section'>
            <div className='instruction'>
                <img src={thumbnail} alt='recipe image' className='recipe-image'/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
            </div>
            <div className='ingredients'>
                <h4>Ingredient list</h4>
                <ul className='ingredient-list'>
                    <li className='ingredient'>
                        <span>Item</span>
                        <img src={yesIn} alt='availability' className='ingredient-status'/>
                    </li>
                    <li className='ingredient'>
                        <span>Item</span>
                        <img src={yesIn} alt='availability' className='ingredient-status'/>
                    </li>
                    <li className='ingredient'>
                        <span>Item</span>
                        <img src={noIn} alt='availability' className='ingredient-status'/>
                    </li>
                    <li className='ingredient'>
                        <span>Item</span>
                        <img src={subIn} alt='availability' className='ingredient-status'/>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Recipe