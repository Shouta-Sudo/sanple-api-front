import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName, setEmail, setPassword, setPasswordConfirm, resetRegisterinfo } from '../slices/RegisterSlice';

export const useRegister = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputBody = useSelector((state) => state.register)

    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault()
        console.log(inputBody)
        // TODO trycatch
        const res = await axios.post('register', inputBody)
        console.log(res)
        dispatch(resetRegisterinfo)
        navigate('/login')
    }

    return { submitHandler, dispatch, setFirstName, setLastName, setEmail, setPassword, setPasswordConfirm }

}

export default useRegister