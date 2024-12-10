import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CheckIn } from '../types/CheckIn';

interface ModalState {
  modal1Open: boolean;
  modal2Open: boolean;
  checkIns: CheckIn[];
  formData: Record<string, string | number | boolean>; // Adjust the type as needed for your form fields
}

const initialState: ModalState = {
  modal1Open: false,
  modal2Open: false,
  checkIns: [],
  formData: {},
};

const checkInSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal1: (state) => {
      state.modal1Open = true;
    },
    closeModal1: (state) => {
      state.modal1Open = false;
    },
    openModal2: (state) => {
      state.modal2Open = true;
    },
    closeModal2: (state) => {
      state.modal2Open = false;
    },
    setCheckIns: (state, action: PayloadAction<CheckIn[]>)=> {
        state.checkIns = action.payload;
    },
    addCheckIn: (state, action: PayloadAction<CheckIn>)=>{
        state.checkIns = [...state.checkIns, action.payload];
    },
    setFormData: (state, action: PayloadAction<Record<string, string | number | boolean>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetFormData: (state) => { 
      state.formData = {};
    },
  },
});

export const {
  openModal1,
  closeModal1,
  openModal2,
  closeModal2,
  setFormData,
  resetFormData,
  addCheckIn,
  setCheckIns
} = checkInSlice.actions;

export default checkInSlice.reducer;
