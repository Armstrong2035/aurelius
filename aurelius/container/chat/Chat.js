"use client";
import React, { useState } from "react";
import SystemChat from "./SystemChat";
import UserChat from "./UserChat";
import Prompt from "./Prompt";
import {
  Grid2,
  Box,
  Container,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { useChatStore } from "./chatstore";

export default function Chat({}) {
  const chatArray = useChatStore((state) => state.chatArray);
  const isLoading = useChatStore((state) => state.isLoading);

  return (
    <>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
        open={isLoading}
      >
        <CircularProgress color="inherit" size={60} />
      </Backdrop>

      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          pb: 10,
          pt: 2,
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
            bt: 5,
            borderColor: "divider",
            bgcolor: "background.paper",
          }}
        >
          <Prompt />
        </Box>
      </Container>
    </>
  );
}
