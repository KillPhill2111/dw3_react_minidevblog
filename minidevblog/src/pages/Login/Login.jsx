import React from 'react'
import style from './Login.module.css'
import { useState, useEffect } from 'react'
import { userAuthentication } from '../../hooks/userAuthentication'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [ email, useEmail ]=useState('');
    const [ password, usePasswor ] =useState('');
    const [ error,useError ]=useState('');

    const { login, erro:authError, loading } =userAuthentication();
    const navigate=useNavigate();

  return (
    <div>
      <h1>Login!!</h1>
    </div>
  )
}

export default Login
