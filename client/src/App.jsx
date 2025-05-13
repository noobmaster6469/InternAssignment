import React, { use, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Description from "./pages/Description";
import Cart from "./pages/cart";
import CheckOut from "./pages/CheckOut";

const App = () => {
  // useEffect(() => {
  //   localStorage.clear();
  // }, []);
  return (
    <div data-theme="light" className="min-h-screen bg-base-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:slug" element={<Store />} />
        <Route
          path="/store/:storeName/:variationId"
          element={<Description />}
        />
        <Route path="/store/:storeName/cart" element={<Cart />} />
        <Route path="/store/:storeName/checkout" element={<CheckOut />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
