document.addEventListener('DOMContentLoaded', () => {
    setTimeout( () => {
        const searchForm = document.querySelector('.d-flex');
        const localResultsContainer = document.querySelector('#local-results');
        searchForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const searchInput = document.querySelector('.form-control');
        const query = searchInput.value;

       fetchDataFromEdamam(query);
       localResultsContainer.style.display = 'none';
       });
    }, 2000);
})

function fetchDataFromEdamam(query) {
    const apiKey = 'fabf743d4336e518be60ff4fd69c7f3b'; 
    const appId = '81a86f27'; 
    const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${apiKey}`;
  
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        displayEdamamData(data);
      })
      .catch((error) => {
        console.error('Error fetching data from Edamam:', error);
      });
}


function displayEdamamData(data) {
    const resultsContainer = document.querySelector('#edamam-results');
    resultsContainer.innerHTML = ''; 

    const container = document.createElement('div');
    container.classList.add('container');


    data.hits.forEach((hit) => {
      const recipe = hit.recipe;
  
      const card = document.createElement('div');
      card.classList.add('card', 'mb-3');
      card.style.display = 'flex';
      
      const img = document.createElement('img');
      img.src = recipe.image;
      img.classList.add('card-img-top');
      img.style.maxHeight = '200px';
      img.style.maxWidth = '200px';
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.textContent = recipe.label;
      
      const description = document.createElement('p');
      description.classList.add('card-text');
      description.textContent = 'Description: ' + recipe.source;
    
      const ingredients = document.createElement('p');
      ingredients.classList.add('card-text');
      ingredients.textContent = 'Ingredients: ' + recipe.ingredientLines.join(', ');

      const instructionsButton = document.createElement('a');
      instructionsButton.classList.add('btn', 'btn-primary'); // Use Bootstrap classes for button styling
      instructionsButton.href = recipe.url;
      instructionsButton.textContent = 'Instructions';

      
      cardBody.appendChild(img);
      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(ingredients);
      cardBody.appendChild(instructionsButton);


      card.appendChild(cardBody);
      
      container.appendChild(card);
    });

    resultsContainer.appendChild(container);
  }  