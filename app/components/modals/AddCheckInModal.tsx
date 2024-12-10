"use client";
import { useState } from "react";
import { Box, CircularProgress, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BaseModal from "./BaseModal";
import DropZone from "../DropZone";
import { closeModal1, openModal2, setFormData } from "@/app/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import toast from "react-hot-toast";
export default function AddCheckInModal() {
  const dispatch = useDispatch();
  const modal1Open = useSelector(
    (state: RootState) => state.checkIn.modal1Open
  );
  const [title, setTitle] = useState("");
  const [img, setImg] = useState<File | null>();

  const validate = () => {
    let error = "";
    if (!title) error = "Title not entered!";
    else if (!img) error = "Image not selected!";
    return error;
  };

  const convertToBase64 = (file: File, onComplete: (img: string)=>void) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      onComplete(reader.result as string);
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      toast.error(error);
    } else if (img) {
        convertToBase64(img, (img)=>{
            const data = {
                img,
                title
            };
            dispatch(setFormData(data));
            dispatch(closeModal1());
            dispatch(openModal2());
        })
    }else {
        toast.error("No image selected!");
    }
  };

  return (
    <div>
      <BaseModal
        open={modal1Open}
        title="Add CheckIn"
        onClose={() => {
          dispatch(closeModal1());
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography sx={{ fontWeight: "bold" }}>Title</Typography>
          <TextField
            label="Enter Title"
            name="title"
            value={title}
            onChange={(evt) => {
              setTitle(evt.target.value);
            }}
            fullWidth
            margin="normal"
          />
          <DropZone
            onDropDone={(file) => {
              setImg(file);
            }}
          />
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 1 }}
          >
            <Button variant="outlined" onClick={() => dispatch(closeModal1())}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </BaseModal>
    </div>
  );
}
