import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

const AccessModal = ({ isOpen, onClose, data }) => {
  const [selectedValue, setSelectedValue] = useState("permanent");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="access-modal-title"
      aria-describedby="access-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "30rem",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="access-modal-title" variant="h6" component="h2">
          Select Access Type
        </Typography>
        <RadioGroup
          aria-labelledby="access-radio-buttons-group"
          value={selectedValue}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="permanent"
            control={<Radio />}
            label="Permanent"
          />
          <FormControlLabel
            value="temporary"
            control={<Radio />}
            label="Temporary"
          />
        </RadioGroup>
        <Box mt={2} display="flex" alignItems="center" justifyContent="center">
          <Button
            onClick={onClose}
            variant="contained"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--text-grey)",
            }}
          >
            Select
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AccessModal;
