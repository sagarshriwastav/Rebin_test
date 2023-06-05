import React, { useState } from 'react'
import "./login.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:3000/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                navigate("/")
            })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name='email' value={user.email} onChange={handleChange} placeholder='Enter your Email' />
            <input type="password" name='password' value={user.password} onChange={handleChange} placeholder='Enter your password' />
            <div className="button" onClick={login} >Login</div>
        </div>
    )
}
//email:abc@123 pass:abcde
//email:abcd@123 pass:abcd
export default Login