"use client";
import { Box, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useChatStore } from "./chatstore";

import React from "react";

export default function Prompt() {
  const addUserChat = useChatStore((state) => state.addUserChat);
  async function handleSubmit(formData) {
    const message = formData.get("message");

    const createChat = () => {
      const messageObject = {
        type: "user",
        content: message,
        timestamp: new Date().toISOString(),
      };
      addUserChat(messageObject);
    };

    await createChat();
    //console.log(message);
  }
  //   const [newPrompt, setNewPrompt] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);

  //   cos

  //   const handleInput = async (e) => {
  //     //function for form validation (security purposes  )

  //     setNewPrompt(e.target.value);

  //   };

  //   useCallback(() => {
  //     const sendToClaude = async () => {

  //       //await function to send the prompt to the chatArray
  //       //await function to send to claude using newPrompt as a parameter. When you write this function in the server, it should also send it to chatArray
  //       //The objective here is for the prompt to get to chatArray first.
  //     };
  //   }, [newPrompt]);

  return (
    <Box>
      <form
        action={handleSubmit}
        style={{
          display: "flex",
          direction: "row",
          backgroundColor: "inherit",
        }}
      >
        <input
          id="input"
          type="text"
          name="message"
          required
          style={{ width: "100%", padding: "30px" }}
        />
        <button type={"submit"}>
          <SendIcon />
        </button>
      </form>
    </Box>
  );
}
