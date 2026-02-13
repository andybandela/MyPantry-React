import React from 'react'
import './Inventory.css'
import plusIcn from '../../assets/plus.png'
import plusIng from '../../assets/add.png'
import minusIng from '../../assets/minus.png'
import dwnChev from '../../assets/downchevron.png'
import upChev from '../../assets/upchevron.png'

const Inventory = () => {
  return (
    <div className='inventory-page'>
        <div className='inventory-layout'>
            <div className='inventory-main'>
                
                <div className='inventory-paper'>
                    <h1 className='inventory-title'>My Inventory</h1>
                    <div className='category-block'>
                        <div className='category-header'>
                            <h3>Protein</h3>
                            <div>
                                <button > <img className='add-btn' src={plusIcn}/> </button>
                                <button ><img className='collapse-btn' src={upChev}/></button>
                            </div>
                            
                        </div>
                        <div className='ingredient-row'>
                            <span>Chicken</span>
                            <div className='quantity-controls'>
                                <button ><img className='qty-btn' src={minusIng}/></button>
                                <span className='qty-number'>2</span>
                                <button ><img className='qty-btn' src={plusIng}/></button>
                            </div>
                        </div>
                        <div className='ingredient-row'>
                            <span>Beef</span>
                            <div className='quantity-controls'>
                                <button ><img className='qty-btn' src={minusIng}/></button>
                                <span className='qty-number'>2</span>
                                <button ><img className='qty-btn' src={plusIng}/></button>
                            </div>
                        </div>
                    </div>
                    <div className='category-block'>
                        <div className='category-header'>
                            <h3>Produce</h3>
                            <div>
                                <button > <img className='add-btn' src={plusIcn}/> </button>
                                <button ><img className='collapse-btn' src={upChev}/></button>
                            </div>
                        </div>
                        <div className='ingredient-row'>
                            <span>Cabbage</span>
                            <div className='quantity-controls'>
                                <button ><img className='qty-btn' src={minusIng}/></button>
                                <span className='qty-number'>1</span>
                                <button ><img className='qty-btn' src={plusIng}/></button>
                            </div>
                        </div>
                        <div className='ingredient-row'>
                            <span>Tomato</span>
                            <div className='quantity-controls'>
                                <button ><img className='qty-btn' src={minusIng}/></button>
                                <span className='qty-number'>4</span>
                                <button ><img className='qty-btn' src={plusIng}/></button>
                            </div>
                        </div>
                    </div>
                    <div className='category-block'>
                        <div className='category-header'>
                            <h3>Seasoning & Herb</h3>
                            <div>
                                <button > <img className='add-btn' src={plusIcn}/> </button>
                                <button ><img className='collapse-btn' src={upChev}/></button>
                            </div>
                        </div>
                        <div className='ingredient-row'>
                            <span>Black Pepper</span>
                            <div className='quantity-controls'>
                                <button ><img className='qty-btn' src={minusIng}/></button>
                                <span className='qty-number'>1</span>
                                <button ><img className='qty-btn' src={plusIng}/></button>
                            </div>
                        </div>
                        <div className='ingredient-row'>
                            <span>Nutmeg</span>
                            <div className='quantity-controls'>
                                <button ><img className='qty-btn' src={minusIng}/></button>
                                <span className='qty-number'>1</span>
                                <button ><img className='qty-btn' src={plusIng}/></button>
                            </div>
                        </div>
                    </div>
                    <div className='category-block'>
                        <div className='category-header'>
                            <h3>Dairy</h3>
                            <div>
                                <button > <img className='add-btn' src={plusIcn}/> </button>
                                <button ><img className='collapse-btn' src={dwnChev}/></button>
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
                    <div className='rec-card'>Recipe</div>
                    <div className='rec-card'>Recipe</div>
                    <div className='rec-card'>Recipe</div>
                </div>
            </div>
        
    </div>
  )
}

export default Inventory