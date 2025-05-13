import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useProductStore = create((set) => ({
  products: [],

  getProducts: async (store, category) => {
    if (category !== null) {
      try {
        const res = await axiosInstance.post(`/product/${store}/${category}`);
        set({ products: [] });
        set({ products: res.data });
      } catch (error) {
        toast.error("Failed to fetch products");
        console.error(error);
      }
      return;
    } else {
      try {
        const res = await axiosInstance.post(`/product/${store}`);
        set({ products: [] });
        set({ products: res.data });
      } catch (error) {
        toast.error("Failed to fetch products");
        console.error(error);
      }
    }
  },
}));
