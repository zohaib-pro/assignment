"use client";
import { useState } from "react";
import { Box, CircularProgress, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BaseModal from "./BaseModal";
import DropZone from "../DropZone";
import { closeModal1, openModal2 } from "@/app/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/app/lib/firebase";

export default function AddCheckInModal() {
  const dispatch = useDispatch();
  const modal1Open = useSelector(
    (state: RootState) => state.checkIn.modal1Open
  );
  const [title, setTitle] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [img, setImg] = useState<File | null>();
  const [uploading, setUploading] = useState(false);

  const validate = () => {
    let error = "";
    if (!title) error = "Title not entered!";
    else if (!img) error = "Image not selected!";
    return error;
  };

  const handleUpload = async () => {
    if (!img) return;
    setUploading(true);

    const storageRef = ref(storage, `uploads/${img?.name}`);
    try {
      const uploadResult = await uploadBytes(storageRef, img);
      const downloadURL = await getDownloadURL(uploadResult.ref);
      setImgSrc(downloadURL);
    } catch (error) {
      toast.error("Error uploading file!");
    } finally {
      setUploading(false);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      toast.error(error);
    } else {
      dispatch(closeModal1());
      dispatch(openModal2());
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
              {uploading && <CircularProgress />}
              Submit
            </Button>
          </Box>
        </form>
      </BaseModal>
    </div>
  );
}
