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
    <form className="item-form" onSubmit={handleSubmit}>
      <input
        className="item-form__input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Agregar un elemento..."
      />
      <button className="item-form__button" type="submit">
        {editingItem ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
}

export default Form;
