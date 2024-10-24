import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import win from "../../Images/web/windows (1).png";
import mac from "../../Images/web/apple.png";
import mac2 from "../../Images/web/drivers.png";
// Sample data to be mapped
const cardData = [
  {
    id: 1,
    title: "Printer for Windows",
    description:
      "Easily configure and manage printers for Windows devices with a few simple steps.",
    image: win,
  },
  {
    id: 2,
    title: "Printer for macOS",
    description:
      "Set up and manage printer configurations on macOS effortlessly.",
    image: mac,
  },
];

const CustomCard = () => {
  return (
    <Grid container spacing={4} justifyContent="space-around">
      {cardData.map((card) => (
        <Grid item xs={12} sm={8} md={4} key={card.id}>
          <Card
            sx={{
              boxShadow: "var(--box-shadow)",
              padding: "2rem 0",
              cursor: "pointer",
              backgroundColor: "var(--drop-bg)",
              borderRadius: "8px",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                // transform: "scale(1.05)", // Scale on hover
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)", // Enhance shadow on hover
              },
            }}
          >
            {/* Image */}
            <CardMedia
              component="img"
              image={card.image}
              alt={card.title}
              sx={{
                width: "50px",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            />

            {/* Content */}
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: "var(--text-head)",
                  fontWeight: 600,
                  textAlign: "center",
                  padding: ".5rem 0",
                  cursor: "pointer",
                  fontSize: ".875rem",
                }}
              >
                {card.title} {/* Dynamic title */}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "var(--text-color)",
                  textAlign: "center",
                  fontSize: ".8rem",
                }}
              >
                {card.description} {/* Dynamic description */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomCard;
