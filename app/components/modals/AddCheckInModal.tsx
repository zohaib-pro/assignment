"use client";
import { useState } from "react";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BaseModal from "./BaseModal";
import DropZone from "../DropZone";

export default function AddCheckInModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState("");
  const [img, setImg] = useState<File | null>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("title", title);
    console.log("file", img);
    //console.log("Form submitted", formData);
    // Here, you can send the form data to your server or API
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <BaseModal open={open} title="test modal" onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <Typography sx={{ fontWeight: "bold" }}>Title</Typography>
          <TextField
            label="Enter Title"
            name="title"
            value={title}
            onChange={(evt)=>{setTitle(evt.target.value)}}
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
            <Button variant="outlined">Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </BaseModal>
    </div>
  );
}
