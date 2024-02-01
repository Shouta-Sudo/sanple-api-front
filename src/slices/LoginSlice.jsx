import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    password: '',
}

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },

        setPassword: (state, action) => {
            state.password = action.payload
        },
    }
})

export const { setEmail, setPassword } = LoginSlice.actions; //actionCreatorのこと

export default LoginSlice.reducer;