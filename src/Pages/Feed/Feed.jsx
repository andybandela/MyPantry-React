import React from 'react'
import './Feed.css'
import Card from '../../Components/Card/Card'
import { NavLink } from 'react-router-dom'
import { recipes } from '../../Store/data'

const Feed = () => {
    return (
        <div className='feed'>
            {recipes.map(recipe => (
                <NavLink key={recipe._id} to={`/recipe/${recipe.param}`}>
                    <div className='feed-card'>
                        <Card recipeDesc={recipe.Description} recipeName={recipe.title} />
                    </div>
                </NavLink>
            ))}
        </div>
    )
}

export default Feed