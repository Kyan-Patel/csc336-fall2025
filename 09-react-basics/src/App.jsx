import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import CatAPI from "./CatAPI";
import "./index.css";

function App() {
  return (
    <div>

      <nav className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/dogs">Dogs</Link>
        <Link className="nav-link" to="/cats">Cats</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dogs" element={<About />} />
        <Route path="/cats" element={<CatAPI />} />
      </Routes>
    </div>
  );
}

export default App;
