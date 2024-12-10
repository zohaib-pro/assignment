"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { openModal1 } from "../redux/slice";

function CheckInAddButton() {
    const dispatch = useDispatch();
  return (
    <Box>
      <Button onClick={()=>{dispatch(openModal1())}} color="primary" sx={{ mt: "8px" }}>
        Add Check In
      </Button>
    </Box>
  );
}

export default CheckInAddButton;
