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

  addToCart: (image, name, price, store) => {
    const heh = {
      image,
      name,
      price,
    };
    if (store === "a") {
      const { ordera } = get();
      const updated = [...ordera, heh];
      set({ ordera: updated, order: updated });
      localStorage.setItem("ordera", JSON.stringify(updated));
    } else {
      const { orderb } = get();
      const updated = [...orderb, heh];
      set({ orderb: updated, order: updated });
      localStorage.setItem("orderb", JSON.stringify(updated));
    }
  },

  removeFromCart: (image, name, price, store) => {
    const { ordera, orderb } = get();
    const match = (item) =>
      item.image === image && item.name === name && item.price === price;

    if (store === "a") {
      const updated = [...ordera];
      const index = updated.findIndex(match);
      if (index !== -1) updated.splice(index, 1);
      set({ ordera: updated, order: updated });
      localStorage.setItem("ordera", JSON.stringify(updated));
    } else {
      const updated = [...orderb];
      const index = updated.findIndex(match);
      if (index !== -1) updated.splice(index, 1);
      set({ orderb: updated, order: updated });
      localStorage.setItem("orderb", JSON.stringify(updated));
    }
  },
}));
