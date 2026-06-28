import { useCounterStore } from "../store";
import Counter from "./Counter";

const Controllers = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Zustand Counter
        </h1>

        <Counter />
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={increment}
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-2xl font-bold text-white shadow-md transition duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-95"
          >
            +
          </button>

          <button
            onClick={decrement}
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 text-2xl font-bold text-white shadow-md transition duration-200 hover:bg-red-700 hover:shadow-lg active:scale-95"
          >
            −
          </button>

          <button
            onClick={reset}
            className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-emerald-700 hover:shadow-lg active:scale-95"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controllers;
