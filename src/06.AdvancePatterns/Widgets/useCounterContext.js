import { useContext } from "react";
import { useStore } from "zustand";
import CounterContext from "./CounterContext.jsx";

export function useCounterContext(selector) {
  const store = useContext(CounterContext);

  if (!store) {
    throw new Error("CounterProvider is missing");
  }

  return useStore(store, selector);
}
