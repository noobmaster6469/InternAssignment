import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useStoreStore = create((set) => ({
  store: null,
  storeInfo: [],

  initializeStore: async (slug) => {
    set({ store: slug });

    try {
      const res = await axiosInstance.post(`/store/${slug}`);
      set({ storeInfo: res.data });
    } catch (error) {
      toast.error("Failed to fetch store data");
      console.error(error);
    }
  },
}));
