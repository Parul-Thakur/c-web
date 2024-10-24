import React from "react";
import { Box, Typography } from "@mui/material";

const Card = ({ title, value }) => {
  return (
    <Box
      sx={{
        padding: "2rem 1rem",
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 3,
        boxShadow: 3,
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h6"
        component="h3"
        gutterBottom
        sx={{
          color: "var(--text-grey)", // Text color
          fontWeight: "bold", // Bold text
          padding: "0.5rem 1rem", // Padding around the text itself
          textAlign: "center",
          fontSize: " 1rem",
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1" component="p">
        {value}
      </Typography>
    </Box>
  );
};

export default Card;
