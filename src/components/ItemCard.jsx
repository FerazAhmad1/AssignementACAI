import { Link } from "react-router-dom";

export const ItemCard = ({ item, children }) => {
  return (
    <div className=" flex flex-col gap-3 shadow-sm rounded-lg p-6 bg-white ">
      <img
        src={item.image}
        alt={item.name}
        className=" w-[300px] h-40 object-cover rounded"
      />
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="text-gray-600">{item.category}</p>
          <p className={item.available ? "text-green-500" : "text-red-500"}>
            {item.available ? "Available" : "Not Available"}
          </p>
        </div>

        {children}
      </div>

      <Link
        to={{ pathname: `/items/${item.id}` }}
        state={{ from: "/" }}
        className="px-4 py-2 w-full text-center bg-teal-600 text-white rounded-lg"
      >
        View Details
      </Link>
    </div>
  );
};
