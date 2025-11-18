function ListItem({ text, important }) {
  return (
    <li className={`list-item ${important ? "list-item-important" : ""}`}>
      {text}
    </li>
  );
}

export default ListItem;
