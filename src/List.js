import React from "react";
import Item from "./Item";

function List({ items, onEdit, onDelete }) {
  return (
    <div>
      <p className="item-list__counter">Total: {items.length}</p>
      {items.length === 0 ? (
        <p className="item-list__empty">No hay elementos todavía.</p>
      ) : (
        <div className="item-list">
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default List;
