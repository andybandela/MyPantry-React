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
    const { data: cat, isPending: catPending } = useQuery({
        queryKey: ['category'],
        queryFn: fetchCategories
    });
    const { data, isPending } = useQuery({
        queryKey: ['recipes'],
        queryFn: fetchRecipes
    });


    return (
        <div className='cat'>
            {isPending ? <p>Loading</p> : cat[catParam][idParam].recipes.map(
                catId => (
                    <NavLink key={catId} to={`/recipe?name=${data[catId].param}&_id=${data[catId]._id}`}>
                        <div className='cat-card' >
                            {catPending ? <p>Loading</p> : <Card recipeDesc={data[catId].Description} recipeName={data[catId].title} recipeThumbnail={data[catId].imageUrl} />}
                        </div>
                    </NavLink>
                )
            )}
        </div>
    )
}

export default Category