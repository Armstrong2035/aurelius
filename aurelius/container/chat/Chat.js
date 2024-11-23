"use client";
import React, { useState } from "react";
import SystemChat from "./SystemChat";
import UserChat from "./UserChat";
import Prompt from "./Prompt";
import { Grid2, Box, Container, AppBar, Toolbar } from "@mui/material";
import { useChatStore } from "./chatstore";

export default function Chat({}) {
  const chatArray = useChatStore((state) => state.chatArray);
  return (
    <Container
      sx={{
        flexGrow: 1, // Take up remaining space
        display: "flex", // Enable flex layout
        flexDirection: "column",
        pb: 10, // Padding bottom to avoid content behind AppBar
        pt: 2, // Optional top padding
      }}
    >
      <Grid2
        container
        direction="column"
        spacing={1}
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          pr: 20,
          pl: 20,
        }}
      >
        {chatArray.map((item, index) => (
          <Grid2 key={index} alignItems="center">
            {item.type === "system" ? (
              <SystemChat content={item.content} />
            ) : (
              <UserChat content={item.content} />
            )}
          </Grid2>
        ))}
      </Grid2>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 2,
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Prompt />
      </Box>
    </Container>
  );
}
