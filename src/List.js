import React from "react";
import Item from "./Item";

function List({ items, onEdit, onDelete }) {
  if (items.length === 0) {
    return <p className="item-list__empty">No hay elementos todavía.</p>;
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default List;
