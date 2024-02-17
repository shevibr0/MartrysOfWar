import React, { useState } from "react";
import { useNavigate } from "react-router";
import { addUser } from "../utils/UserUtil";

const Register = () => {
    const nav = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const handleRegistration = async () => {
        if (name === "" || email === "" || password === "" || phoneNumber === "") {
            setError('Please fill in all fields');
            return;
        }

        try {
            const newUser = { name, email, password, phoneNumber };
            const response = await addUser(newUser);

            if (response.status === 201) {
                console.log("Registration Successful!");
                // Optionally, you can redirect the user to the login page
                nav("/login");
            } else {
                setError("Registration failed");
            }
        } catch (error) {
            console.error("An error occurred:", error);
            setError("An error occurred while processing your request");
        }
    };

    const handleChangeName = (event) => {
        setError("");
        setName(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setError("");
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setError("");
        setPassword(event.target.value);
    };

    const handleChangePhoneNumber = (event) => {
        setError("");
        setPhoneNumber(event.target.value);
    };

    return (
        <div>
            <h1>Registration</h1>
            <label htmlFor="name">Enter name:</label>
            <input name="name" type="text" placeholder="Enter name" value={name} onChange={handleChangeName} /><br />
            <label htmlFor="email">Enter email:</label>
            <input name="email" type="email" placeholder="Enter email" value={email} onChange={handleChangeEmail} /><br />
            <label htmlFor="password">Enter password:</label>
            <input name="password" type="password" placeholder="Enter password" value={password} onChange={handleChangePassword} /><br />
            <label htmlFor="phoneNumber">Enter phone number:</label>
            <input name="phoneNumber" type="tel" placeholder="Enter phone number" value={phoneNumber} onChange={handleChangePhoneNumber} /><br />
            <span>{error}</span>
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
}

export default Register;
