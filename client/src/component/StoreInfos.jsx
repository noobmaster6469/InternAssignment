import React from "react";
import { Link } from "react-router-dom";

const StoreInfo = ({ storeInfo }) => {
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
    </div>
  );
};

export default StoreInfo;
