import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      {/* HERO BANNER */}
      <section className="hero-banner">
        <h1 className="hero-title">Cook. Create. Enjoy.</h1>
        <p className="hero-subtitle">
          Save your favorite meals and discover new ones.
        </p>

        <div className="hero-buttons">
          <Link className="hero-btn" to="/recipes">View Recipes</Link>
          <Link className="hero-btn hero-btn-alt" to="/add">Add Recipe</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
