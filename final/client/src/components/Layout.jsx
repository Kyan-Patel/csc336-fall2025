import { Link, NavLink } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Link to="/" className="logo">
          RecipeBox
        </Link>

        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/recipes">
            All Recipes
          </NavLink>
          <NavLink to="/add">
            Add Recipe
          </NavLink>
        </nav>
      </header>

      <main className="app-main">{children}</main>
        
        <footer className="app-footer">
            A simple recipe app for my web programming course.
        </footer>

    </div>
  );
}

export default Layout;
