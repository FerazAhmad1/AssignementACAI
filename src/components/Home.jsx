import React from "react";
import { ItemCard } from "./ItemCard.jsx";

import { useItemContext } from "../context/useItemContext";
const Home = () => {
  const { items } = useItemContext();
  return (
    <div className=" flex flex-wrap gap-5 p-5 ">
      {items.map((item) => {
        return <ItemCard item={item} />;
      })}
    </div>
  );
};

export default Home;
