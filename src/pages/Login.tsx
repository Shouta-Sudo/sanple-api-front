import axios from 'axios'
import React, { SyntheticEvent, useState } from 'react'
import {  useNavigate } from 'react-router-dom'

interface loginBody {
    email: string,
    password: string
}

const Login = ({setLogin}: {setLogin: Function}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const inputBody: loginBody = {
        email: email,
        password: password
    }

    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault()
        //TODO trycatch
        const res = await axios.post('login', inputBody)
        setLogin(true)
        navigate('/')
    }
    return (
        <div className='login'>
            <form className="form-signin" onSubmit={submitHandler}>

                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                <input type="email" className="form-control" placeholder="Email" required
                    onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </form>
        </div>
    )
}

export default Login