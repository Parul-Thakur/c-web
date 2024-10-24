import React, { useState } from "react";
import {
  Box,
  Divider,
  Button,
  IconButton,
  TextField,
  Typography,
  InputAdornment,
  Grid,
} from "@mui/material";
import { Refresh } from "@mui/icons-material";
import resetPasswordImage from "../../Images/rb_16292.png"; // Import your image

export default function ResetAccessKey() {
  const [accessKey, setAccessKey] = useState("875633");

  // Function to generate a random 6-digit access key
  const generateAccessKey = () => {
    const key = Math.floor(100000 + Math.random() * 900000).toString(); // Generates 6-digit random number
    setAccessKey(key);
  };

  // Function to reset the access key field
  const resetAccessKey = () => {
    setAccessKey("");
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "var(--color)",
          color: "var(--text-color)",
        }}
      >
        <Typography variant="h7" component="h5" gutterBottom>
          Unique code used for card registration
        </Typography>
      </Box>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: "1rem 0",
          backgroundColor: "var(--text-head)",
          opacity: "0.1",
        }}
      />
      <Grid container spacing={2} sx={{ padding: "1rem" }}>
        {/* Left Side: Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: {
              xs: "column", // Stack in column on extra-small screens
              md: "column", // Stack in column on medium screens
            },
          }}
        >
          <img
            src={resetPasswordImage}
            alt="description"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(.4px)",
            }}
          />
        </Grid>

        {/* Right Side: Fields and Button */}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: {
                xs: "column", // Stack in column on extra-small screens
                md: "column", // Stack in column on medium screens
              },
              gap: "2rem",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", sm: "1rem" },
                fontWeight: "bold",
                color: "var(--text-color)",
                textAlign: { sm: "center" },
              }}
            >
              Generate a unique access key to securely register your card.
            </Typography>
            {/* Text field displaying the generated access key */}
            <TextField
              fullWidth
              size="small"
              label="Access Key"
              value={accessKey}
              variant="outlined"
              InputProps={{
                style: {
                  fontSize: "0.8rem",
                  color: "var(--text-color)",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={resetAccessKey}>
                      <Refresh sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "20px",
                  height: "2rem",
                  fontSize: "0.8rem",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "var(--grey)",
                    },
                    "&:hover fieldset": {
                      borderColor: "var(--btn-bg)",
                    },
                  },
                  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--btn-bg)",
                  },
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "0.8rem",
                  color: "var(--text-color)",
                },
              }}
              disabled={!accessKey} // Disable until the access key is generated
            />
            {/* Button to generate access key */}
            <Button
              variant="outlined"
              color="primary"
              onClick={generateAccessKey}
              sx={{
                height: "2rem",
                padding: {
                  xs: "0.75rem",
                  sm: ".5rem 0",
                },
                fontSize: {
                  xs: "0.6rem",
                  sm: ".8rem",
                },
                width: "100%",
                fontWeight: "600",
                borderRadius: "20px",
                boxShadow: "var(--box-shadow)",
                "&:hover": {
                  backgroundColor: "transparent", // Hover effect
                },
              }}
            >
              Generate Access Key
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
