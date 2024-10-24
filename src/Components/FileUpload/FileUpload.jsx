import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  Popover,
  Radio,
  RadioGroup,
  FormControlLabel,
  useMediaQuery,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PaletteIcon from "@mui/icons-material/Palette";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import PrintIcon from "@mui/icons-material/Print";
import AspectRatioIcon from "@mui/icons-material/AspectRatio"; // For orientation icon
import { motion } from "framer-motion";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [copies, setCopies] = useState(1);
  const [colorMode, setColorMode] = useState("color");
  const [doubleSided, setDoubleSided] = useState("double");
  const [paperSize, setPaperSize] = useState("a4");
  const [orientation, setOrientation] = useState("portrait"); // State for page orientation
  const [anchorEl, setAnchorEl] = useState(null); // State for Popover anchor
  const [selectedOption, setSelectedOption] = useState("");

  // Handle file change
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  // Increment copies
  const handleIncrement = () => {
    setCopies((prevCopies) => prevCopies + 1);
  };

  // Decrement copies
  const handleDecrement = () => {
    if (copies > 1) {
      setCopies((prevCopies) => prevCopies - 1);
    }
  };

  // Open popover for option selection
  const handleOpenPopover = (event, option) => {
    setSelectedOption(option);
    setAnchorEl(event.currentTarget); // Set anchor to the text clicked
  };

  // Close popover and set selected option
  const handleClosePopover = (mode) => {
    if (selectedOption === "colorMode") {
      setColorMode(mode);
    } else if (selectedOption === "doubleSided") {
      setDoubleSided(mode);
    } else if (selectedOption === "paperSize") {
      setPaperSize(mode);
    } else if (selectedOption === "orientation") {
      setOrientation(mode);
    }
    setAnchorEl(null); // Close the popover
  };

  const isSmallScreen = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "90%", md: "70%" },
        margin: "0 auto",
        padding: 3,
      }}
    >
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        {/* File Upload Section */}
        <Grid item xs={12} md={8}>
          <Box
            component={motion.div}
            sx={{
              width: "100%",
              height: { xs: 250, sm: 300, md: 350 },
              border: "2px dashed var(--text-color)",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <UploadFileIcon
              sx={{ fontSize: { xs: 40, sm: 50 }, color: "var(--btn-bg)" }}
            />
            <Typography sx={{ color: "var(--text-color)", marginTop: 1 }}>
              {file ? file.name : "No file chosen"}
            </Typography>
            <Button
              component="label"
              sx={{
                marginTop: "2rem",
                color: "var(--btn-text)",
                textTransform: "none",
                border: "1px solid var(--btn-bg)",
                borderRadius: "20px",
                padding: "8px 16px",
              }}
            >
              <Typography sx={{ color: "var(--btn-bg)" }}>
                Choose file
              </Typography>
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
          </Box>

          {/* Number of Copies */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 3,
            }}
          >
            <Typography
              sx={{
                marginRight: 2,
                fontSize: "18px",
                color: "var(--text-color)",
              }}
            >
              Copies:
            </Typography>
            <IconButton
              onClick={handleDecrement}
              sx={{ border: "1px solid #7cacf8", borderRadius: "50%" }}
            >
              <RemoveIcon />
            </IconButton>
            <Typography
              sx={{ margin: "0 20px", fontSize: "18px", color: "#7cacf8" }}
            >
              {copies}
            </Typography>
            <IconButton
              onClick={handleIncrement}
              sx={{ border: "1px solid #7cacf8", borderRadius: "50%" }}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Options Section using Grid */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
              {/* Color Mode Option */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={(e) => handleOpenPopover(e, "colorMode")}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 50,
                    height: 50,
                    border: "2px solid var(--grey)",
                    borderRadius: "50%",
                    marginRight: 2,
                  }}
                >
                  <PaletteIcon
                    sx={{
                      fontSize: 30,
                      color:
                        colorMode === "color"
                          ? "var(--text-color)"
                          : "var(--btn-bg)",
                    }}
                  />
                </Box>
                <Typography sx={{ color: "var(--text-color)" }}>
                  Output
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} md={12}>
              {/* Double-Sided Option */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={(e) => handleOpenPopover(e, "doubleSided")}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 50,
                    height: 50,
                    border: "2px solid var(--grey)",
                    borderRadius: "50%",
                    marginRight: 2,
                  }}
                >
                  <DoubleArrowIcon
                    sx={{
                      fontSize: 30,
                      color:
                        doubleSided === "double"
                          ? "var(--text-color)"
                          : "var(--btn-bg)",
                    }}
                  />
                </Box>
                <Typography sx={{ color: "var(--text-color)" }}>
                  Page Side
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} md={12}>
              {/* Paper Size Option */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={(e) => handleOpenPopover(e, "paperSize")}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 50,
                    height: 50,
                    border: "2px solid var(--grey)",
                    borderRadius: "50%",
                    marginRight: 2,
                  }}
                >
                  <PrintIcon
                    sx={{ fontSize: 30, color: "var(--text-color)" }}
                  />
                </Box>
                <Typography sx={{ color: "var(--text-color)" }}>
                  Page Size
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} md={12}>
              {/* Page Orientation Option */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={(e) => handleOpenPopover(e, "orientation")}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 50,
                    height: 50,
                    border: "2px solid var(--grey)",
                    borderRadius: "50%",
                    marginRight: 2,
                  }}
                >
                  <AspectRatioIcon
                    sx={{
                      fontSize: 30,
                      color:
                        orientation === "portrait"
                          ? "var(--text-color)"
                          : "var(--btn-bg)",
                    }}
                  />
                </Box>
                <Typography sx={{ color: "var(--text-color)" }}>
                  Orientation
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={12} container>
                  <Grid item>
                    <Box
                      sx={{
                        marginTop: 5,
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "var(--btn-bg)",
                          color: "var(--btn-text)",
                          borderRadius: "20px",
                          padding: "10px 20px",
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Popover for Options */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            {selectedOption === "colorMode" ? "Select Output" : null}
            {selectedOption === "doubleSided" ? "Select Page Side" : null}
            {selectedOption === "paperSize" ? "Select Page Size" : null}
            {selectedOption === "orientation" ? "Select Orientation" : null}
          </Typography>
          <RadioGroup
            value={
              selectedOption === "colorMode"
                ? colorMode
                : selectedOption === "doubleSided"
                ? doubleSided
                : selectedOption === "paperSize"
                ? paperSize
                : orientation
            }
            onChange={(e) => handleClosePopover(e.target.value)}
          >
            {selectedOption === "colorMode" && (
              <>
                <FormControlLabel
                  value="color"
                  control={<Radio />}
                  label="Color"
                />
                <FormControlLabel
                  value="bw"
                  control={<Radio />}
                  label="Black & White"
                />
              </>
            )}
            {selectedOption === "doubleSided" && (
              <>
                <FormControlLabel
                  value="double"
                  control={<Radio />}
                  label="Double-Sided"
                />
                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Single-Sided"
                />
              </>
            )}
            {selectedOption === "paperSize" && (
              <>
                <FormControlLabel value="a4" control={<Radio />} label="A4" />
                <FormControlLabel value="a3" control={<Radio />} label="A3" />
              </>
            )}
            {selectedOption === "orientation" && (
              <>
                <FormControlLabel
                  value="portrait"
                  control={<Radio />}
                  label="Portrait"
                />
                <FormControlLabel
                  value="landscape"
                  control={<Radio />}
                  label="Landscape"
                />
              </>
            )}
          </RadioGroup>
        </Box>
      </Popover>
    </Box>
  );
};

export default FileUpload;
