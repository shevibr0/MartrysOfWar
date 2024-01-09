import React from 'react'
import Login from '../components/Login'
import HomePage from '../components/HomePage'
import { Route, Routes } from 'react-router'
import Soldiers from '../components/Soldiers'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} ></Route>
            <Route path="/homePage" element={<HomePage />} ></Route >
            <Route path="/soldiers" element={<Soldiers />} ></Route >
            <Route path="*" element={<h1>404</h1>}> </Route>
        </Routes>
    )
}
