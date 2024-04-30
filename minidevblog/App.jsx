import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../minidevblog/src/context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { userAuthentication } from '../minidevblog/src/hooks/userAuthentication'

import Home from '../minidevblog/src/pages/Home/Home'
import About from '../minidevblog/src/pages/About/About'
import Navbar from '../minidevblog/src/components/Navbar/Navbar'
import Footer from '../minidevblog/src/components/Footer/Footer'
import Login from '../minidevblog/src/pages/Login/Login'
import loading from '../minidevblog/src/assets/Loading.gif'
import ShowUserName from '../minidevblog/src/components/ShowUserName/ShowUserName'



function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = userAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [auth])
  if (loadingUser) {
    return <div className='container load'><img src={loading} alt="Gif Loading User" width="120px" height="120px" /></div>
  }
  
  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/login/showuser' element={<ShowUserName />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
