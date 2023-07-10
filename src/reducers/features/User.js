import { createSlice } from "@reduxjs/toolkit";

export const UserData = createSlice({
    name: "user",
    initialState: {
        user:{},
    },
    reducers: {
        setUserData(state, action) {
            state.user = action.payload;
        }
    }
})
export const { setUserData } = UserData.actions;