export default function Item({ item, onDeleteItem, onPackItem }) {
  return (
    <li>
      <input
        id={item.id}
        type="checkbox"
        value={item.packed}
        onChange={() => onPackItem(item.id)}
      />
      <label htmlFor={item.id}>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
