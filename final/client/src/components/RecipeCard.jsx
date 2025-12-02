import { useState } from "react";
import { FaClock } from "react-icons/fa6";

function RecipeCard({ recipe }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={`recipe-card ${open ? "recipe-card-open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <header className="recipe-card-header">
        <h3>{recipe.title}</h3>

        <div className="recipe-meta">
          <span className="meta-item">
            <FaClock className="meta-icon" />
            {recipe.cookTime} min
          </span>
          <span
            className={`meta-item difficulty difficulty-${recipe.difficulty.toLowerCase()}`}
          >
            {recipe.difficulty}
          </span>
        </div>
      </header>

      <p className="recipe-description">{recipe.description}</p>

      <div className="recipe-tags">
        {recipe.tags?.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {open && (
        <div className="recipe-details">
          {recipe.servings && (
            <p className="recipe-servings">
              Servings: <strong>{recipe.servings}</strong>
            </p>
          )}

          {recipe.ingredients?.length > 0 && (
            <>
              <h4>Ingredients</h4>
              <ul>
                {recipe.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {recipe.steps?.length > 0 && (
            <>
              <h4>Steps</h4>
              <ol>
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      )}
    </article>
  );
}

export default RecipeCard;
