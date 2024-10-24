import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  Box,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DescriptionIcon from "@mui/icons-material/Description";
import FeatureIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";
import ResetPin from "../Reset/ResetPin";
import ResetAccessKey from "../Reset/ResetAccessKey";
import ResetAccessCode from "../Reset/ResetAccessCode";
import { useMediaQuery } from "@mui/material";

// Define the full width of the internal drawer/sidebar
const internalDrawerWidth = 200;
const collapsedDrawerWidth = 60; // Define a smaller width for collapsed state

const icons = {
  Pin: <InfoIcon sx={{ color: "var(--text-color)" }} />,
  AccessCode: <DescriptionIcon sx={{ color: "var(--text-color)" }} />,
  AccessKey: <FeatureIcon sx={{ color: "var(--text-color)" }} />,
};

export default function LLA() {
  const [currentPage, setCurrentPage] = useState("Pin");

  // Use useMediaQuery hook to check if the screen width is less than 1220px
  const isSmallScreen = useMediaQuery("(max-width: 1220px)");

  // Function to render the selected component based on the current page
  const renderContent = () => {
    switch (currentPage) {
      case "Pin":
        return <ResetPin />;
      case "AccessCode":
        return <ResetAccessCode />;
      case "AccessKey":
        return <ResetAccessKey />;
      default:
        return <ResetPin />;
    }
  };

  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
        Setting
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: "0.5rem",
          backgroundColor: "var(--text-head)",
          opacity: "0.3",
        }}
      />

      <motion.div
        className="main"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        <Container style={{ padding: 0, margin: "0 0 3rem" }}>
          <Box
            sx={{
              display: "flex",
              marginTop: "3rem",
              borderRadius: "1rem",
              boxShadow: "var(--box-shadow)",
            }}
          >
            {/* Internal Sidebar/Drawer */}
            <Drawer
              variant="permanent"
              sx={{
                width: isSmallScreen ? collapsedDrawerWidth : internalDrawerWidth, // Collapse or expand the drawer
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  width: isSmallScreen ? collapsedDrawerWidth : internalDrawerWidth, // Adjust drawer width on smaller screens
                  boxSizing: "border-box",
                  position: "relative",
                  backgroundColor: "#f3f7fd",
                  color: "var(--text-color)",
                },
              }}
            >
              <Box sx={{ overflow: "auto" }}>
                <Typography
                  variant="h6"
                  sx={{
                    padding: "1rem",
                    fontWeight: "bold",
                    fontSize: isSmallScreen ? "0.6rem" : ".7rem", // Adjust font size for smaller screens
                    color: "var(--text-color)",
                  }}
                >
                  Reset
                </Typography>
                <List>
                  {["Pin", "AccessCode", "AccessKey"].map((text) => (
                    <ListItem
                      button
                      key={text}
                      onClick={() => setCurrentPage(text)}
                      sx={{
                        fontSize: ".8rem",
                        "&:hover": {
                          backgroundColor: "var(--hover)", // Hover color
                        },
                        padding: "0.5rem 1rem", // Adjust padding for ListItem
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        {icons[text]} {/* Render the corresponding icon */}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontSize: isSmallScreen ? ".7rem" : ".8rem", // Adjust font size for smaller screens
                            }}
                          >
                            {text}
                          </Typography>
                        }
                        sx={{ marginLeft: "0.5rem" }} // Adjust margin to reduce space
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>

            {/* Main content area for LLA */}
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                backgroundColor: "var(--color)",
                color: "var(--text-color)",
              }}
            >
              {renderContent()}
            </Box>
          </Box>
        </Container>
      </motion.div>
    </>
  );
}
