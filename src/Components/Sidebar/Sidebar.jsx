import React from 'react'
import './Sidebar.css'
import home_logo from '../../assets/home.png'
import explore_logo from '../../assets/explore.png'
import inventory_logo from '../../assets/pantry.png'
import { useSelector } from 'react-redux'

const Sidebar = () => {

    const expand = useSelector( state => state.toggle.expand)
  return (
    <div className={`sidebar ${expand?"":"small-sidebar"}`}>
        <div className='shortcut-links'>
            <div className='side-link'>
                <img src={home_logo}/><p className='sn-pro-sidep'>Home</p>
            </div>
            <div className='side-link'>
                <img src={explore_logo}/><p className='sn-pro-sidep'>Explore</p>
            </div>
            <div className='side-link'>
                <img src={inventory_logo}/><p className='sn-pro-sidep'>My Pantry</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar