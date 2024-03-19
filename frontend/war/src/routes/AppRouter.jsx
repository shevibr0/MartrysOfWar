import React from 'react'
import Login from '../components/Login'
import HomePage from '../components/HomePage'
import { Route, Routes } from 'react-router'
import Soldiers from '../components/Soldiers'
import SoldierInfo from '../components/SoldierInfo'
import Recepies from '../components/Recepies'
import AddRecipe from '../components/AddRecipe'
import Remembers from '../components/Remembers'
import AddRemember from '../components/AddRemember'
import AddPicture from '../components/AddPicture'
import Pictures from '../components/Pictures'
import Register from '../components/Register'
import Contact from '../components/Contact'
import AddTheilim from '../components/AddTheilim'
import AddVolunteer from '../components/AddVolunteer'
import Theilim from '../components/Theilim'
import Voleenteerings from '../components/Voleenteerings'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} ></Route>
            <Route path="/register" element={<Register />} ></Route>
            <Route path="/homePage" element={<HomePage />} ></Route >
            <Route path="/soldiers" element={<Soldiers />} ></Route >
            <Route path="/recepies" element={<Recepies />} ></Route >
            <Route path="/memories" element={<Remembers />} ></Route >
            <Route path="/pictures" element={<Pictures />}></Route>
            <Route path="/theilim" element={<Theilim />}></Route>
            <Route path="/volunteering" element={<Voleenteerings />}></Route>
            <Route path="/addRecepy" element={<AddRecipe />} ></Route >
            <Route path="/addMemory" element={<AddRemember />} ></Route >
            <Route path="/addPicture" element={<AddPicture />}></Route>
            <Route path="/addTheilim" element={<AddTheilim />}></Route>
            <Route path="/addVolunteer" element={<AddVolunteer />}></Route>
            <Route path="/soldierInfo/:id" element={<SoldierInfo />}> </Route>
            <Route path="/contact" element={<Contact />}> </Route >
            <Route path="*" element={<h1>404</h1>}> </Route>
        </Routes >
    )
}
