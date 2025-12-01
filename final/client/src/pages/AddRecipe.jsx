import { useState } from "react";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (!title) newErrors.title = "Title is required.";
    if (!description) newErrors.description = "Description is required.";
    if (!cookTime || cookTime <= 0) {
      newErrors.cookTime = "Cook time must be positive.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const newRecipe = {
      title,
      cookTime: Number(cookTime),
      difficulty,
      description,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    // For now, just log the data so we can see the result
    console.log("Recipe submitted:", newRecipe);

    // reset form
    setTitle("");
    setCookTime("");
    setDifficulty("Easy");
    setDescription("");
    setTags("");
    setErrors({});
  }

  return (
    <section className="add-recipe-page">
      <h1>Add Recipe</h1>
      <p>Fill out the form below to add a new recipe.</p>

      <form className="recipe-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title *</label>
          <input
            type="text"
            placeholder="e.g., Creamy Tomato Pasta"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div className="form-group">
          <label>Cook Time (minutes) *</label>
          <input
            type="number"
            min="1"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
          />
          {errors.cookTime && <p className="error">{errors.cookTime}</p>}
        </div>

        <div className="form-group">
          <label>Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tags (comma-separated)</label>
          <input
            type="text"
            placeholder="pasta, vegetarian, quick"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea
            rows="4"
            placeholder="A short summary of the recipe..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <button className="btn primary" type="submit">
          Save Recipe
        </button>
      </form>
    </section>
  );
}

export default AddRecipe;
