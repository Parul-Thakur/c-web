import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Sidebar from './Pages/Sidebar/Sidebar';
import Breadcrumb from './Components/Breadcrumb/Breadcrumb';

function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:720px)"); // Detect screen size below 720px
  const [open, setOpen] = useState(true);

  // Automatically toggle the sidebar when the screen is resized below or above 720px
  useEffect(() => {
    if (isMobile) {
      setOpen(false); // Collapse sidebar on small screens
    } else {
      setOpen(true); // Expand sidebar on larger screens
    }
  }, [isMobile]);

  // Function to toggle the sidebar manually
  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
    
      <CssBaseline />
      
      {/* <Navbar toggleDrawer={toggleDrawer} open={open} /> */}
      <Sidebar open={open} toggleSidebar={toggleDrawer} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: open ? (isMobile ? "3.5rem" : "200px") : "3.5rem", // Adjust margin for sidebar
          transition: 'margin-left 0.3s ease-in-out',
          padding: '1rem',
        }}
      >
        <Box sx={{ marginBottom: '1rem' }}>
          <Breadcrumb />
        </Box>
       
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
