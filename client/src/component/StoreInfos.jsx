import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useOrderStore } from "../store/useOrderStore.js";

const StoreInfo = ({ storeInfo }) => {
  const { order } = useOrderStore();
  return (
    <div className="flex items-center justify-between gap-2 py-2 px-8 shadow-lg">
      <div>
        <Link to={`/store/${storeInfo.name}`}>
          <img
            src={`http://localhost:3000/uploads/${storeInfo.image}`}
            alt={storeInfo.name}
            className="w-20 h-20 object-cover rounded-full border-4 border-gray-200"
          />
        </Link>
      </div>

      <div className="flex gap-4 text-xl">
        <div className="flex justify-between  items-center">
          <p className="font-semibold text-gray-700">Store Name:&nbsp;</p>
          <p className="text-gray-600">{storeInfo.name}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-700">Email:&nbsp;</p>
          <p className="text-gray-600">{storeInfo.email}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-700">Contact:&nbsp;</p>
          <p className="text-gray-600">{storeInfo.contactNumber}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-700">Address:&nbsp;</p>
          <p className="text-gray-600">{storeInfo.address}</p>
        </div>
      </div>

      <div className="cart">
        <Link to={`/store/${storeInfo.name}/cart`}>
          <div className="flex items-center justify-center p-3 rounded-full cursor-pointer hover:bg-gray-200">
            <ShoppingCart />
            <h1 className="absolute top-5 right-10">{order.length}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StoreInfo;
