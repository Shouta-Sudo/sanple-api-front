import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios';

interface RegisterBody {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    password_confirm: string
}

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const inputBody: RegisterBody = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirm: passwordConfirm,
    }

    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:8000/api/register', inputBody)


        console.log(res)
    }



    return (
        <div className='register'>
            <form className="form-signin" onSubmit={submitHandler}>

                <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>

                <input type="text" className="form-control" placeholder="first Name" required
                    onChange={e => setFirstName(e.target.value)}
                />

                <input type="text" className="form-control" placeholder="Last Name" required
                    onChange={e => setLastName(e.target.value)}
                />

                <input type="email" className="form-control" placeholder="Email" required
                    onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
                />

                <input type="password" className="form-control" placeholder="Password Confirm" required
                    onChange={e => setPasswordConfirm(e.target.value)}
                />

                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>

                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </form>
        </div>
    )
}

export default Register