import React from 'react'
import './Inventory.css'

const Inventory = () => {
  return (
    <div className='inventory-page'>
        <div className='inventory-layout'>
            <div className='inventory-main'>
                <h1 className='inventory-title'>My Inventory</h1>
                <div className='inventory-paper'>
                    <div className='category-block'>
                        <div className='category-head'>
                            <h3>Protein</h3>
                            <button className='add-btn'>+</button>
                            <button className='collapse-btn'>⌄</button>
                        </div>
                        <div className='ingredient-row'>
                            <span>Chicken</span>
                            <div className='quantity-controls'>
                                <button className='qty-btn'>-</button>
                                <span className='qty-number'>2</span>
                                <button className='qty-btn'>+</button>
                            </div>
                        </div>
                        <div className='ingredient-row'>
                            <span>Beef</span>
                            <div className='quantity-controls'>
                                <button className='qty-btn'>-</button>
                                <span className='qty-number'>2</span>
                                <button className='qty-btn'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='category-block'>
                        <div className='category-head'>
                            <h3>Produce</h3>
                            <button className='add-btn'>+</button>
                            <button className='collapse-btn'>⌄</button>
                        </div>
                        <div className='ingredient-row'>
                            <span>Cabbage</span>
                            <div className='quantity-controls'>
                                <button className='qty-btn'>-</button>
                                <span className='qty-number'>1</span>
                                <button className='qty-btn'>+</button>
                            </div>
                        </div>
                        <div className='ingredient-row'>
                            <span>Tomato</span>
                            <div className='quantity-controls'>
                                <button className='qty-btn'>-</button>
                                <span className='qty-number'>4</span>
                                <button className='qty-btn'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='category-block'>
                        <div className='category-head'>
                            <h3>Seasoning & Herb</h3>
                            <button className='add-btn'>+</button>
                            <button className='collapse-btn'>⌄</button>
                        </div>
                        <div className='ingredient-row'>
                            <span>Black Pepper</span>
                            <div className='quantity-controls'>
                                <button className='qty-btn'>-</button>
                                <span className='qty-number'>1</span>
                                <button className='qty-btn'>+</button>
                            </div>
                        </div>
                        <div className='ingredient-row'>
                            <span>Nutmeg</span>
                            <div className='quantity-controls'>
                                <button className='qty-btn'>-</button>
                                <span className='qty-number'>1</span>
                                <button className='qty-btn'>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='inventory-sidebar'>
                <div className='summary-card'>
                    <h3>Inventory Summary</h3>
                    <p>Total Ingredients: 17</p>
                    <p>Low Stock: 4</p>
                    <p>Categories: 3</p>
                </div>
            </div>
            
            
        </div>
        <div className='recommendation-section'>
                <h2>Recommended Recipes</h2>
                <div className='recommendation-cards'>
                    <div className='rec-card'>Recipe</div>
                    <div className='rec-card'>Recipe</div>
                    <div className='rec-card'>Recipe</div>
                    <div className='rec-card'>Recipe</div>
                </div>
            </div>
        
    </div>
  )
}

export default Inventory