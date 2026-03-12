import React from 'react'
import './Sidebar.css'
//import home_logo from '../../assets/home.png'
//import explore_logo from '../../assets/explore.png'
//import inventory_logo from '../../assets/pantry.png'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const expand = useSelector( state => state.toggle.expand)
  return (
    <div className={`sidebar ${expand?"":"small-sidebar"}`}>
        <div className='shortcut-links'>
            <NavLink to={'/'}>
                <div className='side-link'>
                    
                    <i className="fa-solid fa-house fa-xl i-right"></i><p className='sn-pro-sidep'>Home</p>
                </div>
            </NavLink>
            <NavLink to={'/explore'}>
                <div className='side-link'>
                    <i className="fa-solid fa-book-open fa-xl i-right"></i><p className='sn-pro-sidep'>Explore</p>
                </div>
            </NavLink>
            <NavLink to={'/inventory'}>
                <div className='side-link'>
                    <i className="fa-solid fa-boxes-packing fa-xl i-right"></i><p className='sn-pro-sidep'>My Pantry</p>
                </div>
            </NavLink>
            
        </div>
    </div>
  )
}

export default Sidebar