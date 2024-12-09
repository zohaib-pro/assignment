import React from 'react'
import { Avatar, Box, Button } from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

const Header = () => {
  return (
    <Box
        sx={{
          padding: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "20px",
          boxShadow: "14px 17px 40px 0px rgba(112, 144, 176, 0.08)",
        }}
      >
        <img src='/images/logo.png' width={32} height={32}/>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Avatar
            alt="Avatar"
            src="/images/avatar.png"
            sx={{ width: 42, height: 42 }}
          />
          <ErrorOutlineRoundedIcon
            sx={{ width: 24, height: 24, color: "#718096" }}
          />
          <NotificationsNoneRoundedIcon
            sx={{ width: 24, height: 24, color: "#718096" }}
          />
          <Button variant='contained'>Feedback</Button>
        </Box>
      </Box>
  )
}

export default Header