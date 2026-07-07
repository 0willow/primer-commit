import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import "./App.css";

const STORAGE_KEY = "crud-items";

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const handleAddOrUpdate = (text) => {
    if (editingItem) {
      setItems(
        items.map((item) =>
          item.id === editingItem.id ? { ...item, text } : item
        )
      );
      setEditingItem(null);
    } else {
      const newItem = {
        id: Date.now(),
        text,
      };
      setItems([...items, newItem]);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1 className="App-title">Mi Lista de Tareas</h1>
      <Form onSubmit={handleAddOrUpdate} editingItem={editingItem} />
      <List items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
