import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateItem, selectItems } from "./itemsSlice";

const ItemsManager = () => {
  const [text, setText] = useState("");
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addItem({ id: Date.now(), text }));
      setText("");
    }
  };

  const handleUpdate = (id) => {
    const newText = prompt("Введіть новий текст:");
    if (newText) {
      dispatch(updateItem({ id, text: newText }));
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новий елемент"
      />
      <button onClick={handleAdd}>Додати</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleUpdate(item.id)}>Редагувати</button>
            <button onClick={() => dispatch(removeItem(item.id))}>
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsManager;
