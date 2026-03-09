import { QueryClient } from "@tanstack/react-query";

export const fetchRecipes = async() => {
    console.log('start fetch');
    
    const response = await fetch('http://localhost:8080/feed/recipes');
    console.log(`response: ${response}`);

    if(!response.ok){
        const error = new Error('An error occured while fetching the events');
        error.code = response.status;
        error.info = await response.json() || `Can't fetch data`;
        throw error;
    }

    const {recipes} = await response.json();
    console.log(`recipes:${recipes}`)

    return recipes;
}

export const queryClient = new QueryClient();