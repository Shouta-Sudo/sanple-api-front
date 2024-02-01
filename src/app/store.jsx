import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "../slices/RegisterSlice";
import LoginSlice from "../slices/LoginSlice";

export const store = configureStore({
    reducer: {
        register: RegisterSlice,
        login: LoginSlice
    }
})