"use client";
import { useState } from "react";
import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BaseModal from "./BaseModal";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { addCheckIn, closeModal2, setFormData } from "@/app/redux/slice";
import { firestore } from "@/app/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { CheckIn } from "@/app/types/CheckIn";
import { FirebaseError } from "firebase/app";

export default function CheckInDetailModal() {
  const isModal2Open = useSelector(
    (state: RootState) => state.checkIn.modal2Open
  );

  const dispatch = useDispatch();

  const formData = useSelector((state: RootState) => state.checkIn.formData);

  const [bookingId, setBookingId] = useState(1234);
  const [rooms, setRooms] = useState(0);
  const [guests, setGuests] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const validate = () => {
    let error = "";
    if (!bookingId) error = "Booking ID not Set!";
    else if (!rooms) error = "Number of rooms not selected!";
    else if (!guests) error = "Number of guests not selected!";

    return error;
  };

  const handleSubmit = async () => {
    const error = validate();
    if (error) toast.error(error);
    else {
      setUploading(true);
      try {
        const data = {
          ...formData,
          bookingId,
          rooms,
          guests,
          date,
          owner: "John Doe",
        };
        console.log("sending data", data);
        dispatch(setFormData(data));
        const docRef = await addDoc(collection(firestore, "checkIns"), data);
        dispatch(addCheckIn({ ...data, id: docRef.id } as CheckIn));
        toast.success("CheckIn Added");
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        if (e instanceof FirebaseError && e.message.includes("bytes"))
          toast.error("Image must be less than 1 mb");
        else toast.error("Error to check in");
      } finally {
        setUploading(false);
        dispatch(closeModal2());
      }
    }
  };

  const isMobile = useMediaQuery("(max-width:600px)");
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
            width: isMobile ? "90vw" : "45vw",
            gap: 1,
            flexDirection: isMobile ? "column-reverse" : "row",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              width: isMobile ? "80%" : undefined,
            }}
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
                  setRooms(Number(evt.target.value));
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
            src={(formData as CheckIn).img}
            style={{
              width: isMobile ? "82%" : 256,
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
          <Button variant="outlined" onClick={() => dispatch(closeModal2())}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={uploading}
            variant="contained"
            color="primary"
          >
            Ok
          </Button>
          {uploading && <CircularProgress color="primary" />}
        </Box>
      </BaseModal>
    </div>
  );
}
