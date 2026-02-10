import React from 'react'
import './Feed.css'
import Card from '../Card/Card'


const Feed = () => {
  return (
    <div className='feed'>
        <div className='feed-card'>
            <Card/>
        </div>
         <div className='feed-card'>
            <Card/>
        </div>
         <div className='feed-card'>
            <Card/>
        </div>
         <div className='feed-card'>
            <Card/>
        </div>
         <div className='feed-card'>
            <Card/>
        </div>
         <div className='feed-card'>
            <Card/>
        </div>
        
    </div>
    
  )
}

export default Feed