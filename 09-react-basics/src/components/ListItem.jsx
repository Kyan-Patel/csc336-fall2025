// src/components/ListItem.jsx
export default function ListItem({ text, important }) {
  return (
    <li className={important ? "listitem listitem--important" : "listitem"}>
      {text}
    </li>
  );
}
