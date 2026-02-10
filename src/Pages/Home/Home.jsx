import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Explore from '../Explore/Explore'
import Recipe from '../Recipe/Recipe'
//<Feed/>
//<Explore/>
//<Recipe/>
const Home = ({sidebar}) => {
  return (
    <>
        <Sidebar sidebar={sidebar}/>
        <div className={`container ${sidebar?"":'large-container'}`}>
            <Recipe/>
        </div>
    </>
  )
}

export default Home