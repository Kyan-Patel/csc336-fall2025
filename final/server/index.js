import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const DATA_FILE = "./data.json";

function readRecipes() {
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

function writeRecipes(recipes) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(recipes, null, 2));
}

// API routes
app.get("/api/recipes", (req, res) => {
  const recipes = readRecipes();
  res.json(recipes);
});

app.post("/api/recipes", (req, res) => {
  const { title, cookTime, difficulty, instructions } = req.body;

  if (!title || !cookTime || !instructions) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const recipes = readRecipes();

  const newRecipe = {
    id: Date.now(),
    title,
    cookTime: Number(cookTime),
    difficulty: difficulty || "Easy",
    instructions
  };

  recipes.push(newRecipe);
  writeRecipes(recipes);

  res.status(201).json(newRecipe);
});


app.use(express.static("../client/dist"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});