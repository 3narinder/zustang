import { useCounterStore } from "../store";

const Counter = () => {
  const count = useCounterStore((state) => state.count);

  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white p-8 shadow-lg border border-gray-200">
      <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
        Current Count
      </p>

      <h1 className="mt-2 text-5xl font-bold text-indigo-600">{count}</h1>
    </div>
  );
};

export default Counter;
