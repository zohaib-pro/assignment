import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

interface DropZoneProps {
  onDropDone: (file: File | null) => void;
}
const DropZone: React.FC<DropZoneProps> = ({ onDropDone }) => {
  const [file, setFile] = useState<File | null>();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      const newFile = acceptedFiles[0] ?? null;
      setFile(newFile);
      onDropDone(newFile);
    },
    accept: {
      "image/jpeg": [],
      "image/png": [],
    }, // Accept only image files (example)
    maxFiles: 1, // Limit number of files
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px dashed grey",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#f8f8f8",
        },
      }}
    >
      <input {...getInputProps()} />
      <Box
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            width={70}
            height={50}
            style={{
              objectFit: "contain",
            }}
          />
        ) : (
          <img src="/images/vector.png" width={35} height={35} />
        )}
        <Typography sx={{ fontSize: 14, fontWeight: 600, mt: 2 }}>
          Click or drag file to this area to upload
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="textSecondary">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </Typography>
      </Box>
    </Box>
  );
};

export default DropZone;
