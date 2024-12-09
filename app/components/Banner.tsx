import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "280px",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/background.jpg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center calc(100% - 18%)",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "60%",
          position: "absolute",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          color: "white",
          pl: 8,
          background:
            "linear-gradient( to right, rgba(0,0,0,1), rgba(0,0,0,0))",
          "@media (max-width:600px)": {
            width: '100%',
            pl: 0, 
            gap: 1,
            p: 1,
          },
        }}
      >
        <Typography variant="h4">Hi! 👋 James Doe</Typography>
        <Typography variant="body1">
          Lorem ipsus dolor sit amen, something important to say here
        </Typography>
        <Button color="primary" sx={{ mt: "8px" }}>
          Add Check In
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
