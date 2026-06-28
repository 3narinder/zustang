import { create } from "zustand";

export const usePoststore = create((set) => ({
  posts: [],
  fetchPosts: async () => {
    const res = await fetch("https://dummyjson.com/posts?limit=5");
    const data = await res.json();

    set({ posts: data.posts });
  },

  addFakePost: () =>
    set((state) => ({
      posts: [
        ...state.posts,
        { id: Date.now(), title: "New Post", reactions: { likes: 0 } },
      ],
    })),
}));
