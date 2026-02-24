import './Inventory.css'
import Invetory_data from '../../Store/data.js'
import Category from '../../Components/Inventory/CategoryBlock.jsx'

const Inventory = () => {



  return (
    <div className='inventory-page'>
        <div className='inventory-layout'>
            <div className='inventory-main'>
                
                <div className='inventory-paper'>
                    <h1 className='inventory-title'>My Inventory</h1>
                    
                    
                    {Invetory_data.map(cat => <Category key={cat.category} {...cat} />)}
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