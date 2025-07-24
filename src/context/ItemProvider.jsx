// src/context/ItemProvider.jsx
import { useState, useEffect } from "react";
import { ItemContext } from "./ItemContext.jsx";
import { mockItems } from "../data/mockItem.js";

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : mockItems;
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
