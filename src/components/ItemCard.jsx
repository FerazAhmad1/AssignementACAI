import { Link } from "react-router-dom";

export const ItemCard = ({ item }) => {
  return (
    <div className="border rounded-lg shadow p-4 bg-white max-w-fit ">
      <img
        src={item.image}
        alt={item.name}
        className=" w-[300px] h-40 object-cover rounded"
      />
      <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
      <p className="text-gray-600">{item.category}</p>
      <p className={item.available ? "text-green-500" : "text-red-500"}>
        {item.available ? "Available" : "Not Available"}
      </p>
      <Link
        to={`/items/${item.id}`}
        className="mt-2 inline-block text-blue-500 underline"
      >
        View Details
      </Link>
    </div>
  );
};
