import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import AddRecipe from "./pages/AddRecipe.jsx";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-title">RecipeBox</div>
        <div className="navbar-links">
          <Link className="nav-btn" to="/">Home</Link>
          <Link className="nav-btn" to="/recipes">Recipes</Link>
          <Link className="nav-btn" to="/add">Add Recipe</Link>
        </div>
      </nav>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
