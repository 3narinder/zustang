import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCounterStore = create(
  devtools((set) => ({
    count: 0,
    increment: () =>
      set((state) => ({ count: state.count + 1 }), false, "count/increment"),
    decrement: () =>
      set((state) => ({ count: state.count - 1 }), false, "count/decrement"),
    reset: () => set({ count: 0 }, false, "count/reset"),
  })),
  {
    name: "Counter Store",
  },
);
