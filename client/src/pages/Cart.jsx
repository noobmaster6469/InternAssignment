import React, { useEffect, useState } from "react";
import { useOrderStore } from "../store/useOrderStore.js";
import { useStoreStore } from "../store/useStoreStore.js";
import { Link } from "react-router-dom";

const Cart = () => {
  const { order, setStore, setOrder, addToCart, removeFromCart } =
    useOrderStore();
  const { storeInfo } = useStoreStore();
  const [groupedItems, setGroupedItems] = useState([]);

  const addHandler = (image, name, price) => {
    addToCart(image, name, price, storeInfo.name);
  };
  const deleteHandler = (image, name, price) => {
    removeFromCart(image, name, price, storeInfo.name);
  };

  useEffect(() => {
    if (storeInfo?.name) {
      const doit = async () => {
        await setStore(storeInfo.name);
        await setOrder(storeInfo.name);
      };
      doit();
    }
  }, [storeInfo, setStore, setOrder]);

  useEffect(() => {
    const map = {};
    order.forEach((item) => {
      const key = item.image; // use _id if available
      if (!map[key]) {
        map[key] = { ...item, count: 1 };
      } else {
        map[key].count += 1;
      }
    });
    setGroupedItems(Object.values(map));
  }, [order]);
  console.log("getGroupedItems", groupedItems);

  if (!storeInfo?.name) {
    return <div className="text-center py-10">Loading....</div>;
  }
  if (groupedItems.length == 0) {
    return <div className="text-center py-10">Your Cart is Empty</div>;
  }

  return (
    <div className="p-4 overflow-x-auto">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      <Link to={`/store/${storeInfo.name}`}>
        <h1 className="btn btn-primary">Home</h1>
      </Link>
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Image</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Quantity</th>
            <th className="px-4 py-2 border">Total</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {groupedItems.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border px-2 py-2">
                <img
                  src={`http://localhost:3000/uploads/${item.image}`}
                  alt={item.name}
                  className="w-16 h-16 object-cover mx-auto"
                />
              </td>
              <td className="border px-2 py-2">{item.name}</td>
              <td className="border px-2 py-2">Rs. {item.price}</td>
              <td className="border px-2 py-2">{item.count}</td>
              <td className="border px-2 py-2">
                Rs. {item.price * item.count}
              </td>
              <td className="border px-2 py-2">
                <div className="flex flex-col gap-2">
                  <button
                    className="btn btn-success btn-outline"
                    onClick={() =>
                      addHandler(item.image, item.name, item.price)
                    }
                  >
                    Add
                  </button>
                  <button
                    className="btn btn-error btn-outline"
                    onClick={() =>
                      deleteHandler(item.image, item.name, item.price)
                    }
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-end mt-4 flex-col">
        <h1 className="text-xl font-bold">
          Total: Rs.{" "}
          {groupedItems.reduce((acc, item) => acc + item.price * item.count, 0)}
        </h1>
        <Link to={`/store/${storeInfo.name}/checkout`}>
          <button className="btn btn-secondary ">CheckOut</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
