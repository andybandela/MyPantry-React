import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  const expand = useSelector( state => state.toggle.expand);
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <div className={`container ${expand?"":'large-container'}`}>
          <Outlet/>
      </div>
    </>
  )
}

export default Home