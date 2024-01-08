import React from 'react'
import Login from '../components/Login'
import HomePage from '../components/HomePage'
import { Route, Routes } from 'react-router'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} ></Route>
            <Route path="/homePage" element={<HomePage />} ></Route >
            <Route path="*" element={<h1>404</h1>}> </Route>
        </Routes>
    )
}
