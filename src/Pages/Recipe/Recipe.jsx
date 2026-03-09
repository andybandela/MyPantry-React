import React from 'react'
import './Recipe.css'
import thumbnail from '../../assets/thumbnail.png'
import MetaInfo from '../../Components/Recipe/MetaInfo'
import Ingredient from '../../Components/Recipe/Ingredient'
import { useParams } from 'react-router-dom'
import thumbnail2 from '../../assets/carbonara.jpg'
import { fetchRecipe } from '../../../util/http'
import { useQuery } from '@tanstack/react-query'

const Recipe = () => {

    const {recipeName} = useParams();
    console.log(`get params: ${recipeName}`);
    
    const {data,isPending} = useQuery({
        queryKey: ['recipe',recipeName],
        queryFn: () => fetchRecipe(recipeName)
    })

    let image;
    if (recipeName === 'chicken_ramen'){
        image = thumbnail;
    }else{
        image = thumbnail2;
    }
  return (
    <div className='recipe'>

        <div className='top-section'>
            <div className='title'> <h2>{isPending?<p>Loadind</p>: data.recipe_name}</h2> </div>
            <div className='meta-info'>
                
                {isPending? <p>Loadind data</p>: data.meta_info.map( meta => <MetaInfo key={meta.meta_type} {...meta} />)}
                
                
            </div>
        </div>
        <div className='main-section'>
            <div className='instruction'>
                <img src={image} alt='recipe image' className='recipe-image'/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
            </div>
            <div className='ingredients'>
                <h4>Ingredient list</h4>
                <ul className='ingredient-list'>
                    {isPending?<p>Loadind</p>: data.recipe_ingredients.map(ing => <Ingredient key={ing.ingredient} {...ing} />)}
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Recipe