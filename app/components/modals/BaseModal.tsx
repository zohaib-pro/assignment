import { ReactNode } from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

interface BaseComponentProps {
  title: string;
  open: boolean;
  onClose?: () => void;
  children: ReactNode; // This prop will allow passing child components
}

const BaseModal = ({ children, open, onClose, title }: BaseComponentProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "12px",
          overflow: 'hidden',
          '@media (max-width: 600px)': {
            width: '80%'
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 1,
            background: '#F8F8F8'
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Box sx={{p: 2}}>{children}</Box>
      </Box>
    </Modal>
  );
};

export default BaseModal;
