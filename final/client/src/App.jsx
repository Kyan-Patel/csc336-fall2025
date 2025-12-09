// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import AddRecipe from "./pages/AddRecipe.jsx";
import "./App.css"; // optional, keep if you already had it
import "./index.css"; // make sure global styles are loaded
// ^ if index.css is already imported in main.jsx, you can skip this line

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-title">RecipeBox</div>

        <div className="navbar-links">
          <Link className="nav-btn" to="/">Home</Link>
          <Link className="nav-btn" to="/recipes">Recipes</Link>
          <Link className="nav-btn" to="/add">Add Recipe</Link>
        </div>
      </nav>

      {/* Page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
