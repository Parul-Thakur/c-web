import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";


const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);
  console.log(paths);
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ margin: "5rem 0 2rem", color: "var(--darkest-color)" }}
    >
      <Link
        to="/"
        style={{ textDecoration: "none", color: "var(--text-grey)" }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "var(--darkest-color)",
            fontWeight: "bold",
            fontSize: "1rem",
            display: "flex",
            gap: ".6rem",
            alignItems: "center",
          }}
        >
          {" "}
          <NavigateBeforeIcon />
          Home
        </Typography>
      </Link>
      {paths.map((path, index) => {
        const to = `/${paths.slice(0, index + 1).join("/")}`;

        // Helper function to capitalize the first letter
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

        return (
          <Link
            key={to}
            to={to}
            style={{ textDecoration: "none", color: "var(--darkest-color)" }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "var(--darkest-color)",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              {capitalize(path)}
            </Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
