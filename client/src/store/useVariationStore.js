import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useVariationStore = create((set) => ({
  variations: [],
  mainVariation: null,
  getVariation: async (variationId) => {
    try {
      const response = await axiosInstance.post(`/variation/${variationId}`);
      set({ mainVariation: response.data });
    } catch (error) {
      console.error("Error fetching variations:", error);
    }
  },

  getAllVariation: async (variationId) => {
    try {
      const response = await axiosInstance.post(
        `variation/allVariation/${variationId}`
      );
      set({ variations: response.data });
    } catch (error) {
      console.error("Error fetching all variations:", error);
    }
  },
}));
