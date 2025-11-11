import { useState } from "react";
import ListItem from "./components/ListItem.jsx";
import Badge from "./components/Badge.jsx";
import "./App.css";


function App() {
  const [items, setItems] = useState([
    { text: "Example Item", important: true },
  ]);
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    setItems([...items, { text: inputValue, important: false }]);
    setInputValue("");
  }

  return (
    <div className="app">
      <h1>
        My List <Badge>{items.length}</Badge>
      </h1>

      <div>
        <input
          placeholder="Type a new item…"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="list">
        {items.map((item, index) => (
          <ListItem
            key={index}
            text={item.text}
            important={item.important}
          />
        ))}
      </ul>

      <footer>
        <Badge>react basics</Badge> <Badge>props</Badge> <Badge>state</Badge>
      </footer>
    </div>
  );
}

export default App;
