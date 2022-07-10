import recipes from "../libs/recipes.js";

// GET ALL RECIPES
export function getRecipes() {
  const responseObject = {
      success: true,
      message: "The eagle has landed",
      payload: recipes
  };
  return responseObject;
}

// GET A RECIPE BY ID
export function getRecipeByID(inputId) {
  let foundRecipe = {};
  for (let i = 0; i < recipes.length; i++) {
    if (inputId === recipes[i].id) {
      foundRecipe = recipes[i];
    }
  }
  const responseObject = {
    success: true,
    message: `The eagle has landed carrying a recipe with id ${inputId}`,
    payload: foundRecipe
  };
  return responseObject;
}

// CREATE A RECIPE
export function createRecipe(newRecipe) {
  recipes.push(newRecipe);
  const responseObject = {
      success: true,
      message: `the eagle has added ${newRecipe.title} to the nest`,
      payload: recipes
  }
  return responseObject;
}

// UPDATE A RECIPE BY ID
export function updateRecipeByID(id, updatedRecipe) {
  for (let i=0; i<recipes.length; i++){
    if (id === recipes[i].id) {
        recipes.splice([i], 1, updatedRecipe);
        break
    }
  }
  const responseObject = {
      success: true,
      message: `the eagle has replaced recipe ${id} in the nest with ${updatedRecipe.title}`,
      payload: recipes
  }
  return responseObject;
}

// DELETE A RECIPE BY ID
export function deleteRecipeByID(id) {
  for (let i=0; i<recipes.length; i++){
    if (id === recipes[i].id) {
        recipes.splice([i], 1);
        break
    }
  }
  const responseObject = {
      success: true,
      message: `the eagle has ripped out ${id} with its tallons`,
      payload: recipes
  }
  return responseObject;
}