import { FaClock } from "react-icons/fa6"; // icons from external library

function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <header className="recipe-card-header">
        <h3>{recipe.title}</h3>
        <div className="recipe-meta">
          <span className="meta-item">
            <FaClock />
            {recipe.cookTime} min
          </span>
          <span className="meta-item">{recipe.difficulty}</span>
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
    </article>
  );
}

export default RecipeCard;
