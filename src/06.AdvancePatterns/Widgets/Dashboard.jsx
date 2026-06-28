import { CounterProvider } from "./CounterProvider";
import CounterWidget from "./CounterWidget";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-stone-100">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900">
            Analytics Dashboard
          </h1>

          <p className="mt-2 text-stone-500">
            Each widget below has its own independent Zustand store.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <CounterProvider>
            <CounterWidget name="Marketing" />
          </CounterProvider>

          <CounterProvider>
            <CounterWidget name="Sales" />
          </CounterProvider>

          <CounterProvider>
            <CounterWidget name="Finance" />
          </CounterProvider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
