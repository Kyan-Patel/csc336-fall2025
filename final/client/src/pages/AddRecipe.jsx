import { useState } from "react";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [description, setDescription] = useState("");
  const [servings, setServings] = useState("");
  const [tags, setTags] = useState("");
  const [ingredientsText, setIngredientsText] = useState("");
  const [stepsText, setStepsText] = useState("");

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSuccessMessage("");

    const newErrors = {};
    if (!title) newErrors.title = "Title is required.";
    if (!description) newErrors.description = "Description is required.";
    if (!cookTime || cookTime <= 0) {
      newErrors.cookTime = "Cook time must be positive.";
    }
    if (!servings || servings <= 0) {
      newErrors.servings = "Servings must be positive.";
    }
    if (!ingredientsText.trim()) {
      newErrors.ingredients = "Add at least one ingredient.";
    }
    if (!stepsText.trim()) {
      newErrors.steps = "Add at least one step.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const tagList = tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const ingredients = ingredientsText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const steps = stepsText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const newRecipe = {
      title,
      description,
      cookTime: Number(cookTime),
      difficulty,
      servings: Number(servings),
      tags: tagList,
      ingredients,
      steps,
      // id will come from the database / backend later
    };

    console.log("Recipe submitted:", newRecipe);

    setTitle("");
    setCookTime("");
    setDifficulty("Easy");
    setDescription("");
    setServings("");
    setTags("");
    setIngredientsText("");
    setStepsText("");
    setErrors({});
    setSuccessMessage("Recipe saved! (Check the console to see the JSON object.)");
  }

  const tagList = tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <section className="add-recipe-page">
      <header className="add-recipe-header">
        <h1>Add Recipe</h1>
        <p>Fill out the form below to add a new recipe to your collection.</p>
      </header>

      {successMessage && <p className="success-message">{successMessage}</p>}

      <form className="recipe-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title *</label>
          <input
            type="text"
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
          <label>Servings *</label>
          <input
            type="number"
            min="1"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
          {errors.servings && <p className="error">{errors.servings}</p>}
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
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          {tagList.length > 0 && (
            <p className="tag-preview">
              Tags:{" "}
              {tagList.map((t, i) => (
                <span key={i} className="tag-chip">
                  {t}
                </span>
              ))}
            </p>
          )}
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea
            rows="3"
            placeholder="A short summary of the recipe..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label>Ingredients *</label>
          <textarea
            rows="4"
            placeholder="One ingredient per line"
            value={ingredientsText}
            onChange={(e) => setIngredientsText(e.target.value)}
          />
          {errors.ingredients && <p className="error">{errors.ingredients}</p>}
        </div>

        <div className="form-group">
          <label>Steps *</label>
          <textarea
            rows="4"
            placeholder="One step per line"
            value={stepsText}
            onChange={(e) => setStepsText(e.target.value)}
          />
          {errors.steps && <p className="error">{errors.steps}</p>}
        </div>

        <button className="btn primary" type="submit">
          Save Recipe
        </button>
      </form>
    </section>
  );
}

export default AddRecipe;
