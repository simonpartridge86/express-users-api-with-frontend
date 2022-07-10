
1. Import Router js to app.js ✅
1. Test if export in router js is working, if not change to ES6 ✅
1. Import express to router js ✅
1. Import recipes from libs recipes.js to app and router ✅
1. Create necessary variable for express.router ✅
1. Add app.use function in app.js in order to use the router✅
1. Add a logger ✅
1. Expand recipe ideas ✅

CRUD - Create, Read, Update and Delete (post, get, put/patch, delete)
1. Tackle GET.
    GET	all recipes	✅
    respond with { success: Boolean, payload: recipe array } ✅
    use router.get with path "/recipes" ✅
    variable response object includes: success: true, message: eagle has landed and payload: recipes ✅

1. Tackle GET ID ✅
    Yesterday

1. Tackle POST ✅
    Coming in to url /recipes	
    payload = id, title, ingrediants and instructioins
    response { success: Boolean, payload: recipe }

1. Tackle PUT ✅
    use router.put function
    PUT request coming into url/recipes/:id
    request needs to handle a body (postman)
    must find item in recipes with same id (for loop?)
    replace body at id# position with new body

1. Tackle Delete ✅
    DELETE	/recipes/<recipe_id>		recipe deleted	{ success: Boolean, payload: recipe }

    Create your models
Another way to further organize your server's code and modularize for separating concerns is to pull out the logic that actually interacts with the data into models and then export and import them where needed - this way, the router only handles the routing.

In the models folder, there is a recipes.js file which should contain all of the useful logic in order to interact with the recipes collection. Complete the methods in there so they behave as expected by moving logic out of your router. These functions should be exported so you can use them in other files later.

getRecipes should return an array of all recipes
getRecipeByID should return the particular recipe we are looking for
createRecipe should add a recipe to the collection and return the new recipe
updateRecipeByID should replace the recipe at a certain ID with an updated version and return the new recipe
deleteRecipeByID should remove the specific recipe from the collection, and return the deleted recipe
Soon, we'll move to interacting with our data in databases, but for now, you can mutate the data array directly using the array methods we've used so far on the course.

Import your model functions into your router.