import React from "react";

function Item({ item, onEdit, onDelete }) {
  const handleDelete = () => {
    const confirmado = window.confirm(
      `¿Seguro que quieres eliminar "${item.text}"?`
    );
    if (confirmado) {
      onDelete(item.id);
    }
  };

  return (
    <div className="item">
      <span className="item__text">{item.text}</span>
      <div className="item__actions">
        <button className="item__button item__button--edit" onClick={() => onEdit(item)}>
          Editar
        </button>
        <button className="item__button item__button--delete" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Item;
