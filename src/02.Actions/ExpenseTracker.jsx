import { useState } from "react";
import { useExpenseStore } from "./useExpenseStore";

const ExpenseTracker = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const transactions = useExpenseStore((state) => state.transactions);

  const addTransaction = useExpenseStore((state) => state.addTransaction);

  const deleteTransaction = useExpenseStore((state) => state.deleteTransaction);

  const totalBalance = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim() || !amount) return;

    addTransaction(description, Number(amount));

    setDescription("");
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-2">Expense Tracker</h1>

        <p className="text-center text-slate-500 mb-6">Powered by Zustand</p>

        {/* Balance Card */}
        <div className="bg-indigo-600 text-white rounded-xl p-6 text-center mb-6">
          <p className="text-sm uppercase tracking-wide">Current Balance</p>

          <h2 className="text-4xl font-bold mt-2">
            ${totalBalance.toFixed(2)}
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Transaction description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="number"
            placeholder="Amount (e.g. -20 or 100)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-lg"
          >
            Add Transaction
          </button>
        </form>

        {/* Transactions */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Transactions</h3>

          {transactions.length === 0 ? (
            <div className="text-center py-8 text-slate-500 border rounded-lg">
              No transactions added yet.
            </div>
          ) : (
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex justify-between items-center border rounded-lg p-4 shadow-sm"
                >
                  <div>
                    <p className="font-semibold">{transaction.description}</p>

                    <p
                      className={`font-bold ${
                        transaction.amount >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      ${transaction.amount}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteTransaction(transaction.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
