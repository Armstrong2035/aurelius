import { Box, Typography, Paper, Avatar } from "@mui/material";
import marcusAureliusBust from "../../public/images/marcus-aurelius-bust.png";
import Image from "next/image";

export default function SystemChat({ content }) {
  return (
    <Paper
      sx={{
        p: 2,
        backgroundColor: "#F7F7F7",
        display: "flex",
        direction: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Image
        src={marcusAureliusBust}
        width={48}
        height={48}
        style={{ borderRadius: 50 }}
      />
      <Typography>{content}</Typography>
    </Paper>
  );
}
