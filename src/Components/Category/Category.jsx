import React from 'react';
import './Category.css';
import { fetchCategories } from '../../../util/http';
import { useQuery } from '@tanstack/react-query';
import { NavLink, useSearchParams } from 'react-router-dom';
import { fetchRecipes } from '../../../util/http'
import Card from '../Card/Card';

const Category = () => {
    const [searchParams] = useSearchParams();
    const catParam = searchParams.get('cat');
    const idParam = searchParams.get('_id');
    const nameParam = searchParams.get('name');
    const { data: cat, isPending: catPending } = useQuery({
        queryKey: ['category',nameParam],
        queryFn: fetchCategories
    });
    const { data, isPending } = useQuery({
        queryKey: ['recipes'],
        queryFn: fetchRecipes
    });

    //Loading state
    if (catPending || isPending) {
        return <div className='cat'><p>Loading</p></div>;
    }

    //Safety check for data structure
    const recipesIDs = cat?.[catParam]?.[idParam]?.recipes;
    if (!recipesIDs || !Array.isArray(recipesIDs)) {
        return <div className='cat'><p>No recipes found for this category.</p></div>;
    }


    return (
        <div className='cat'>
            {recipesIDs.map(recipeID => {
                const recipe = data?.[recipeID];
                if (!recipe) {
                    return null; // Skip if recipe data is not available
                }
                return (
                    <NavLink key={recipeID} to={`/recipe?name=${recipe.param}&_id=${recipe._id}`}>
                        <div className='cat-card'>
                            <Card
                                recipeDesc={recipe.Description}
                                recipeName={recipe.title}
                                recipeThumbnail={recipe.imageUrl}
                            />
                        </div>
                    </NavLink>
                );
                })
            }
        </div>
    );
}

export default Category