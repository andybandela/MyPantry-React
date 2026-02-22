import './Navbar.css' 
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/cooking_2.png'
import search from '../../assets/search.png'
//import user_logo from '../../assets/user.png'
import chef from '../../assets/chef.png'
import { useDispatch } from 'react-redux'
import { toggleActions } from '../../Store'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const dispatch = useDispatch(false);

  const toggleSwitch = () =>{
    dispatch(toggleActions.toggleMenu())
  };
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <div className='search-box flex-div'>
          <img className='menu-icon' src={menu_icon} alt='menu icon' onClick={toggleSwitch} />
          <NavLink to={'/'} >
            <img className='logo' src={logo}/>
          </NavLink>
        </div>
        
      </div>
      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <input type='text' placeholder='Search'/>
          <img className='search-logo' src={search}/>
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