// import React, { useRef, useEffect, useState } from "react";
// import {
//   Drawer,
//   Box,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   useMediaQuery,
// } from "@mui/material";

// import InputIcon from "@mui/icons-material/Input";
// import SummarizeIcon from "@mui/icons-material/Summarize";
// import EuroIcon from "@mui/icons-material/Euro";
// import PaymentsIcon from "@mui/icons-material/Payments";
// import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
// import LockResetIcon from "@mui/icons-material/LockReset";
// import HistoryIcon from "@mui/icons-material/History";
// import "./Sidebar.css";
// import { NavLink, useLocation } from "react-router-dom";

// const Sidebar = ({ open }) => {
//   // const [open, setOpen] = useState(true);
//   const sidebarRef = useRef(null);
//   const location = useLocation();

//   const is1440pxOrSmaller = useMediaQuery("(max-width: 1440px)");
//   const is1024pxOrSmaller = useMediaQuery("(max-width: 1024px)");

//   useEffect(() => {
//     const handleScroll = () => {
//       if (sidebarRef.current) {
//         const scrollTop = sidebarRef.current.scrollTop;
//         localStorage.setItem("sidebarScrollPosition", scrollTop);
//       }
//     };

//     if (sidebarRef.current) {
//       const storedScrollTop = localStorage.getItem("sidebarScrollPosition");
//       if (storedScrollTop) {
//         sidebarRef.current.scrollTop = parseInt(storedScrollTop, 10);
//       }

//       sidebarRef.current.addEventListener("scroll", handleScroll);

//       return () => {
//         if (sidebarRef.current) {
//           sidebarRef.current.removeEventListener("scroll", handleScroll);
//         }
//       };
//     }
//   }, [location.pathname]);
//   return (
//     <Drawer
//       variant={is1024pxOrSmaller ? "temporary" : "permanent"}
//       anchor="left"
//       open={open}
//       // onClose={toggleSidebar}
//       sx={{
//         width: open ? (is1440pxOrSmaller ? "60px" : "15%") : "3%",
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: open ? (is1440pxOrSmaller ? "60px" : "15%") : "3%",
//           boxSizing: "border-box",
//           transition: "width 0.3s",
//           overflowX: "hidden",
//         },
//         transition: "width 0.3s ease-in-out",
//       }}
//     >
//       <Box
//         ref={sidebarRef}
//         sx={{
//           padding: "5rem 0 0.5rem",
//           bgcolor: "var(--color)",
//           height: "100%",
//           overflowY: "auto",
//           "&::-webkit-scrollbar": { display: "none" },
//           msOverflowStyle: "none",
//           scrollbarWidth: "none",
//         }}
//       >
//         <List
//           sx={{ bgcolor: "var(--color)", padding: 0 }}
//           className="sidebarLinks"
//         >
//           {open && !is1440pxOrSmaller && (
//             <ListItem>
//               <ListItemText
//                 primary="Administration"
//                 primaryTypographyProps={{
//                   sx: {
//                     fontSize: ".8rem",
//                     color: "var(--darkest-color)",
//                     display: { xs: "none", sm: "block" },
//                   },
//                 }}
//               />
//             </ListItem>
//           )}
//           {[
//             {
//               text: "Upload Print",
//               icon: <InputIcon />,
//               path: "/upload-print",
//             },
//             {
//               text: "Remote Print",
//               icon: <LocalPrintshopIcon />,
//               path: "/remote-print",
//             },
//             { text: "Account", icon: <PaymentsIcon />, path: "/account" },
//             { text: "Pricing", icon: <EuroIcon />, path: "/pricing" },

//             { text: "Documents", icon: <SummarizeIcon />, path: "/documents" },
//             { text: "History", icon: <HistoryIcon />, path: "/history" },

//             { text: "Reset Pin", icon: <LockResetIcon />, path: "/reset-pin" },
//           ].map(({ text, icon, path }) => (
//             <NavLink
//               to={path}
//               key={text}
//               className={({ isActive }) =>
//                 isActive ? "nav-link active" : "nav-link"
//               }
//               style={{ textDecoration: "none" }}
//             >
//               {({ isActive }) => (
//                 <ListItem
//                   sx={{
//                     color: isActive
//                       ? "var(--darkest-color)"
//                       : "var(--text-grey)",
//                     backgroundColor: isActive ? "var(--hover)" : "transparent",
//                     borderRadius: isActive ? "50px" : "0",
//                     fontWeight: isActive ? "bold" : "normal",
//                     gap: "2rem",
//                     transition:
//                       "background-color 0.3s, transform 0.3s, border-radius 0.3s",
//                     "&:hover": {
//                       backgroundColor: "var(--hover2)",
//                       color: "var(--darkest-color)",
//                       borderRadius: "50px",
//                       transform: "scale(1.05)",
//                       fontWeight: "bold",
//                     },
//                     padding: ".5rem 1rem",
//                     justifyContent:
//                       open && !is1440pxOrSmaller ? "center" : "flex-start",
//                     marginBottom: "0.5rem",
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: "auto",
//                       color: "inherit",
//                       justifyContent: "center",
//                     }}
//                   >
//                     {icon}
//                   </ListItemIcon>
//                   {open && !is1440pxOrSmaller && (
//                     <ListItemText
//                       primary={text}
//                       primaryTypographyProps={{
//                         sx: {
//                           fontSize: ".85rem",
//                           display: { xs: "none", sm: "block" },
//                         },
//                       }}
//                     />
//                   )}
//                 </ListItem>
//               )}
//             </NavLink>
//           ))}
//         </List>
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Input as InputIcon,
  Summarize as SummarizeIcon,
  Euro as EuroIcon,
  Payments as PaymentsIcon,
  LocalPrintshop as LocalPrintshopIcon,
  LockReset as LockResetIcon,
  History as HistoryIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import logo from "../../Images/caleta-logo-removebg-preview.png";

const navItems = [
  { text: "Upload Print", icon: <InputIcon />, path: "/upload-print" },
  { text: "Remote Print", icon: <LocalPrintshopIcon />, path: "/remote-print" },
  { text: "Account", icon: <PaymentsIcon />, path: "/account" },
  { text: "Pricing", icon: <EuroIcon />, path: "/pricing" },
  { text: "Documents", icon: <SummarizeIcon />, path: "/documents" },
  { text: "History", icon: <HistoryIcon />, path: "/history" },
  { text: "Setting", icon: <LockResetIcon />, path: "/reset-pin" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery("(max-width:720px)");

  // Automatically collapse sidebar when screen is smaller than 720px
  useEffect(() => {
    if (isMobile) {
      setOpen(false); // Collapse on mobile screens
    } else {
      setOpen(true); // Open on larger screens
    }
  }, [isMobile]);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      {/* Menu Icon positioned separately */}
      <Box
        sx={{
          position: "fixed",
          top: "3%",
          left: "10px",
          zIndex: 1000,
        }}
      >
        <IconButton
          sx={{
            color: "var(--color)",
            backgroundColor: "var(--sidebar-color)",
            "&:hover": {
              backgroundColor: "var(--sidebar-color)",
            },
          }}
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Sidebar */}
      <Box
        sx={{
          backgroundColor: "var(--sidebar-color)",
          width: open ? "200px" : "3.5rem",
          height: "80vh",
          borderRadius: "0 30px 30px 0",
          padding: "1rem 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "fixed",
          top: "10%",
          left: 0,
          transition: "width 0.3s ease",
          zIndex: 999,
        }}
      >
        <Box sx={{ textAlign: "left", marginBottom: "1rem" }}>
          {/* Logo and Text */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              
            }}
          >
            {/* Logo Image */}
            <img
              src={logo}
              alt="Caleta Logo"
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            {/* Text "Caleta" */}
            {open && (
              <Typography variant="h6" sx={{ color: "var(--color)" }}>
                Caleta
              </Typography>
            )}
          </Box>
        </Box>

        <List sx={{ flexGrow: 1 }}>
          {navItems.map((item) => (
            <ListItem button component="a" href={item.path} key={item.text}>
              <ListItemIcon sx={{ color: "var(--color)" }}>
                {item.icon}
              </ListItemIcon>
              {open && (
                <ListItemText
                  primary={
                    <span style={{ color: "var(--color)" }}>{item.text}</span>
                  }
                />
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default Sidebar;
