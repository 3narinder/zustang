import { useCounterContext } from "./useCounterContext";

const CounterWidget = ({ name }) => {
  const count = useCounterContext((state) => state.count);
  const inc = useCounterContext((state) => state.inc);

  return (
    <div className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-stone-300 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-stone-400">
            Widget
          </p>

          <h2 className="mt-1 text-xl font-semibold text-stone-900">{name}</h2>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-2xl">
          📊
        </div>
      </div>

      {/* Counter */}
      <div className="my-8 text-center">
        <p className="text-sm text-stone-500">Current Count</p>

        <h1 className="mt-2 text-6xl font-bold tracking-tight text-stone-900">
          {count}
        </h1>
      </div>

      {/* Button */}
      <button
        onClick={inc}
        className="w-full rounded-xl bg-stone-900 py-3 font-medium text-white transition hover:bg-stone-800 active:scale-[0.98]"
      >
        Increment
      </button>
    </div>
  );
};

export default CounterWidget;
