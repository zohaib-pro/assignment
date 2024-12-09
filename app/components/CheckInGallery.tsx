import { Box, Grid2, IconButton, Typography } from "@mui/material";
import React from "react";
import CheckInCard from "./CheckInCard";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const CheckInGallery = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Added CheckIns</Typography>
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
      </Box>

      <Grid2 container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        {items.map((item) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <CheckInCard key={item} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default CheckInGallery;
