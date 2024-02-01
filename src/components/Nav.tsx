import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ user, setLogin }: { user: any, setLogin:Function }) => {
    let links

    const logout = async () => {
        const res = await axios.post('logout', {})
        setLogin(false)
        console.log(res)
    }

    if (user) {
        links = <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link to="/" onClick={logout} className='nav-link'>logout</Link>
            </li>
        </ul>
    } else {
        links = <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link to="/login" className='nav-link'>Login</Link>
            </li>
            <li className='nav-item'>
                <Link to="/register" className='nav-link'>Register</Link>
            </li>
        </ul>
    }

    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
            </ul>

            {links}
        </nav>
    )
}

export default Nav