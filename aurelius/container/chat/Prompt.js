"use client";
import { Box, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import React from "react";
export default function Prompt() {
  const [newPrompt, setNewPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = async (e) => {
    //function for form validation (security purposes  )

    setNewPrompt(e.target.value);
  };

  useCallback(() => {
    const sendToClaude = async () => {
      //await function to send the prompt to the chatArray
      //await function to send to claude using newPrompt as a parameter. When you write this function in the server, it should also send it to chatArray
      //The objective here is for the prompt to get to chatArray first.
    };
  }, [newPrompt]);

  return (
    <Box>
      <TextField label={"Talk to Aurelius"} variant="outlined" fullWidth />
    </Box>
  );
}
