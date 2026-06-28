import { useEffect } from "react";
import { useDirectoryStor } from "./useDirectoryStore";

const UserDirectory = () => {
  const users = useDirectoryStor((state) => state.users);
  const isLoading = useDirectoryStor((state) => state.isLoading);
  const error = useDirectoryStor((state) => state.error);
  const fetchUsers = useDirectoryStor((state) => state.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 flex items-center justify-between sticky top-0">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              User Directory
            </h1>

            <p className="text-slate-500 mt-1">
              Data fetched using Zustand Global Store
            </p>
          </div>

          <button
            onClick={fetchUsers}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
          >
            Refresh
          </button>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="bg-white rounded-xl p-10 shadow text-center">
            <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>

            <h2 className="text-lg font-semibold">Loading users...</h2>
          </div>
        )}

        {/* Error */}
        {!isLoading && error && (
          <div className="bg-red-50 border border-red-300 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold text-red-600">
              Something went wrong
            </h2>

            <p className="text-red-500 mt-2">{error}</p>

            <button
              onClick={fetchUsers}
              className="mt-5 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && users.length === 0 && (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <h2 className="text-2xl font-semibold">No Users Found</h2>

            <p className="text-slate-500 mt-2">Click Refresh to load users.</p>
          </div>
        )}

        {/* Users */}
        {!isLoading && !error && users.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                    {user.name.charAt(0)}
                  </div>

                  <div>
                    <h2 className="font-bold text-lg">{user.name}</h2>

                    <p className="text-sm text-slate-500">@{user.username}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    📧 <span className="font-medium">{user.email}</span>
                  </p>

                  <p>
                    📞 <span className="font-medium">{user.phone}</span>
                  </p>

                  <p>
                    🌐 <span className="font-medium">{user.website}</span>
                  </p>

                  <p>
                    🏢 <span className="font-medium">{user.company.name}</span>
                  </p>

                  <p>
                    📍 <span className="font-medium">{user.address.city}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDirectory;
