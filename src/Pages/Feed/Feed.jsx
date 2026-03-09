import React from 'react'
import './Feed.css'
import Card from '../../Components/Card/Card'
import { NavLink } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchRecipes } from '../../../util/http'
//import { recipes } from '../../Store/data'

const Feed = () => {
    const {data, isPending} = useQuery({
        queryKey: ['recipes'],
        queryFn: fetchRecipes
    });
    let content;
    if(isPending){
        content = <p>Loading</p>
    }
    
    console.log(`data: ${data}`)
    return (
        <div className='feed'>

            {isPending ? content: data.map(recipe => (
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