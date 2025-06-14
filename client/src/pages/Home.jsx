import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="fixed h-screen w-full flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl">Welcome to the Home Page</h1>
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

export default Home;
