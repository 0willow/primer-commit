import React from "react";
import Item from "./Item";

function List({ items, onEdit, onDelete }) {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default List;
