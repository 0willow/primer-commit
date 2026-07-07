import React from "react";

function Item({ item, onEdit, onDelete }) {
  return (
    <div>
      <span>{item.text}</span>
      <button onClick={() => onEdit(item)}>Editar</button>
      <button onClick={() => onDelete(item.id)}>Eliminar</button>
    </div>
  );
}

export default Item;
