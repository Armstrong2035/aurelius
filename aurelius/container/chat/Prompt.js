// components/Prompt.js
"use client";
import React, { useRef, useState } from "react";
import { Box, IconButton, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import UserChat from "./UserChat";
import { askClaude } from "../../utils/askCalude";
import { useChatStore } from "./chatstore";
export default function Prompt() {
  const formRef = useRef(null);

  const addUserChat = useChatStore((state) => state.addUserChat);
  const addSystemChat = useChatStore((state) => state.addSystemChat);
  const setIsLoading = useChatStore((state) => state.setIsLoading);
  const isLoading = useChatStore((state) => state.isLoading);

  async function handleSubmit(formData) {
    const message = formData.get("message");
    if (!message?.trim()) return;

    setIsLoading(true);
    try {
      // Add user message to chat
      addUserChat(message);

      // Get Claude's response
      const response = await askClaude(message);

      // Add system response to chat
      addSystemChat(response);

      // Clear the form
      formRef.current?.reset();
    } catch (error) {
      console.error("Chat error:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 2,
        backgroundColor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <form
        ref={formRef}
        action={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input
          id="input"
          type="text"
          name="message"
          required
          disabled={isLoading}
          placeholder="Ask something..."
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        />
      </form>
      <IconButton>
        <SendIcon />
      </IconButton>
    </Box>
  );
}
