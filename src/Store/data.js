
const  Invetory_data = [
    {
        category: 'Protein',
        ingredients: [
            {
                name: "Chicken",
                qty: 3,
                unit: "unit"
            },
            {
                name: "Beef",
                qty: 4,
                unit: "unit"
            },
            {
                name: "Egg",
                qty: 24,
                unit: "unit"
            }
        ]
    },
    {
        category: 'Produce',
        ingredients: [
            {
                name: "Cabbage",
                qty: 1,
                unit: "unit"
            },
            {
                name: "Tomato",
                qty: 4,
                unit: "unit"
            },
            {
                name: "Cucumber",
                qty: 1,
                unit: "unit"
            }
        ]
    },
    {
        category: 'Starches/Grains',
        
        ingredients: [
            {
                name: "Rice",
                qty: 450,
                unit: "grams"
            },
            {
                name: "Flour",
                qty: 200,
                unit: "grams"
            },
            {
                name: "Pasta",
                qty: 300,
                unit: "grams"
            }
        ]
    },
    {
        category: 'Dairy & Fats',
        ingredients: [
            {
                name: "Milk",
                qty: 100,
                unit: "grams"
            },
            {
                name: "Butter",
                qty: 60,
                unit: "grams"
            },
            {
                name: "Oil",
                qty: 120,
                unit: "grams"
            }
        ]
    },
    {
        category: 'Seasonings & Herbs',
        ingredients: [
            {
                name: "Salt",
                qty: 50,
                unit: "grams"
            },
            {
                name: "Black Pepper",
                qty: 30,
                unit: "grams"
            }
        ]
    },
    {
        category: 'Pantry/Baking',
        ingredients: [
            {
                name: "Baking Powder",
                qty: 50,
                unit: "grams"
            },
            {
                name: "Sugar",
                qty: 130,
                unit: "grams"
            }
        ]
    },
    {
        category: 'Sauces and condiments',
        ingredients: [
            {
                name: "Mayo",
                qty: 50,
                unit: "grams"
            },
            {
                name: "Ketchup",
                qty: 30,
                unit: "grams"
            }
        ]
    },
    {
        category: 'Pastries',
        ingredients: [
            {
                name: "Bread",
                qty: 1,
                unit: "unit"
            },
            {
                name: "Bagels",
                qty: 3,
                unit: "unit"
            },
            {
                name: "Croissant",
                qty: 2,
                unit: "unit"
            }
        ]
    }
];

export const Recipe_data = {
    recipe_name : 'Chicken Ramen',
    recipe_instructions : '',
    meta_info: [
        {
            meta_type: 'prep time',
            meta_time: 15
        },
        {
            meta_type: 'cook time',
            meta_time: 30
        },
        {
            meta_type: 'rest time',
            meta_time: 20
        },
        {
            meta_type: 'fridge time',
            meta_time: 10
        },
        {
            meta_type: 'servings',
            meta_time: 4
        }
    ],
    recipe_ingredients : [
        'Chicken',
        'Noodles',
        'MSG',
        'Salt',
        'Spring Onion',
        'Corn',
        'Garlic'
    ]
}

export default Invetory_data;