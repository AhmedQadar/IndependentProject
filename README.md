HTML Steps :
Link to Bootstrap CSS for styling.

Link to a custom CSS file "styles.css" for additional styling.

Load the "main.js" JavaScript file with the "defer" attribute to ensure it's executed after the document is parsed.

Load the "helper.js" JavaScript file in a similar way as "main.js."

Load the Font Awesome icon library for using icons in the webpage.

Create a navigation bar with a dark blue background, containing links to different sections of your webpage.

Add a search form in the navigation bar with an input field and a search button.

Create a container with a button for searching available recipes.

Define the main content area of the webpage.

Include a hidden form container for adding new recipes.

Inside the form container, create an HTML form with fields for recipe name, image URL, ingredients, instructions, and an optional review. There's also a "Submit" button.

Set up an empty section for displaying results from the Edamam API.

Create a footer section with contact information and information about the website.

Display copyright information at the bottom of the webpage.


MAIN JS STEPS:
Get a reference to the HTML element with the id "search-button" and assigns it to the variable searchButton.

Get a reference to the HTML element with the id "show-form-button" and assigns it to the variable addSpecialRecipe.

Add a click event listener to the "search-button" element. When clicked, it hides the "searchButton" and shows the "addSpecialRecipe" button and then calls the fetchRecipes function.

Get a reference to the HTML element with the id "recipe-form-container" and assigns it to the variable recipeFormContainer.

Add a click event listener to the "addSpecialRecipe" button. When clicked, it displays the hidden recipe form container.

Add a submit event listener to the HTML form with the id "recipe-form." When the form is submitted, it calls the handleSubmit function.

Handle the form submission. It prevents the default form submission, collects the data from form fields, and then calls renderOneRecipe and addRecipe.

Create a new recipe card as HTML elements based on the recipe object. It appends the card to the "#recipe-list" element and includes a "Delete Recipe" button with an event listener to call deleteRecipe.

Make a GET request to the specified URL (http://localhost:3000/recipes) to fetch recipes. It processes the response data and calls renderOneRecipe for each recipe.

Make a POST request to add a new recipe by sending data to the specified URL. It sets the request headers to indicate JSON data and logs the response.

Make a DELETE request to the specified URL with the recipe ID to delete a recipe. 


HELPER JS Steps:
DOMContentLoaded Event Listener:

Add an event listener to wait for the DOM content to be fully loaded.
Timeout (3-Second Delay):

After the DOM content is loaded, introduce a 3-second delay before executing the code inside the timeout.
Selecting Search Form and Local Results Container:

Select the HTML elements with class "d-flex" and ID "local-results."
Assign references to these elements to variables searchForm and localResultsContainer, respectively.
Search Form Submission Event Listener:

Attach a submit event listener to the searchForm element.
When the form is submitted, prevent the default form submission behavior.
Retrieve the user's search query from the form.
Fetching Data from Edamam API (fetchDataFromEdamam):

Create the function fetchDataFromEdamam(query) to handle API data retrieval.
Define API key and app ID variables.
Construct the API endpoint with the user's query, API key, and app ID.
Use the fetch API to send a GET request to the constructed endpoint.
Handling API Response:

Use .then to handle the response as JSON data.
If successful, call the displayEdamamData(data) function with the fetched data.
If there's an error, log an error message.
Displaying Edamam Data (displayEdamamData):

Create the function displayEdamamData(data) to handle displaying the fetched recipe data.
Select the HTML element with ID "edamam-results" and clear its content.
Creating a Container for Recipe Cards:

Create a new div element and assign it the class "container."
Iterating Through Recipe Data:

Iterate through each recipe (referred to as "hit") in the fetched data.
Creating Recipe Cards:

For each recipe, create a new div element and assign it classes "card" and "mb-3."
Set the card's display style to "flex" for layout.
Creating Card Elements:

Create an img element for the recipe image and set its attributes and styles.
Create a div for the card body, giving it the class "card-body."
Create a h5 element for the card title and set its text content.
Create a p element for the description and ingredients, setting their text content.
Create an a element for instructions, using Bootstrap classes for styling.
Assign the appropriate content and attributes to these elements.
Structuring Card Elements:

Append the image and all other card elements to the card body.
Append the card body to the card.
Appending Cards to the Container:

Append each recipe card to the container, organizing them.
Appending the Container to Results:

Append the container, containing all recipe cards, to the "edamam-results" element on the webpage.