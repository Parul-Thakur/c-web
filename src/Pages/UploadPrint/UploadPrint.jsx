
import React from "react";
import FileUpload from "../../Components/FileUpload/FileUpload";
import { Box } from "@mui/material";

function UploadPrint() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh", 
        backgroundColor: "var(--bg-color)", // Optional: for background styling
      }}
    >
      <FileUpload />
    </Box>
  );
}

export default UploadPrint;
