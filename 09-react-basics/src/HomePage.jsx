import { useState } from "react";
import ListItem from "./ListItem";
import SectionTitle from "./SectionTitle";

function HomePage() {
  const [items, setItems] = useState([
    { text: "Example Item", important: true }
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  function handleAdd() {
    if (inputValue.trim() === "") return;

    const newItem = { text: inputValue.trim(), important: isImportant };
    setItems([...items, newItem]);

    setInputValue("");
    setIsImportant(false);
  }

  return (
    <div className="app">
      <SectionTitle>My Lists</SectionTitle>

      <SectionTitle>Assignment Lists</SectionTitle>

      <div className="form-row">
        <input
          className="text-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a new item..."
        />

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={isImportant}
            onChange={(e) => setIsImportant(e.target.checked)}
          />
          Mark as important
        </label>

        <button className="add-button" onClick={handleAdd}>
          Add Item
        </button>
      </div>

      <ul className="items-list">
        {items.map((item, index) => (
          <ListItem
            key={index}
            text={item.text}
            important={item.important}
          />
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
