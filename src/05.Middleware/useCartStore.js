import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useCartStore = create(
  devtools(
    persist(
      (set) => ({
        items: [],

        addItem: (item) =>
          set(
            (state) => ({
              items: [...state.items, item],
            }),
            false,
            "cart/addItem",
          ),

        clearCart: () => set({ items: [] }, false, "cart/clearCart"),
      }),
      {
        name: "my-cool-cart", //* localStorage key
      },
    ),
    {
      name: "CartStore", //* Redux DevTools store name
    },
  ),
);
