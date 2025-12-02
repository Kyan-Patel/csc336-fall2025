import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-hero">
        <h1>Welcome to RecipeBox</h1>
        <p className="home-tagline">
          Your personal cookbook — save, browse, and add your favorite recipes.
        </p>

        <div className="home-actions">
          <Link className="btn primary" to="/recipes">
            View Recipes
          </Link>
          <Link className="btn outline" to="/add">
            Add Recipe
          </Link>
        </div>

        <p className="home-subtext">
          A simple recipe app for my web programming course.
        </p>
      </div>
    </section>
  );
}

export default Home;
