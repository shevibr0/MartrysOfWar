import React, { useState } from "react";
// import { useNavigate } from "react-router";

const Login = () => {
    const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate()
    const handleClickLogin = () => {
        if (name == "" || password == "") {
            setError('requir name && password')
            return;
        }
        Login(name, password).then(res => {
            if (res == null) {
                setError("אחד הפרטים שגויים")
            }
            else {
                console.log(res)
            }
        })

    }
    const handleChangeName = (event) => {
        setError("")
        let value = event.target.value;
        setName(value);
    }
    const handleChangePassword = (event) => {
        setError("")
        let value = event.target.value;
        setPassword(value);
        // in this place we white the js code
    }
    return (
        <div>
            <h1>Login</h1>
            <label htmlFor="name">enter name</label>
            <input name="name" type="text" placeholder="enter name" value={name} onChange={handleChangeName} /><br />
            <span>{error}</span>
            <label htmlFor="password">enter password:</label>
            <input name="password" type="password" placeholder="enter password" value={password} onChange={handleChangePassword} /><br />
            <button onClick={handleClickLogin}>Login</button>
        </div>
    );
}

export default Login;