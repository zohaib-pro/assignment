import { Box } from "@mui/material";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CheckInGallery from "./components/CheckInGallery";
import AddCheckInModal from "./components/modals/AddCheckInModal";
import CheckInDetailModal from "./components/modals/CheckInDetailModal";

export default function Home() {
  return (
    <Box
      sx={{
        p: '1rem',
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Header />
      <Banner />
      <CheckInGallery />
      <AddCheckInModal />
      <CheckInDetailModal />
    </Box>
  );
}
