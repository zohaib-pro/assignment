"use client";
import {
  Box,
  CircularProgress,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import CheckInCard from "./CheckInCard";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../lib/firebase";
import { setCheckIns } from "../redux/slice";
import { CheckIn } from "../types/CheckIn";

const CheckInGallery = () => {
  const [loading, setLoading] = useState(false);
  const checkIns = useSelector((state: RootState) => state.checkIn.checkIns);

  const dispatch = useDispatch();
  const loadCheckIns = async () => {
    setLoading(true);
    try {

        const checkInCollection = collection(firestore, 'checkIns');
        const snapshot = await getDocs(checkInCollection);

        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(), 
        }));

        dispatch(setCheckIns(docs as CheckIn[]));
        console.log("checkins", checkIns);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      } finally {
        setLoading(false);
      }
  }
  useEffect(() => {
    loadCheckIns();
  }, []);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Added CheckIns</Typography>
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
      </Box>

      {loading && <CircularProgress />}
      {!loading && !checkIns.length && (
        <Typography variant="h3" sx={{ color: "grey" }}>
          No checkIns Yet!
        </Typography>
      )}
      <Grid2 container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        {checkIns.map((item) => (
          <Grid2 key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <CheckInCard
              title={item.title}
              owner={item.owner}
              imageSrc={item.img}
              date={item.date}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default CheckInGallery;
