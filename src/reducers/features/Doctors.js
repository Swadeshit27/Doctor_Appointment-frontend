import { createSlice } from "@reduxjs/toolkit";

export const doctorList = createSlice({
    name: "doctors",
    initialState: {
        doctors: [],
        particularDoc: [],
    },
    reducers: {
        setdoctorList(state, action) {
            state.doctors = action.payload;
        },
        setparticularDoc(state, action) {
            state.particularDoc = action.payload;
        },
      
    }
})
export const { setdoctorList, setparticularDoc } = doctorList.actions;