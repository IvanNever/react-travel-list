import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  itemList,
  onDeleteItem,
  onPackItem,
  onClearAll,
}) {
  const [sortBy, setSortBy] = useState("input");

  const sortedList = () => {
    if (sortBy === "description") {
      return [...itemList].sort((a, b) =>
        a.description.localeCompare(b.description),
      );
    }
    if (sortBy === "packed") {
      return [...itemList].sort((a, b) => {
        return a.packed - b.packed;
      });
    }
    return itemList;
  };

  return (
    <div className="list">
      <ul>
        {sortedList().map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onPackItem={onPackItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearAll}>Clear all</button>
      </div>
    </div>
  );
}
