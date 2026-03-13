import './Navbar.css' 
import logo from '../../assets/cooking.png'
import chef from '../../assets/chef.png'
import { useDispatch,useSelector } from 'react-redux'
import { toggleActions } from '../../Store'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const dispatch = useDispatch();
  const expand = useSelector( state => state.toggle.expand)

  const toggleSwitch = () =>{
    dispatch(toggleActions.toggleMenu())
  };
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <div className='search-box flex-div'>
          
          <button className='btn-menu' onClick={toggleSwitch}>{expand?<i className="fa-solid fa-bars fa-2xl" ></i>:<i class="fa-solid fa-xmark fa-2xl"></i>}</button>
          <NavLink to={'/'} >
            <img className='logo' src={logo}/>
          </NavLink>
        </div>
        
      </div>
      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <input id='search' type='text' placeholder='Search'/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        
      </div>

      <div className='nav-right flex-div'>
        <NavLink to={'/profile'} >
          <img src={chef}/>
        </NavLink>
      </div>
      
    </nav>
  )
}

export default Navbar