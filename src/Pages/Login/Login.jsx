import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/caleta-logo-removebg-preview.png";
import { motion } from "framer-motion";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const LoginForm = () => {
  const [accessC, setAccessC] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPin, setShowPin] = useState(false);
  const handleClickShowPin = () => setShowPin(!showPin);

  const handleSignIn = (event) => {
    event.preventDefault();
    if (accessC === "" || pin === "") {
      setError("Access Code and Pin are required.");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ accessC, pin }));
    setError("");
    navigate("/upload-print");
  };

  return (
    <>
      <Grid container sx={{ height: "100vh", padding: 0, margin: 0 }}>
        {/* Left Side: Form and Logo */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            bgcolor: "var(--background-color)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "0px",
              left: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <img
              src={logo}
              alt="logo"
              style={{ maxWidth: "4rem", height: "auto" }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: "2.5rem",
                marginLeft: "10px",
                fontWeight: "500",
                color: "#356076",
              }}
            >
              Caleta
            </Typography>
          </Box>

          <Box sx={{ width: "80%", textAlign: "center" }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: ".7rem",
                    sm: ".8rem",
                  },
                  fontWeight: "bold",
                  color: "var(--text-grey)",
                }}
              >
                Sign in by entering the information below
              </Typography>
            </Box>
            <Box component="form" onSubmit={handleSignIn}>
              <Box sx={{ width: "100%", marginBottom: "1.5rem" }}>
                <TextField
                  fullWidth
                  // size="small"
                  label="Access Code"
                  variant="outlined"
                  value={accessC}
                  onChange={(e) => setAccessC(e.target.value)}
                  placeholder="Enter Access Code"
                  InputProps={{
                    style: {
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
              </Box>

              {/* Password Field */}
              <Box sx={{ width: "100%", marginBottom: "2.5rem" }}>
                <TextField
                  fullWidth
                  // size="small"
                  label="PIN"
                  variant="outlined"
                  type={showPin ? "text" : "password"}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter pin"
                  InputProps={{
                    style: {
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                    },
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          marginRight: "0", // Ensure no extra margin is added
                          visibility: "visible", // Force visibility if there are issues
                        }}
                      >
                        <IconButton
                          onClick={handleClickShowPin}
                          sx={{
                            padding: "6px",
                          }}
                        >
                          {showPin ? (
                            <Visibility
                              sx={{
                                color: "var(--text-grey)",
                                fontSize: "1.2rem",
                              }}
                            />
                          ) : (
                            <VisibilityOff
                              sx={{
                                color: "var(--text-grey)",
                                fontSize: "1.2rem",
                              }}
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
              </Box>

              {error && (
                <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}

              <Box sx={{ textAlign: "center" }}>
                <Button
                  fullWidth
                  type="submit"
                  size="small"
                  variant="contained"
                  onClick={handleSignIn}
                  sx={{
                    backgroundColor: "#356076",
                    padding: {
                      xs: "0.75rem",
                      sm: ".5rem 0",
                    },
                    fontSize: {
                      xs: "0.875rem",
                      sm: "1rem",
                    },
                    fontWeight: "600",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#356076", // Hover effect
                    },
                  }}
                >
                  Continue
                </Button>
                <Typography
                  variant="body1"
                  gutterBottom
                  mt={4}
                  sx={{
                    fontSize: {
                      xs: ".7rem",
                      sm: ".8rem",
                    },
                    fontWeight: "bold",
                    color: "#5E6668",
                  }}
                >
                  Forgot your password?{" "}
                  <span style={{ color: "#4682A9" }}> Reset Password</span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right Side: Text */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            bgcolor: "#356076",
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "80%", color: "#ffffff", textAlign: "center" }}>
            <Box
              sx={{
                animation: "bounce 3s ease-in-out infinite",
                position: "fixed",
                top: "-24vh",
                left: "-10vw",
                width: "30vw",
                height: "30vw",
                transform: "rotate(180deg)",
                zIndex: 1,
              }}
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="rgba(34, 120, 169, 0.29)"
                  d="M47.3,-54.4C59.5,-46.1,66.5,-29.5,63.9,-15.5C61.2,-1.5,49.1,9.9,40.3,21.5C31.5,33.2,26.1,45.1,15.4,54.1C4.6,63.2,-11.5,69.5,-29,68.2C-46.6,66.8,-65.7,57.9,-75.5,42.7C-85.4,27.5,-86.1,6.1,-78.3,-9.6C-70.6,-25.3,-54.3,-35.4,-39.9,-43.3C-25.4,-51.2,-12.7,-57,2.4,-59.8C17.5,-62.7,35,-62.7,47.3,-54.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </Box>
            <Box
              sx={{
                animation: "bounce 3s ease-in-out infinite",
                position: "fixed",
                top: "-24vh",
                right: "-10vw",
                width: "30vw",
                height: "30vw",
                transform: "rotate(180deg)",
                zIndex: 1,
              }}
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="rgba(34, 120, 169, 0.29)"
                  d="M47.3,-54.4C59.5,-46.1,66.5,-29.5,63.9,-15.5C61.2,-1.5,49.1,9.9,40.3,21.5C31.5,33.2,26.1,45.1,15.4,54.1C4.6,63.2,-11.5,69.5,-29,68.2C-46.6,66.8,-65.7,57.9,-75.5,42.7C-85.4,27.5,-86.1,6.1,-78.3,-9.6C-70.6,-25.3,-54.3,-35.4,-39.9,-43.3C-25.4,-51.2,-12.7,-57,2.4,-59.8C17.5,-62.7,35,-62.7,47.3,-54.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </Box>
            <Box
              sx={{
                animation: "bounce 3s ease-in-out infinite",
                position: "fixed",
                bottom: "-25vh",
                right: "-10vw",
                width: "40vw",
                height: "40vw",
                transform: "rotate(-15deg)",
                zIndex: 1,
              }}
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="rgba(0, 0, 0, 0.25)"
                  d="M41.7,-68.9C55.1,-64.5,67.9,-55.5,67,-43.3C66.2,-31,51.8,-15.5,50.1,-0.9C48.5,13.6,59.7,27.3,58.6,36.1C57.4,44.9,43.9,48.8,32.1,57.2C20.3,65.5,10.2,78.2,-2,81.6C-14.1,85,-28.2,79.2,-35.1,68C-42.1,56.8,-41.8,40.4,-50.5,28.2C-59.3,16,-76.9,8,-80.5,-2.1C-84.1,-12.1,-73.6,-24.3,-61.5,-30.7C-49.5,-37.2,-35.9,-37.9,-25.4,-44.1C-14.9,-50.2,-7.4,-61.6,3.3,-67.4C14.1,-73.2,28.3,-73.3,41.7,-68.9Z"
                  transform="translate(100 100)"
                />
              </svg>
            </Box>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "2.75rem",
                  md: "3rem",
                },
                fontWeight: "bold",
                color: "var(--btn-text)",
                textAlign: "left",
              }}
            >
              Welcome to
              <span style={{ color: "#91C8E4" }}> Caleta</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "left", color: "var(--btn-text)" }}
            >
              Access personalized settings, print history, and exclusive offers
              by logging in.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
