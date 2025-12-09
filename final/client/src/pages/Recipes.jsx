import { useEffect, useState } from "react";
import { FiClock, FiTrendingUp, FiBookOpen } from "react-icons/fi";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRecipes() {
      try {
        const res = await fetch("/api/recipes");

        if (!res.ok) {
          setError("Could not load recipes.");
          return;
        }

        const data = await res.json();
        setRecipes(data);
      } catch (err) {
        setError("Error fetching recipes.");
      } finally {
        setLoading(false);
      }
    }

    loadRecipes();
  }, []);

  if (loading) return <p className="status-text">Loading recipes...</p>;
  if (error) return <p className="status-text error-text">{error}</p>;
  if (recipes.length === 0)
    return <p className="status-text">No recipes yet — add one!</p>;

  return (
    <div className="page-container recipes-page">
      <h1>Recipes</h1>
      <p>These recipes come from my Express API.</p>

      <div className="recipes-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.title}</h2>

            <p className="recipe-meta">
              <FiTrendingUp className="recipe-icon" />
              <strong>Difficulty:</strong> {recipe.difficulty}
            </p>

            <p className="recipe-meta">
              <FiClock className="recipe-icon" />
              <strong>Cook Time:</strong> {recipe.cookTime} minutes
            </p>

            <p className="recipe-meta instructions-label">
              <FiBookOpen className="recipe-icon" />
              <strong>Instructions:</strong>
            </p>

            <p className="instructions-text">
              {recipe.instructions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
