import express from "express";
import { html } from "./config.js";
import recipesRouter from "./router/recipes.js";

const app = express();
const PORT = 3000;
// Logger:
app.use(function (req, res, next){
  console.log(`Request coming in on ${req.path}`)
  next();
})

app.use(express.static("public"));
app.use(express.json());
app.use('/recipes', recipesRouter);

/* DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res) {
  res.sendFile(html);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
