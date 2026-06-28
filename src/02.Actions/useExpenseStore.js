import { create } from "zustand";

export const useExpenseStore = create((set) => ({
  transactions: [],
  addTransaction: (description, amount) =>
    set((state) => ({
      transactions: [
        ...state.transactions,
        { id: crypto.randomUUID(), description, amount },
      ],
    })),

  deleteTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((t) => t.id !== id),
    })),
}));
