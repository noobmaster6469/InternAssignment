import { create } from "zustand";

export const useOrderStore = create((set, get) => ({
  order: [],
  store: null,

  ordera: [],
  orderb: [],

  setStore: (store) => {
    set({ store });
  },

  setOrder: async (store) => {
    if (store === "a") {
      const stored = localStorage.getItem("ordera");
      const ordera = stored ? JSON.parse(stored) : [];
      set({ ordera, order: ordera });
    } else {
      const stored = localStorage.getItem("orderb");
      const orderb = stored ? JSON.parse(stored) : [];
      set({ orderb, order: orderb });
    }
  },

  addToCart: (productVariation, store) => {
    if (store === "a") {
      const { ordera } = get();
      const updated = [...ordera, productVariation];
      set({ ordera: updated, order: updated });
      localStorage.setItem("ordera", JSON.stringify(updated));
    } else {
      const { orderb } = get();
      const updated = [...orderb, productVariation];
      set({ orderb: updated, order: updated });
      localStorage.setItem("orderb", JSON.stringify(updated));
    }
  },

  removeFromCart: (variationId) => {
    const { order } = get();
    set({ order: order.filter((item) => item._id !== variationId) });
  },
}));
