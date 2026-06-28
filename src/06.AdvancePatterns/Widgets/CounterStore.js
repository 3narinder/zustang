import { createStore } from "zustand";

export const createCounterStore = () =>
  createStore((set) => ({
    count: 0,

    inc: () =>
      set((state) => ({
        count: state.count + 1,
      })),

    dec: () =>
      set((state) => ({
        count: state.count - 1,
      })),
  }));
