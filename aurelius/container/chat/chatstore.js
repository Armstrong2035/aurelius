// store/chatStore.js
import { create } from "zustand";

const useChatStore = create((set) => ({
  chatArray: [],
  isLoading: false,
  error: null,

  addUserChat: (message) => {
    set((state) => ({
      chatArray: [
        ...state.chatArray,
        {
          type: "user",
          content: message,
          timestamp: new Date().toISOString(),
          id: `msg_${Date.now()}`,
        },
      ],
    }));
  },

  addSystemChat: (message) => {
    set((state) => ({
      chatArray: [
        ...state.chatArray,
        {
          type: "system",
          content: message,
          timestamp: new Date().toISOString(),
          id: `msg_${Date.now()}`,
        },
      ],
    }));
  },

  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));

export { useChatStore };
