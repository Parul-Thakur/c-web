// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import WindowIcon from "@mui/icons-material/Window";
// import AppleIcon from "@mui/icons-material/Apple";
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Paper,
//   Box,
//   ButtonGroup,
// } from "@mui/material";

// export default function RemotePrint() {
//   return (
//     <motion.div
//       initial={{ y: "-50%", opacity: 0, scale: 0.8 }}
//       animate={{ y: "0%", opacity: 1, scale: 1 }}
//       exit={{ y: "50%", opacity: 0, scale: 1.2 }}
//       transition={{ duration: 0.8, ease: "easeInOut" }}
//       className="webContainer"
//     >
//       <div className="webTable">
//         <Container
//           component={Paper}
//           elevation={3}
//           style={{ padding: 0, margin: "3rem 0", maxWidth: "95%" }}
//         >
//           <Box
//             sx={{
//               backgroundColor: "var(--search-bg)",
//               padding: "1rem",
//               marginBottom: "-1px",
//               color: "var(--text-grey)",
//             }}
//           >
//             <Typography variant="h10" component="h4" gutterBottom>
//               Download Advanced Printer Installer
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               padding: "2rem ",
//               backgroundColor: "var(--color)",
//               color: "var(--text-grey)",
//             }}
//           >
//             <form>
//               <Grid
//                 item
//                 xs={12}
//                 style={{
//                   textAlign: "center",
//                   margin: "5rem 0 10rem",
//                   display: "flex",
//                   justifyContent: "space-around",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "inline-block",
//                     marginRight: "2rem",
//                     textAlign: "center",
//                   }}
//                 >
//                   <Typography variant="body1" component="p" gutterBottom>
//                     Printer for Windows
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     type="submit"
//                     style={{
//                       textAlign: "center",
//                       color: "var(--color)",
//                       backgroundColor: "var(--secondary-color)",
//                       padding: "1rem 3rem",
//                       "&:hover": {
//                         backgroundColor: "var(--hover)",
//                       },
//                       fontSize: "0.8rem",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     <WindowIcon sx={{ marginRight: "0.5rem" }} /> Download
//                   </Button>
//                 </Box>

//                 <Box sx={{ display: "inline-block", textAlign: "center" }}>
//                   <Typography variant="body1" component="p" gutterBottom>
//                     Printer for macOS
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     type="submit"
//                     style={{
//                       textAlign: "center",
//                       color: "var(--color)",
//                       backgroundColor: "var(--secondary-color)",
//                       padding: "1rem 3rem",
//                       "&:hover": {
//                         backgroundColor: "var(--hover)",
//                       },
//                       fontSize: "0.8rem",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     <AppleIcon sx={{ marginRight: "0.5rem" }} /> Download
//                   </Button>
//                 </Box>
//               </Grid>
//             </form>
//           </Box>
//         </Container>
//       </div>
//     </motion.div>
//   );
// }
import { Box, Grid } from "@mui/material";
import React from "react";
import CustomCard from "../../Components/CustomCard/CustomCard";

const RemotePrint = () => {
  return (
    <>
      <Box
        sx={{
          padding: "3rem",
          backgroundColor: "var(--background-color)",
          color: "var(--text-color)",
          borderRadius: " 1rem  ",
          // boxShadow: "var(--box-shadow)",
        }}
      >
        <Grid item xs={12} md={6} mt={4}>
          <CustomCard />
        </Grid>
      </Box>
    </>
  );
};

export default RemotePrint;
