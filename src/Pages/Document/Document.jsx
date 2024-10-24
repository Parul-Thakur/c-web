import React, { useState } from "react";
import CustomTable from "../../Components/CustomTable/CustomTable";
import DocData from "./DocData";
import { motion } from "framer-motion";
import { Container, Typography, Box, Divider } from "@mui/material";
function Document() {
  const [data, setData] = useState(DocData);

  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Author",
        accessor: "author",
      },
      {
        Header: "Status",
        accessor: "status",
      },
     
    ],
    []
  );
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
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
        Documents
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          margin: " 0.5rem",
          backgroundColor: "var(--text-head)",
          opacity: "0.3",
        }}
      />

      <motion.div
        className="reportMain"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        <Container
          // component={Paper}
          elevation={3}
          style={{ padding: 0, maxWidth: "95%", margin: " 0 0 3rem" }}
        >
          <Box
            sx={{
              backgroundColor: "var(--background-color)",
              padding: "1rem",
              margin: "2rem 0 0",
              color: "var(--text-color)",
            }}
          >
            <Typography variant="h8" component="h4" gutterBottom>
              List of all documents
            </Typography>
          </Box>
          <Box>
            <CustomTable
              columns={columns}
              data={data}
              localStorageKey="DocData"
              setData={setData}
            />
          </Box>
        </Container>
      </motion.div>
    </>
  );
}

export default Document;
