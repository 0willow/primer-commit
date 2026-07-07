import React, { useState, useEffect } from "react";

function Form({ onSubmit, editingItem }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingItem) {
      setText(editingItem.text);
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Agregar un elemento..."
      />
      <button type="submit">{editingItem ? "Actualizar" : "Agregar"}</button>
    </form>
  );
}

export default Form;
