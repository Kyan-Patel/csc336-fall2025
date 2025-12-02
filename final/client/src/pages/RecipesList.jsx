import { useState } from "react";
import recipesData from "../data/recipes.json";
import RecipeCard from "../components/RecipeCard.jsx";

function RecipesList() {
  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  const filtered = recipesData.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

    const matchesDifficulty =
      difficultyFilter === "all" || recipe.difficulty === difficultyFilter;

    return matchesSearch && matchesDifficulty;
  });

  return (
    <section className="recipes-page">
      <h1>All Recipes</h1>

      <div className="filters">
        <input
          className="filter-input"
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="recipes-grid">
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}

export default RecipesList;
