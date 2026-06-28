import { useEffect, useState } from "react";
import { useCartStore } from "./useCartStore";

const products = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `Zustand Course #${index + 1}`,
  description:
    "Master Zustand with persistence, middleware, selectors and best practices.",
  price: 99,
}));

const ShoppingCart = () => {
  const { items, addItem, clearCart } = useCartStore();

  const [isHydration, setIsHydration] = useState(false);

  useEffect(() => {
    setIsHydration(true);
  }, []);

  if (!isHydration) {
    return (
      <div className="flex h-screen items-center justify-center bg-stone-100">
        <div className="rounded-2xl border border-stone-200 bg-white px-8 py-6 shadow-sm">
          <p className="text-stone-600">Loading cart...</p>
        </div>
      </div>
    );
  }

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="grid h-screen grid-cols-1 lg:grid-cols-3 bg-stone-50">
      {/* Products */}
      <section className="col-span-2 flex flex-col overflow-hidden border-r border-stone-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 bg-white px-8 py-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
              Zustand Store
            </h1>

            <p className="mt-1 text-sm text-stone-500">
              A minimal shopping experience powered by Zustand Persist.
            </p>
          </div>

          <button
            onClick={() =>
              addItem({
                id: crypto.randomUUID(),
                name: "Zustand Course",
                price: 99,
              })
            }
            className="rounded-xl bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            Add Course
          </button>
        </div>

        {/* Products */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-stone-300 hover:shadow-md"
              >
                <div className="mb-5 flex h-40 items-center justify-center rounded-xl bg-stone-100 text-6xl">
                  📘
                </div>

                <h3 className="text-lg font-medium text-stone-900">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-stone-500">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-semibold text-stone-900">
                    ${product.price}
                  </span>

                  <button
                    onClick={() =>
                      addItem({
                        id: crypto.randomUUID(),
                        name: product.name,
                        price: product.price,
                      })
                    }
                    className="rounded-lg border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart */}
      <aside className="flex h-screen flex-col bg-white">
        {/* Header */}
        <div className="border-b border-stone-200 px-6 py-6">
          <h2 className="text-2xl font-semibold text-stone-900">
            Shopping Cart
          </h2>

          <div className="mt-5 flex items-center justify-between">
            <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700">
              {items.length} {items.length === 1 ? "Item" : "Items"}
            </span>

            <button
              onClick={clearCart}
              className="text-sm text-stone-500 transition hover:text-red-500"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="mt-20 text-center">
              <div className="text-5xl">🛍️</div>
              <p className="mt-4 text-stone-500">Your cart is empty.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-stone-200 bg-white p-4"
                >
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-stone-900">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-stone-500">
                        Premium Course
                      </p>
                    </div>

                    <span className="font-semibold text-stone-900">
                      ${item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-stone-200 p-6">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-stone-500">Total</span>

            <span className="text-xl font-semibold text-stone-900">
              ${total}
            </span>
          </div>

          <button className="w-full rounded-xl bg-stone-900 py-3 font-medium text-white transition hover:bg-stone-800">
            Checkout
          </button>

          <p className="mt-4 text-center text-xs text-stone-400">
            Powered by Zustand Persist
          </p>
        </div>
      </aside>
    </div>
  );
};

export default ShoppingCart;
