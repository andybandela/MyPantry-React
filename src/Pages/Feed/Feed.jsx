import React from 'react'
import './Feed.css'
import Card from '../../Components/Card/Card'
import { NavLink } from 'react-router-dom'

const Feed = () => {
  return (
    <div className='feed'>
        <NavLink to={'/recipe'}>
            <div className='feed-card'>
                <Card/>
            </div>
        </NavLink>
        <NavLink to={'/recipe'}>
            <div className='feed-card'>
                <Card/>
            </div>
        </NavLink>
        <NavLink to={'/recipe'}>
            <div className='feed-card'>
                <Card/>
            </div>
        </NavLink>
        <NavLink to={'/recipe'}>
            <div className='feed-card'>
                <Card/>
            </div>
        </NavLink>
        <NavLink to={'/recipe'}>
            <div className='feed-card'>
                <Card/>
            </div>
        </NavLink>
        <NavLink to={'/recipe'}>
            <div className='feed-card'>
                <Card/>
            </div>
        </NavLink>
        <NavLink to={'/recipe'}>
            <div className='feed-card'>
                <Card/>
            </div>
        </NavLink>
        <NavLink to={'/recipe'}>
            <div className='feed-card'>
                <Card/>
            </div>
        </NavLink>
    </div>
  )
}

export default Feed