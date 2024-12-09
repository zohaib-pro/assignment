import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";

interface CheckInCardProps {

}
const CheckInCard: React.FC<CheckInCardProps> =  () => {
  return (
    <Card
      sx={{
        boxShadow: "14px 17px 40px 0px rgba(0,0,0, 0.1)",
        borderRadius: "20px",
        padding: "16px",
        position: "relative",
      }}
    >
      <CardMedia
        sx={{ height: 160, borderRadius: "16px" }}
        image="/images/background.jpg"
        title="green iguana"
      />
      <CardContent sx={{display: 'flex', flexDirection: 'column', gap: 1, p: 1, paddingBottom: '0px !important'}}>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          12th Nov, 2022
        </Typography>
        <Box sx={{ display: "flex", gap: 1,  alignItems: 'center' }}>
          <Avatar
            alt="Avatar"
            src="/images/avatar.png"
            sx={{ width: 42, height: 42 }}
          />
          <Typography sx={{fontWeight: 'bold'}}>Owner: </Typography>
          <Typography>John Doe </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CheckInCard;
