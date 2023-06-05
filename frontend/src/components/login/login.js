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


    async function login(){
        try {
            const res = await axios.post("http://localhost:9002/login", user);
            console.log(res);
            if(res.status === 200){
                navigate('/')
            }   
        } catch (error) {
            console.log(error);
        }
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
