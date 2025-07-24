import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useItemContext } from "../context/useItemContext";
import { Button } from "./Button";
// Mock data for now, replace with actual fetch or context

const ItemDetails = () => {
  const { id } = useParams();
  const { items } = useItemContext();
  const [oneItem, setOneItem] = useState(null);
  useEffect(() => {
    // Replace with actual API or data fetch
    const foundItem = items.find((itm) => itm.id === id);
    setOneItem(foundItem);
  }, [id]);

  if (!oneItem) return <p>Loading...</p>;

  return (
    <div className="flex flex-col px-8 gap-8  ">
      <Link to="/" className="mt-6 inline-block text-blue-500">
        ← Back to Home
      </Link>
      <div className=" flex flex-col mx-auto p-6 gap-10 md:flex-row ">
        <div className="w-full md:w-[50%]">
          <img
            src={oneItem.image}
            alt={oneItem.name}
            className="  object-cover rounded"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <h1 className="text-2xl font-bold ">{oneItem.name}</h1>
          <p className="text-gray-700 ">{oneItem.description}</p>
          <p className="text-sm text-gray-600">Category: {oneItem.category}</p>
          <p className="text-sm text-gray-600">
            Condition: {oneItem.condition}
          </p>
          <p className="text-sm text-gray-600">Owner: {oneItem.owner}</p>
          <p
            className={` font-semibold ${
              oneItem.available ? "text-green-600" : "text-red-600"
            }`}
          >
            {oneItem.available
              ? "Available"
              : `Unavailable${
                  oneItem.borrowedBy
                    ? ` - Borrowed by ${oneItem.borrowedBy}`
                    : ""
                }`}
          </p>

          {oneItem.available ? (
            <Button>Request To Borrow</Button>
          ) : (
            <p className=" text-sm text-gray-500 italic">
              This item is not currently available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
