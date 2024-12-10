"use client";
import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BaseModal from "./BaseModal";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { closeModal2 } from "@/app/redux/slice";

export default function CheckInDetailModal() {
  const isModal2Open = useSelector(
    (state: RootState) => state.checkIn.modal2Open
  );

  const dispatch = useDispatch();

  const [bookingId, setBookingId] = useState(1234);
  const [rooms, setRooms] = useState(0);
  const [guests, setGuests] = useState(0);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  });

  const validate = () => {
    let error = "";
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

  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <div>
      <BaseModal
        open={isModal2Open}
        title="CheckIn Details"
        onClose={() => {
          dispatch(closeModal2());
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: isMobile ? "center" : "space-between",
            width: isMobile? "90vw": "45vw",
            gap: 1,
            flexDirection: isMobile? 'column-reverse': 'row',
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 24, width: isMobile? '80%': undefined }}
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
                  setBookingId(Number(evt.target.value));
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
                  setGuests(Number(evt.target.value));
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
              <input
                type="date"
                value={date}
                onChange={(evt) => {
                  setDate(evt.target.value);
                }}
              />
            </Box>
          </form>

          <img
            src="/images/background.jpg"
            style={{
              width: isMobile? "82%" : 256,
              height: 134,
              objectFit: "cover",
              borderRadius: 18,
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 2,
            gap: 1,
          }}
        >
          <Button variant="outlined" onClick={()=>dispatch(closeModal2())}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Ok
          </Button>
        </Box>
      </BaseModal>
    </div>
  );
}
