import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

const Auth = () => {
    return (
        <div>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </div>
    )
}

export default Auth