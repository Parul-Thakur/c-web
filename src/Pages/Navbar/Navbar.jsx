import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Images/caleta-logo-removebg-preview.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "../../ThemeContext";

const Navbar = ({ toggleDrawer }) => {
  const { toggleTheme, theme } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const userEmail = localStorage.getItem("userEmail");
  const userName = userEmail ? userEmail.replace(/@gmail\.com$/, "") : "Guest";

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "var(--color)",
        boxShadow: "none",
      }}
    >
    
       

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{ marginRight: 2, color: "var(--text-color)" }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <IconButton
            sx={{ marginRight: 2, color: "var(--text-color)" }}
            onClick={handleMenu}
            aria-label="Account menu"
          >
            <AccountCircleIcon />
          </IconButton>
        </div>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          onClose={handleClose}
          sx={{
            "& .MuiMenuItem-root": {
              color: "var(--text-color)",
            },
            "& .MuiPaper-root": {
              backgroundColor: "var(--background-color)",
            },
          }}
        >
          <MenuItem onClick={handleClose}>{userName}</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
     
    </AppBar>
  );
};

export default Navbar;
