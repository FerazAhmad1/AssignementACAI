import React, { useEffect, useState } from "react";
import { ItemCard } from "./ItemCard.jsx";
import { useRef } from "react";
import { useItemContext } from "../context/useItemContext";

const Home = () => {
  const { items } = useItemContext();
  const [filtertedItem, setFilterItem] = useState([]);
  const [srchStr, setSrh] = useState("");
  const searchRef = useRef();

  const searchByName = (nm) => {
    const filteredItem = items.filter((item) => item.name.includes(nm));
    setFilterItem(() => filteredItem);
  };

  const changeHandler = (e) => {
    setSrh(e.target.value);
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    searchRef.current = setTimeout(() => {
      searchByName(e.target.value);
    }, 100);
  };
  useEffect(() => {
    setFilterItem(items);
  }, []);

  return (
    <>
      <input
        type="text"
        name="search"
        value={srchStr}
        onChange={changeHandler}
        placeholder="Search items..."
        className="w-full max-w-md px-4 py-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition duration-200 shadow-sm"
      />

      <div className=" flex flex-wrap gap-5 p-5 ">
        {filtertedItem.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
