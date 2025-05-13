import React, { useEffect, useState } from "react";
import { useOrderStore } from "../store/useOrderStore.js";
import { useStoreStore } from "../store/useStoreStore.js";
import { useVariationStore } from "../store/useVariationStore.js";

const Cart = () => {
  const { order, addToCart, setStore, setOrder } = useOrderStore();
  const { storeInfo } = useStoreStore();
  const { getVariation } = useVariationStore();
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    setStore(storeInfo.name);
    setOrder(storeInfo.name);
  }, [storeInfo, setStore, setOrder]);

  return (
    <div>
      {order.map((ord) => (
        <h1>{ord}</h1>
      ))}
    </div>
  );
};

export default Cart;
