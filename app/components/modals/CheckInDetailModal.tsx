"use client";
import { useState } from "react";
import { Box, Grid2, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BaseModal from "./BaseModal";
import DropZone from "../DropZone";
import toast, { Toaster } from "react-hot-toast";

export default function CheckInDetailModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [bookingId, setBookingId] = useState(1234);
  const [rooms, setRooms] = useState(0);
  const [guests, setGuests] = useState(0);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  });

  const validate = () => {
    var error = "";
    if (!bookingId) error = "Booking ID not Set!";
    else if (!rooms) error = "Number of rooms not selected!";
    else if (!guests) error = "Number of guests not selected!";

    return error;
  };

  const handleSubmit = () => {
    const error = validate();
    if (error) toast.error(error);
    else toast.success("Done");
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <BaseModal open={open} title="test modal" onClose={handleClose}>
        <Grid2 container columnSpacing={1}>
          <Grid2 size={6}>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Booking ID</Typography>
                <input
                  type="number"
                  style={{ width: 100 }}
                  value={bookingId}
                  onChange={(evt) => {
                    setBookingId(evt.target.value as any);
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Rooms</Typography>
                <input
                  type="number"
                  style={{ width: 32 }}
                  value={rooms}
                  onChange={(evt) => {
                    setRooms(evt.target.value as any);
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Number of Guests
                </Typography>
                <input
                  type="number"
                  style={{ width: 32 }}
                  value={guests}
                  onChange={(evt) => {
                    setGuests(evt.target.value as any);
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Booked Date</Typography>
                <input type="date" value={date} onChange={(evt)=>{setDate(evt.target.value)}}/>
              </Box>
            </form>
          </Grid2>
          <Grid2 size={6}>
            <img
              src="/images/background.jpg"
              style={{
                width: 256,
                height: 134,
                objectFit: "cover",
                borderRadius: 18,
              }}
            />
          </Grid2>
        </Grid2>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 2,
            gap: 1,
          }}
        >
          <Button variant="outlined">Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Ok
          </Button>
        </Box>
        <Toaster />
      </BaseModal>
    </div>
  );
}
