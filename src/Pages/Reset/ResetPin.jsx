import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import resetPasswordImage from "../../Images/rb_3180.png";

export default function ResetPin() {
  const [showPin, setShowPin] = useState(false);
  const [open, setOpen] = useState(false);
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [pin, setPin] = useState("34");

  const handleClickShowPin = () => setShowPin((prev) => !prev);
  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "var(--color)",
          color: "var(--text-color)",
        }}
      >
        <Typography variant="h7" component="h5" gutterBottom>
          Unique code used for authentication
        </Typography>
      </Box>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: "1rem 0",
          backgroundColor: "var(--text-head)",
          opacity: "0.3",
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
              height: "auto",
              objectFit: "cover",
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
                xs: "column",
                md: "column",
              },
              gap: "2rem",
            }}
          >
            {/* Current PIN Field */}
            <TextField
              fullWidth
              size="small"
              label="Current PIN"
              variant="outlined"
              type={showPin ? "text" : "password"}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter pin"
              InputProps={{
                style: {
                  borderRadius: "20px",
                  height: "2rem",
                  fontSize: "0.8rem",
                  color: "var(--text-color)",
                },
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{ marginRight: "0", visibility: "visible" }}
                  >
                    <IconButton
                      onClick={handleClickShowPin}
                      sx={{ padding: "6px" }}
                    >
                      {showPin ? (
                        <Visibility
                          sx={{ color: "var(--text-grey)", fontSize: "1.2rem" }}
                        />
                      ) : (
                        <VisibilityOff
                          sx={{ color: "var(--text-grey)", fontSize: "1.2rem" }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: {
                  fontSize: "0.8rem",
                  color: "var(--text-color)",
                },
              }}
              sx={{
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
              }}
            />

            {/* Change PIN Button */}
            <Button
              variant="outlined"
              color="primary"
              onClick={handleOpenDialog}
              sx={{
                height: "2rem",
                padding: {
                  xs: "0.75rem",
                  sm: ".5rem 0",
                },
                fontSize: {
                  xs: "0.7rem",
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
              Change PIN
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Dialog for Changing PIN */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Change PIN</DialogTitle>
        <DialogContent>
          {/* New PIN Field */}
          <TextField
            label="New PIN"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={newPin}
            onChange={(e) => setNewPin(e.target.value)}
          />

          {/* Confirm PIN Field */}
          <TextField
            label="Confirm New PIN"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={confirmPin}
            onChange={(e) => setConfirmPin(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              // Logic to change the PIN goes here
              handleCloseDialog();
            }}
            color="primary"
          >
            Approve
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
