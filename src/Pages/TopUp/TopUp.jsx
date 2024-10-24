import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Box,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
} from "@mui/material";

export default function TopUp() {
  const navigate = useNavigate();
  const [showCustomAmount, setShowCustomAmount] = useState(false); // State to show/hide the text field
  const [customAmount, setCustomAmount] = useState(""); // State to hold the custom amount

  const handleTopUpClick = () => {
    navigate("/topup"); // Replace with your TopUp page route
  };

  const handleOtherClick = () => {
    setShowCustomAmount(true); // Show the text field when "Other" is clicked
  };

  return (
    <motion.div
      initial={{ y: "-50%", opacity: 0, scale: 0.8 }}
      animate={{ y: "0%", opacity: 1, scale: 1 }}
      exit={{ y: "50%", opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="webContainer"
    >
      <div className="webTable">
        <Container
          component={Paper}
          elevation={3}
          style={{ padding: 0, margin: "3rem 0", maxWidth: "95%" }}
        >
          <Box
            sx={{
              backgroundColor: "var(--search-bg)",
              padding: "1rem",
              marginBottom: "-1px",
              color: "var(--text-grey)",
            }}
          >
            <Typography variant="h10" component="h4" gutterBottom>
              Value
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "2rem ",
              backgroundColor: "var(--color)",
              color: "var(--text-grey)",
            }}
          >
            <form>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={2}
                sx={{ margin: "5rem 0" }}
              >
                <Grid
                  item
                  xs={12}
                  md={8} // Adjust width to fit all buttons
                >
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                      <Button
                        variant="contained"
                        onClick={handleTopUpClick}
                        type="submit"
                        sx={{
                          color: "var(--text-grey)",
                          backgroundColor: "var(--transparent)",
                          padding: ".8rem 2rem",
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            backgroundColor: "var(--secondary-color)",
                            transform: "scale(1.05)", 
                            color: "var(--color)",// Slight scaling on hover
                          },
                        }}
                      >
                        € 2.00
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        onClick={handleTopUpClick}
                        type="submit"
                        sx={{
                          color: "var(--color)",
                          backgroundColor: "var( --primary-color)",
                          padding: ".8rem 2rem",
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            backgroundColor: "var(--secondary-color)",
                            transform: "scale(1.05)", // Slight scaling on hover
                          },
                        }}
                      >
                        € 5.00
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        onClick={handleTopUpClick}
                        type="submit"
                        sx={{
                          color: "var(--color)",
                          backgroundColor: "var( --primary-color)",
                          padding: ".8rem 2rem",
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            backgroundColor: "var(--secondary-color)",
                            transform: "scale(1.05)", // Slight scaling on hover
                          },
                        }}
                      >
                        € 10.00
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        onClick={handleTopUpClick}
                        type="submit"
                        sx={{
                          color: "var(--color)",
                          backgroundColor: "var( --primary-color)",
                          padding: ".8rem 2rem",
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            backgroundColor: "var(--secondary-color)",
                            transform: "scale(1.05)", // Slight scaling on hover
                          },
                        }}
                      >
                        € 15.00
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        onClick={handleOtherClick}
                        type="button" // Use type="button" to avoid form submission
                        sx={{
                          color: "var(--color)",
                          backgroundColor: "var( --primary-color)",
                          padding: ".8rem 2rem",
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            backgroundColor: "var(--secondary-color)",
                            transform: "scale(1.05)", // Slight scaling on hover
                          },
                        }}
                      >
                        Other
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>

                {showCustomAmount && (
                  <Grid item xs={12} md={8}>
                    <FormControl
                      fullWidth
                      variant="filled"
                      sx={{ mt: 2 }} // Margin top for spacing
                    >
                      <InputLabel htmlFor="custom-amount">Amount</InputLabel>
                      <FilledInput
                        id="custom-amount"
                        startAdornment={
                          <InputAdornment position="start">€</InputAdornment>
                        }
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        sx={{
                          backgroundColor: "var(--input-bg-color)",
                          color: "var(--text-color)",
                          "& .MuiInputBase-input": {
                            color: "var(--text-color)",
                          },
                        }}
                      />
                    </FormControl>
                  </Grid>
                )}

                <Grid item xs={12} mt={5} >
                  <Button
                    variant="contained"
                    onClick={handleTopUpClick}
                    type="submit"
                    sx={{
                      // border:"1px solid var(--secondary-color)",
                      color: "var(--text-grey)",
                      backgroundColor: "transparent",
                      padding: ".8rem 5rem",
                      mt: 2, // Margin top for spacing
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                     
                        backgroundColor: "transparent",
                        transform: "scale(1.05)", // Slight scaling on hover
                      },
                    }}
                  >
                    Pay
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </div>
    </motion.div>
  );
}
