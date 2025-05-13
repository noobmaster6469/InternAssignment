import React from "react";
import { Link } from "react-router-dom";

const WrongStore = () => {
  return (
    <div className="fixed w-screen h-screen flex justify-center items-center flex-col gap-4">
      <div>
        <h1 className="text-3xl text-red-500 text-center">Store not found</h1>
        <p className="text-center">Please select a valid store.</p>
      </div>
      <div className="flex gap-4">
        <Link to={"/store/a"}>
          <button className="btn btn-outline btn-success">Store A</button>
        </Link>
        <Link to={"/store/b"}>
          <button className="btn btn-outline btn-error">Store B</button>
        </Link>
      </div>
    </div>
  );
};

export default WrongStore;
