import React, { useState, useEffect } from "react";

function Form({ onSubmit, editingItem }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingItem) {
      setText(editingItem.text);
      setError("");
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      setError("El elemento no puede estar vacío ni contener solo espacios.");
      return;
    }

    onSubmit(text.trim());
    setText("");
    setError("");
  };

  return (
    <form className="item-form-wrapper" onSubmit={handleSubmit}>
      <div className="item-form">
        <input
          className="item-form__input"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError("");
          }}
          placeholder="Agregar un elemento..."
        />
        <button className="item-form__button" type="submit">
          {editingItem ? "Actualizar" : "Agregar"}
        </button>
      </div>
      {error && <p className="item-form__error">{error}</p>}
    </form>
  );
}

export default Form;
