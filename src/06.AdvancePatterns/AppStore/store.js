import { create } from "zustand";
import { createAuthSlice } from "./Appstore/AuthSlice";
import { createCartSlice } from "./Appstore/cartSlice";

export const useAppStore = create()((...a) => ({
  ...createAuthSlice(...a),
  ...createCartSlice(...a),
}));
