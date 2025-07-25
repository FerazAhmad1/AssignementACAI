import React, { useState, useEffect } from "react";
import { useItemContext } from "../context/useItemContext";
import { ItemCard } from "./ItemCard";

const MyRequests = () => {
  const { items } = useItemContext();
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    let arr = [
      { id: "itm001", status: "pending" },
      { id: "itm003", status: "approve" },
      { id: "itm002", status: "returned" },
    ];
    let result = [];
    for (const item of items) {
      for (const status of arr) {
        if (status.id == item.id) {
          result.push({ ...item, ...status });
        }
      }
    }
    setMyItems(() => result);
  }, [myItems]);

  return <ItemCard></ItemCard>;
};

export default MyRequests;
