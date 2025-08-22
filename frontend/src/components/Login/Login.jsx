import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { hideMsg, showMessage, showMsg } from '../redux/redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import MessageContainer from '../Message/MessageContainer';

function Login() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async() => {
        try {
            if(!email || !password) {
                dispatch(showMessage({msg: "All fields are required!", isSuccess: false}));
                return;
            }
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`,
                {
                    email,
                    password
                },
                {
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    withCredentials: true
                }
            );

            dispatch(showMsg({msg: "Login successful!", isSuccess: true}));
            setTimeout(() => {
                dispatch(hideMsg());
                navigate("/tests");
            }, 3000);
        }
        catch(err) {
            if(err.status === 404) {
                dispatch(showMessage({msg: "User not found. Please Register!", isSuccess: false}));
                return;
            }
            else if(err.status === 401) {
                dispatch(showMessage({msg: "Incorrect password. Please try again!", isSuccess: false}));
                return;
            }
            dispatch(showMessage({msg: "Internal server error...", isSuccess: false}));
        }
    }

    return (
    <div className="loginMainContainer">
        <div className="loginContainer">
            <h1 style={{textAlign:"center"}}>Login</h1>
            <div className="inputGrp">
                <input type="text" className="loginInputs" required value={email} placeholder=" " onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="email" className="loginLabels">Email</label>
            </div>
            <div className="inputGrp">
                <input type="password" className="loginInputs" required value={password} placeholder=" " onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="password" className="loginLabels">Password</label>
            </div>
            <button className="loginBtn" onClick={handleLogin}>Login</button>
            <span style={{textAlign: "end"}}>Don't have an account? <Link to="/register">Register</Link></span>
        </div>
        <MessageContainer />
    </div>
    )
}

export default Login
