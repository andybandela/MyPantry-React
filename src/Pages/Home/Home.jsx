import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Explore from '../Explore/Explore'
import Recipe from '../Recipe/Recipe'
import Inventory from '../Inventory/Inventory'
import AddRecipe from '../Add_Recipe/AddRecipe'
import Profile from '../Profile/Profile'
//<Feed/>
//<Explore/>
//<Recipe/>
//<Inventory/>
//<AddRecipe/>
const Home = ({sidebar}) => {
  return (
    <>
        <Sidebar sidebar={sidebar}/>
        <div className={`container ${sidebar?"":'large-container'}`}>
            <Profile/>
        </div>
    </>
  )
}

export default Home