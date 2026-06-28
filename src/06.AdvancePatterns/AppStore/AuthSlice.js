export const createAuthSlice = (set) => ({
  user: null,
  login: (name) => set({ user: name }),
  logout: () => set({ user: null }),
});
