import React from 'react'
import './Navbar.css' 
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/cooking_2.png'
import search from '../../assets/search.png'
import user_logo from '../../assets/user.png'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <div className='search-box flex-div'>
          <img className='menu-icon' src={menu_icon} alt='menu icon' onClick={() => setSidebar(prev => prev === false?true:false)} />
          <img className='logo' src={logo}/>
        </div>
        
      </div>
      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <input type='text' placeholder='Search'/>
          <img className='search-logo' src={search}/>
        </div>
        
      </div>

      <div className='nav-right flex-div'>
        <img src={user_logo}/>
      </div>
      
    </nav>
  )
}

export default Navbar