import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import "./App.css";

const STORAGE_KEY = "crud-items";

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [search, setSearch] = useState("");

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
        completed: false,
      };
      setItems([...items, newItem]);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
    if (editingItem && editingItem.id === id) {
      setEditingItem(null);
    }
  };

  const handleToggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDeleteAll = () => {
    if (items.length === 0) return;
    const confirmado = window.confirm(
      "¿Seguro que quieres borrar todos los elementos? Esta acción no se puede deshacer."
    );
    if (confirmado) {
      setItems([]);
      setEditingItem(null);
    }
  };

  const filteredItems = items.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="App-title">Mi Lista de Tareas</h1>
      <Form onSubmit={handleAddOrUpdate} editingItem={editingItem} />

      <div className="toolbar">
        <input
          type="text"
          className="toolbar__search"
          placeholder="Buscar elementos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="toolbar__delete-all" onClick={handleDeleteAll}>
          Borrar todo
        </button>
      </div>

      <List
        items={filteredItems}
        totalCount={items.length}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
}

export default App;
