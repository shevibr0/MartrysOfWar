import React, { useState } from "react";
import api from "../../api";// Make sure to import your API library
import { GetUserByNameAndEmail } from "../../utils/UserUtil";

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleClickLogin = async () => {
        if (name === "" || email === "") {
            setError('Please enter both name and password');
            return;
        }

        try {
            // Assuming `api.post` returns a Promise
            const res = await GetUserByNameAndEmail(name, email);

            if (res === null) {
                setError("Incorrect credentials");
            } else {
                console.log("הצלחתי!!!!!!");
                // Perform further actions like redirecting or storing tokens in state/context
            }
        } catch (error) {
            console.error("An error occurred:", error);
            setError("An error occurred while processing your request");
        }
    };

    const handleChangeName = (event) => {
        setError("");
        let value = event.target.value;
        setName(value);
    };

    const handleChangePassword = (event) => {
        setError("");
        let value = event.target.value;
        setEmail(value);
    };

    return (
        <div>
            <h1>Login</h1>
            <label htmlFor="name">Enter name:</label>
            <input name="name" type="text" placeholder="Enter name" value={name} onChange={handleChangeName} /><br />
            <label htmlFor="password">Enter password:</label>
            <input name="email" type="text" placeholder="Enter email" value={email} onChange={handleChangePassword} /><br />
            <span>{error}</span>
            <button onClick={handleClickLogin}>Login</button>
        </div>
    );
}

export default Login;
