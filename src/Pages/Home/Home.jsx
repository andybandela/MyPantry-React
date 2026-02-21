import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Explore from '../Explore/Explore'
import Recipe from '../Recipe/Recipe'
import Inventory from '../Inventory/Inventory'
import AddRecipe from '../Add_Recipe/AddRecipe'
import Profile from '../Profile/Profile'
import { useSelector } from 'react-redux'
//<Feed/>
//<Explore/>
//<Recipe/>
//<Inventory/>
//<AddRecipe/>
//<Profile/>
const Home = () => {
  const expand = useSelector( state => state.toggle.expand);
  return (
    <>
        <Sidebar/>
        <div className={`container ${expand?"":'large-container'}`}>
            <Explore/>
        </div>
    </>
  )
}

export default Home