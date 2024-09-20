import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  const [itemList, setItemList] = useState([]);

  function handleAddNewItem(newItem) {
    setItemList((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItemList((items) => items.filter((item) => item.id !== id));
  }

  function handlePackItem(id) {
    setItemList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddNewItem={handleAddNewItem} />
      <PackingList
        itemList={itemList}
        onDeleteItem={handleDeleteItem}
        onPackItem={handlePackItem}
        onClearAll={() => setItemList([])}
      />
      <Stats items={itemList} />
    </div>
  );
}
