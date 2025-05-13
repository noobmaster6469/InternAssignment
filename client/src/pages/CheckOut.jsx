import React, { useEffect, useState } from "react";
import { useOrderStore } from "../store/useOrderStore.js";
import { useStoreStore } from "../store/useStoreStore.js";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { order, setOrder, setStore } = useOrderStore();
  const { storeInfo } = useStoreStore();
  const [groupedItems, setGroupedItems] = useState([]);

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
      const key = item.image;
      if (!map[key]) {
        map[key] = { ...item, count: 1 };
      } else {
        map[key].count += 1;
      }
    });
    setGroupedItems(Object.values(map));
  }, [order]);

  const totalPrice = groupedItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  const totalItems = groupedItems.reduce((acc, item) => acc + item.count, 0);
  const discount = totalPrice >= 1000 ? 100 : 0;
  const grandTotal = totalPrice - discount;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Cart Table (Left) */}
      <div className="md:col-span-2 overflow-x-auto">
        <h1 className="text-xl font-bold mb-4">Order Summary</h1>
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Qty</th>
              <th className="px-4 py-2 border">Subtotal</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section (Right) */}
      <div className="border p-6 rounded-lg shadow-lg bg-base-100">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Price:</span>
            <span>Rs. {totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span>
            <span>- Rs. {discount}</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Grand Total:</span>
            <span>Rs. {grandTotal}</span>
          </div>
        </div>
        <button className="btn btn-primary mt-6 w-full">Place Order</button>
        <Link to={`/store/${storeInfo.name}`}>
          <button className="btn btn-outline mt-2 w-full">Back to Store</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
