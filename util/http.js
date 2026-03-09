import { QueryClient } from "@tanstack/react-query";

export const fetchRecipes = async() => {
    console.log('start fetch');
    
    const response = await fetch('http://localhost:8080/feed/recipes');
    console.log(`response: ${response}`);

    if(response.status !== 200){
        throw new Error('An error occured while fetching the events');
    }

    const {recipes} = await response.json();
    console.log(`recipes:${recipes}`)

    return recipes;
}

export const fetchRecipe = async (recipeName) =>{
    console.log(`params: ${recipeName}`);
    
    const response = await fetch(`http://localhost:8080/recipe/${recipeName}`);
    if(response.status !== 200){
        throw new Error('An error occured while fetching the events');
    }
    const {recipe} = await response.json();
    console.log(`data: ${recipe}`);
    
    return recipe;

}

export const queryClient = new QueryClient();