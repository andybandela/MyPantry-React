import React, { useState } from 'react'
import './Inventory.css'
import plusIcn from '../../assets/plus.png'
import plusIng from '../../assets/add.png'
import minusIng from '../../assets/minus.png'
import dwnChev from '../../assets/downchevron.png'
import upChev from '../../assets/upchevron.png'

const Inventory = () => {

    const [proteinTgl,setProteinTgl] = useState(true);
    const tglSwitch = () => setProteinTgl(prev => prev === false?true:false);
    const [produceTgl,setProduceTgl] = useState(true)
    const tglSwitch1 = () => setProduceTgl(prev => prev === false?true:false);
    const [sTgl,setSTgl] = useState(true);
    const tglSwitch2 = () => setSTgl(prev => prev ===false?true:false)
    const [dTgl,setDTgl] = useState(true)
    const tglSwitch3 = () => setDTgl(prev => prev ===false?true:false)

  return (
    <div className='inventory-page'>
        <div className='inventory-layout'>
            <div className='inventory-main'>
                
                <div className='inventory-paper'>
                    <h1 className='inventory-title'>My Inventory</h1>
                    <div className={`${proteinTgl?"category-block":"category-block-collapsed"}`}>
                        <div className='category-header'>
                            <h3>Protein</h3>
                            <div>
                                <button > <img className='add-btn' src={plusIcn}/> </button>
                                <button onClick={tglSwitch} ><img className="collapse-btn" src={proteinTgl?upChev:dwnChev}/></button>
                            </div>
                            
                        </div>
                        <div className={`${proteinTgl?"ingredient-row ":"category-content-collapsed"}`}>
                            <span>Chicken</span>
                            <div className='quantity-controls'>
                                <button ><img className='qty-btn' src={minusIng}/></button>
                                <span className='qty-number'>2</span>
                                <button ><img className='qty-btn' src={plusIng}/></button>
                            </div>
                        </div>
                        <div className={`${proteinTgl?"ingredient-row ":"category-content-collapsed"}`}>
                            <span>Beef</span>
                            <div className='quantity-controls'>
                                <button ><img className='qty-btn' src={minusIng}/></button>
                                <span className='qty-number'>2</span>
                                <button ><img className='qty-btn' src={plusIng}/></button>
                            </div>
                        </div>
                    </div>
                    <div className={`${produceTgl?"category-block":"category-block-collapsed"}`}>
                        <div className='category-header'>
                            <h3>Produce</h3>
                            <div>
                                <button > <img className='add-btn' src={plusIcn}/> </button>
                                <button onClick={tglSwitch1} ><img className='collapse-btn' src={produceTgl?upChev:dwnChev}/></button>
                            </div>
                        </div>
                        <div className={`${produceTgl?"ingredient-row ":"category-content-collapsed"}`}>
                            <span>Cabbage</span>
                            <div className='quantity-controls'>
                                <button ><img className='qty-btn' src={minusIng}/></button>
                                <span className='qty-number'>1</span>
                                <button ><img className='qty-btn' src={plusIng}/></button>
                            </div>
                        </div>
                        <div className={`${produceTgl?"ingredient-row ":"category-content-collapsed"}`}>
                            <span>Tomato</span>
                            <div className='quantity-controls'>
                                <button ><img className='qty-btn' src={minusIng}/></button>
                                <span className='qty-number'>4</span>
                                <button ><img className='qty-btn' src={plusIng}/></button>
                            </div>
                        </div>
                    </div>
                    <div className={`${sTgl?"category-block":"category-block-collapsed"}`}>
                        <div className='category-header'>
                            <h3>Seasoning & Herb</h3>
                            <div>
                                <button > <img className='add-btn' src={plusIcn}/> </button>
                                <button onClick={tglSwitch2} ><img className='collapse-btn' src={sTgl?upChev:dwnChev}/></button>
                            </div>
                        </div>
                        <div className={`${sTgl?"ingredient-row ":"category-content-collapsed"}`}>
                            <span>Black Pepper</span>
                            <div className='quantity-controls'>
                                <button ><img className='qty-btn' src={minusIng}/></button>
                                <span className='qty-number'>1</span>
                                <button ><img className='qty-btn' src={plusIng}/></button>
                            </div>
                        </div>
                        <div className={`${sTgl?"ingredient-row ":"category-content-collapsed"}`}>
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
                                <button onClick={tglSwitch3} ><img className='collapse-btn' src={dTgl?dwnChev:upChev}/></button>
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