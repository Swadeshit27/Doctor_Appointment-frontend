import { doctorList } from "./features/Doctors";
import { UserData } from "./features/User";
import { alertSlice } from "./features/alert"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        alert: alertSlice.reducer,
        user: UserData.reducer,
        doctors: doctorList.reducer,
    }
})

export default store;