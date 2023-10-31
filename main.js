const searchButton = document.getElementById('search-button')
const addSpecialRecipe = document.getElementById('show-form-button')
document.getElementById('search-button').addEventListener('click', (e) => {
    e.preventDefault();
    searchButton.style.display = 'none';
    addSpecialRecipe.style.display = 'inline';

    fetchRecipes();

})

const recipeFormContainer = document.getElementById('recipe-form-container');

addSpecialRecipe.addEventListener('click', () => {
    recipeFormContainer.style.display = 'block';
});

document.querySelector('#recipe-form').addEventListener('submit', handleSubmit)

function handleSubmit (e) {
    e.preventDefault()
    let recipeObj = {
        name: e.target.name.value,
        image_url: e.target.image_url.value,
        ingredients: e.target.ingredients.value,
        instructions: e.target.instructions.value,
        reviews: e.target.reviews.value
    }
    renderOneRecipe(recipeObj)
    addRecipe(recipeObj)
}

function renderOneRecipe(recipe) {
    const card = document.createElement('div');
    card.className = 'card m-3';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container left-content';

    const img = document.createElement('img');
    img.src = recipe.image_url;
    img.className = 'card-img-top';
    img.alt = recipe.name;
    img.style.maxHeight = '200px';
    img.style.maxWidth = '200px';


    const textContainer = document.createElement('div');
    textContainer.className = 'text-container right-content';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = recipe.name;

    const reviews = document.createElement('p');
    reviews.innerHTML = `<span class="Reviews">${recipe.reviews}</span>`;

    const ingredients = document.createElement('p');
    ingredients.className = 'card-text';
    ingredients.textContent = recipe.ingredients;

    const instructions = document.createElement('p');
    instructions.className = 'card-text';
    instructions.textContent = recipe.instructions;

    const deleteRecipeButton = document.createElement('button');
    deleteRecipeButton.className = 'delete-recipe btn btn-danger';
    deleteRecipeButton.textContent = 'Delete Recipe';

    imageContainer.appendChild(img);
    textContainer.appendChild(title);
    textContainer.appendChild(reviews);
    textContainer.appendChild(ingredients);
    textContainer.appendChild(instructions);
    textContainer.appendChild(deleteRecipeButton);

    cardContent.appendChild(imageContainer);
    cardContent.appendChild(textContainer);

    card.appendChild(cardContent);

    document.querySelector('#recipe-list').appendChild(card);

    deleteRecipeButton.addEventListener('click', (e) => {
        e.preventDefault();
        deleteRecipe(recipe.id);
    });
}

function fetchRecipes() {
    fetch('http://localhost:3000/recipes')
    .then((resp) => resp.json())
    .then(recipeData => recipeData.forEach(recipe => renderOneRecipe(recipe)))
}

function addRecipe (recipeObj) {
    fetch('http://localhost:3000/recipes', {
     method: 'POST',
     headers: {
        'Content-Type': 'application/json'
     },
     body: JSON.stringify(recipeObj)
    })
    .then(response => response.json())
    .then(recipe => console.log(recipe))
}

function deleteRecipe(id) {
    fetch(`http://localhost:3000/recipes/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(recipe => console.log(recipe))
}
