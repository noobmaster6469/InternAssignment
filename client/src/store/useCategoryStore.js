import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useCategoryStore = create((set, get) => ({
  categories: [],
  activeCategory: null,
  getCategories: async (store) => {
    try {
      const res = await axiosInstance.post(`/category/${store}`);
      set({ categories: res.data });
    } catch (error) {
      toast.error("Failed to fetch categories");
    }
  },

  setActiveCategory: (id) => {
    set({ activeCategory: id });
  },
}));
