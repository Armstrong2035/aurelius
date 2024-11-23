"use client";
import React, { useState } from "react";
import SystemChat from "./SystemChat";
import UserChat from "./UserChat";
import Prompt from "./Prompt";
import { Grid2, Box, Container, AppBar, Toolbar } from "@mui/material";

export default function Chat({ chatArray }) {
  return (
    <Box
      sx={{
        minHeight: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
      }}
    >
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
            <Grid2 key={index} xs={12} sm={6} lg={6} alignItems="center">
              {item.type === "system" ? (
                <SystemChat content={item.content} />
              ) : (
                <UserChat content={item.content} />
              )}
            </Grid2>
          ))}

          <Grid2>
            <Prompt />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
