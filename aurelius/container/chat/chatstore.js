import { create } from "zustand";

const useChatStore = create((set) => ({
  chatArray: [],
  isLoading: false,
  error: null,
  addUserChat: (message) =>
    set((state) => ({ chatArray: [...state.chatArray, message] })),
}));

export { useChatStore };
