import { useState } from "react";
import CounterContext from "./CounterContext.jsx";
import { createCounterStore } from "./CounterStore.js";

export function CounterProvider({ children }) {
  const [store] = useState(createCounterStore);

  return (
    <CounterContext.Provider value={store}>{children}</CounterContext.Provider>
  );
}
