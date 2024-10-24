import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import CustomTable from "../../Components/CustomTable/CustomTable";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessModal from "./AccessModal"; 
export default function ResetAccessCode() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAccessCodeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const accessData = [
    { id: 1, accessCode: "ABC123" },
    { id: 2, accessCode: "XYZ456" },
    { id: 3, accessCode: "LMN789" },
  ];

  const [data, setData] = useState(accessData);

  const columns = [
    { Header: "Access Code", accessor: "accessCode" },

  ];

  const handleDelete = (id) => {
    console.log(`Deleting item with id ${id}`);
  };


  return (
    <>
      <Box
        sx={{
          backgroundColor: "var(--color)",
          // padding: "1rem",
          // margin: "2rem 0 0",
          color: "var(--text-color)",
        }}
      >
        <Typography variant="h7" component="h5" gutterBottom>
          Unique code used at device authentication
        </Typography>
      </Box>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: " 1rem 0",
          backgroundColor: "var(--text-head)",
          opacity: "0.3",
        }}
      />
      <Box
        sx={{
          padding: "1rem 1rem 2rem",
          // backgroundColor: "red",
          backgroundColor: "var(--color)",
          color: "var(--text-color)",
        }}
      >
        <CustomTable
          columns={columns}
          data={data}
          localStorageKey="accessData"
          setData={setData}
          isAccessCodePage={true}
          onAccessCode={handleAccessCodeClick}
          disableSearch={true} 
          disablePagination={true} 
        />
      </Box>
    </>
  );
}
