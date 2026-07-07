import React from "react";
import Item from "./Item";

function List({ items, totalCount, onEdit, onDelete, onToggleComplete }) {
  return (
    <div>
      <p className="item-list__counter">Total: {totalCount}</p>
      {items.length === 0 ? (
        <p className="item-list__empty">No hay elementos que mostrar.</p>
      ) : (
        <div className="item-list">
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default List;
