import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Typography,
  Box,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import { AccountBalanceWallet } from "@mui/icons-material"; // Import the wallet icon

export default function Account() {
  const [amount, setAmount] = useState("");

  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Predefined amounts for quick top-up
  const predefinedAmounts = [5, 10, 15, 20, 25, 50];

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        style={{
          padding: 0,
          margin: "3rem 2rem 0rem",
          color: "var(--text-head)",
          fontWeight: 500,
          fontFamily: "var(--font-family)",
        }}
      >
        Account
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: " 0.5rem",
          backgroundColor: "var(--text-head)",
          opacity: "0.3",
        }}
      />

      <motion.div
        className="reportMain"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        <Container
          style={{
            display: "flex",
            maxWidth: "95%",
            padding: "0",
            margin: "2rem 0",
          }}
          sx={{
            flexDirection: {
              xs: "column", // Stack as column on small screens (below 800px)
              md: "row", // Row layout on medium and larger screens (800px and above)
            },
          }}
        >
          {/* Left Section (30%): Wallet Amount */}
          <Box
            sx={{
              flex: {
                xs: "100%", // Full width on small screens
                md: "30%", // 30% width on medium and above
              },
              backgroundColor: "var(--background-color)",
              color: "var(--text-color)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              boxShadow: "var(--box-shadow)",
              marginBottom: {
                xs: "1rem", // Add margin when stacked in column layout
                md: "0", // No margin when in row layout
              },
            }}
          >
            <AccountBalanceWallet
              sx={{
                fontSize: "3rem",
                marginBottom: "1rem",
                color: "var(--btn-bg)",
              }} // Icon styling
            />
            <Typography variant="h6" gutterBottom>
              Money in your wallet
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              € 250.00
            </Typography>
          </Box>

          {/* Right Section (70%): Add Money */}
          <Box
            sx={{
              flex: {
                xs: "100%", // Full width on small screens
                md: "70%", // 70% width on medium and above
              },
              backgroundColor: "white",
              padding: "2rem",
              marginLeft: {
                xs: "0", // No left margin on small screens
                md: "1rem", // Add margin in row layout
              },
              borderRadius: "8px",
              boxShadow: "var(--box-shadow)",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Add Money to Wallet
            </Typography>

            {/* Amount Input */}
            <TextField
              size="small"
              label="Enter amount"
              variant="outlined"
              fullWidth
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              InputProps={{
                style: {
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  color: "var(--text-color)",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "0.8rem",
                  color: "var(--text-color)",
                },
              }}
              sx={{
                width: "60%",
                margin: "1.5rem 0",
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
                  borderColor: "var(--btn-bg)", // Focused border color
                },
              }}
            />

            {/* Predefined Amounts */}
            <Box sx={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {predefinedAmounts.map((amt) => (
                <Button
                  key={amt}
                  variant="outlined"
                  color="primary"
                  onClick={() => setAmount(amt.toString())}
                  sx={{
                    width: "4rem",
                    height: "2.5rem",
                    fontSize: "0.875rem",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    textTransform: "none",
                  }}
                >
                  €{amt}
                </Button>
              ))}
            </Box>

            {/* Proceed Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center", 
                  md: "right", 
                },
                marginTop: "5rem",
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  width: {
                    xs: "80%", // Full width on extra small screens (mobile)
                    sm: "80%", // Half width on small screens (tablet)
                    md: "50%", // Less width on medium screens (small desktops)
                    lg: "30%",
                  },
                  padding: {
                    xs: "0.5rem", // Standard padding for all
                    sm: "0.5rem", // Adjust for small screens if needed
                  },
                  fontSize: {
                    xs: "0.7rem", // Slightly smaller font on mobile
                    sm: ".8rem", // Default for tablet and up
                  },
                  fontWeight: "bold",
                  borderRadius: "20px",
                  boxShadow: "var(--box-shadow)",
                }}
              >
                Proceed to Add
              </Button>
            </Box>
          </Box>
        </Container>
      </motion.div>
    </>
  );
}
