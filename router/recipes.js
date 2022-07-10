//Write your router code here!
import express from "express";
import recipes from "../libs/recipes.js";
import { createRecipe, getRecipeByID, getRecipes, updateRecipeByID, deleteRecipeByID } from "../models/recipes.js";
const recipesRouter = express.Router();

// Getting all recipes
recipesRouter.get("/", function (req, res){
    const responseObject = getRecipes();
    res.json(responseObject);
})

// Getting recipes by the ID
recipesRouter.get("/:id", function (req, res) {        
    const responseObject = getRecipeByID(Number(req.params.id));
    res.json(responseObject);
});

// Handling POST request from the Postman
recipesRouter.post("/", function (req, res){
    const responseObject = createRecipe(req.body);
    res.json(responseObject);
})

// Handling PUT request from the Postman
recipesRouter.put("/:id", function (req, res){
    const responseObject = updateRecipeByID(Number(req.params.id), req.body);
    res.json(responseObject);
})

// Handling DELETE request from the Postman
recipesRouter.delete("/:id", function (req, res){
    const responseObject = deleteRecipeByID(Number(req.params.id));
    res.json(responseObject);
})

export default recipesRouter;
