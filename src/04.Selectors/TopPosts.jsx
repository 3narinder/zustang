import { useShallow } from "zustand/shallow";
import { usePoststore } from "./usePostStore";
import { useEffect } from "react";
import PostCounter from "./PostCounter";

const TopPosts = () => {
  const { fetchPosts, addFakePost } = usePoststore();

  const topPosts = usePoststore(
    useShallow((state) =>
      state.posts.filter((post) => post.reactions?.likes > 50),
    ),
  );

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="max-w-2xl mx-auto mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
      <PostCounter />

      <button
        onClick={addFakePost}
        className="mt-4 mb-6 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 active:scale-95"
      >
        Add Fake Post (Changes Count!)
      </button>

      <h4 className="mb-4 text-xl font-bold text-gray-800">
        Highly Liked Posts
      </h4>

      <ul className="space-y-3">
        {topPosts.map((post) => (
          <li
            key={post.id}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 transition hover:bg-gray-100"
          >
            <span className="font-medium text-gray-800">{post.title}</span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              👍 {post.reactions.likes} Likes
            </span>
          </li>
        ))}
      </ul>

      {topPosts.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          No highly liked posts found.
        </p>
      )}
    </div>
  );
};

export default TopPosts;
