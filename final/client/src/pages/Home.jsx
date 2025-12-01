import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <h1>Welcome to RecipeBox</h1>
      <p>Your personal cookbook — save, browse, and add recipes.</p>

      <div className="home-actions">
        <Link className="btn primary" to="/recipes">
          View Recipes
        </Link>
        <Link className="btn outline" to="/add">
          Add Recipe
        </Link>
      </div>
    </section>
  );
}

export default Home;
