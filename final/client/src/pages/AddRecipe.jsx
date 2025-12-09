import { useState } from "react";
import { toast } from "react-toastify";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [instructions, setInstructions] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Title is required.");
      return;
    }

    if (!cookTime || Number(cookTime) <= 0) {
      toast.error("Cook time must be a positive number.");
      return;
    }

    if (!instructions.trim()) {
      toast.error("Instructions are required.");
      return;
    }

    const recipe = {
      title,
      cookTime,
      difficulty,
      instructions,
    };

    try {
      const res = await fetch("/api/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      });

      if (!res.ok) {
        toast.error("Failed to save recipe.");
        return;
      }

      toast.success("Recipe added!");

      setTitle("");
      setCookTime("");
      setDifficulty("Easy");
      setInstructions("");
    } catch (err) {
      toast.error("Error saving recipe.");
    }
  }

  return (
    <div className="page-container add-page">
      <h1>Add Recipe</h1>
      <p>Fill out this form to add a new recipe.</p>

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Title
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Cook Time (minutes)
            <input
              type="number"
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Difficulty
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Instructions
            <textarea
              rows="4"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </label>
        </div>

        <button className="submit-btn" type="submit">
          Save Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;
