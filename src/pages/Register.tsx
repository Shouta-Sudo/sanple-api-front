import useRegister from '../hooks/useRegister';

const Register = () => {
    const { submitHandler, dispatch, setFirstName, setLastName, setEmail, setPassword, setPasswordConfirm } = useRegister()

    return (
        <div className='register'>
            <form className="form-signin" onSubmit={submitHandler}>

                <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>

                <input type="text" className="form-control" placeholder="first Name" required
                    onChange={e => dispatch(setFirstName(e.target.value))}
                />

                <input type="text" className="form-control" placeholder="Last Name" required
                    onChange={e => dispatch(setLastName(e.target.value))}
                />

                <input type="email" className="form-control" placeholder="Email" required
                    onChange={e => dispatch(setEmail(e.target.value))}
                />

                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => dispatch(setPassword(e.target.value))}
                />

                <input type="password" className="form-control" placeholder="Password Confirm" required
                    onChange={e => dispatch(setPasswordConfirm(e.target.value))}
                />

                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>

                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </form>
        </div>
    )
}

export default Register