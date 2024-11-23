import {
  Box,
  Card,
  CardContent,
  Paper,
  Typography,
  Avatar,
} from "@mui/material";

export default function UserChat({ content }) {
  return (
    <Paper
      sx={{
        p: 3,
        backgroundColor: "#E9EEF6",
        display: "flex",
        direction: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Avatar sx={{ bgcolor: "#7C5CBF" }}>Me</Avatar>

      <Typography>{content}</Typography>
    </Paper>
  );
}
