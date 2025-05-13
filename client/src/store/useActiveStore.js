import { create } from "zustand";

export const useActiveStore = create((set, get) => ({
  activeStatus: null,

  setActiveStatus: (id) => {
    set({ activeStatus: id });
  },
}));
