import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import RecipesList from "./pages/RecipesList.jsx";
import AddRecipe from "./pages/AddRecipe.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesList />} />
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
    </Layout>
  );
}

export default App;
