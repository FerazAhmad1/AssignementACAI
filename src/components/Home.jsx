import React, { useState } from "react";
import { ItemCard } from "./ItemCard.jsx";
import { useRef } from "react";
import { useItemContext } from "../context/useItemContext";
import { useOwnerContext } from "../context/useOwnerContext.js";
import Input from "./Input.jsx";

const Home = () => {
  const { items } = useItemContext();
  const [filtertedItem, setFilterItem] = useState(items);

  const [sortBy, setSortBy] = useState("Name");
  const searchRef = useRef();
  const { owner: currentUser } = useOwnerContext();

  const sortList = (list, key) => {
    key = key.toLowerCase();
    const sortedList = list.sort((a, b) => {
      return a[key].localeCompare(b[key], "en", { sensitivity: "base" });
    });
    return sortedList;
  };

  const onMarkSold = (id) => {
    const soldItem = filtertedItem.find((itm) => (itm.id = id));

    soldItem.sold = true;
    soldItem.available = false;
    setFilterItem(() => [...filtertedItem]);
  };

  const sortHandler = (e) => {
    if (e.target.value == "relevance") {
      setSortBy(e.target.value);
      setFilterItem(() => [...items]);
      return;
    }
    setSortBy(e.target.value);
    const sortedItem = sortList([...filtertedItem], e.target.value);
    setFilterItem(sortedItem);
  };

  const searchByName = (nm) => {
    const filteredItem = items.filter((item) => item.name.includes(nm));
    setFilterItem(() => filteredItem);
  };

  const changeHandler = (e) => {
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    searchRef.current = setTimeout(() => {
      searchByName(e.target.value);
    }, 300);
  };

  return (
    <>
      <div className="flex justify-between items-center  gap-4 p-5 ">
        <div className="md:min-w-lg">
          <Input
            type="text"
            name="search"
            onChangeHandler={changeHandler}
            placeholder="Search items..."
          />
        </div>

        <div>
          <label
            htmlFor="sortBy"
            className=" hidden sm:inline-block mb-1 text-sm font-medium text-gray-700 mr-2"
          >
            SORT BY
          </label>
          <select
            value={sortBy}
            onChange={sortHandler}
            className="px-4 py-2 border-1 border-gray-200 rounded-lg focus:outline-none focus: focus:border-teal-600"
          >
            <option value="relevance">Relevance</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
            <option value="owner">Owner</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5">
        {filtertedItem.map((item) => {
          return (
            <ItemCard key={item.id} item={item} onMarkSold={onMarkSold}>
              {currentUser === item.owner && item.available && (
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    onClick={() => onMarkSold(item.id)}
                    className="accent-red-600 w-5 h-5 cursor-pointer"
                  />
                  <label className="text-red-600 font-medium">Sold</label>
                </div>
              )}
            </ItemCard>
          );
        })}
      </div>
    </>
  );
};

export default Home;
