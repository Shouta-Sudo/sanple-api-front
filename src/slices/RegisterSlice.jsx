import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirm: '',
}

export const RegisterSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.first_name = action.payload
        },

        setLastName: (state, action) => {
            state.last_name = action.payload
        },

        setEmail: (state, action) => {
            state.email = action.payload
        },

        setPassword: (state, action) => {
            state.password = action.payload
        },

        setPasswordConfirm: (state, action) => {
            state.password_confirm = action.payload
        },

        resetRegisterinfo: (state) => {
            state.first_name = ''
            state.last_name = ''
            state.email = ''
            state.password = ''
            state.password_confirm = ''
        }
    }
})

export const { setFirstName, setEmail, setLastName, setPassword, setPasswordConfirm, resetRegisterinfo, setState } = RegisterSlice.actions; //actionCreatorのこと

export default RegisterSlice.reducer;