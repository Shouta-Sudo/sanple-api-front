import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Nav from './components/Nav'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [user, setUser] = useState(null)
  const [login, setLogin] = useState(false)

  useEffect(() => {
    (
        async () => {
            try{
                const res = await axios.get('user')
                const user = res.data

                setUser(user)
            } catch (e) {
                setUser(null)
            }
        }
    )();
}, [login])

  return (
    <>
      <BrowserRouter>
      <Nav user={user} setLogin={setLogin}/>
        <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route path='/login' element={<Login setLogin={setLogin}/>} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
