import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showMsg, hideMsg, showMessage } from '../redux/redux';
import MessageContainer from '../Message/MessageContainer';
import axios from 'axios';


function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPas, setConfirmPas] = useState("");
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthUser = async() => {
      try {
        const token = localStorage.getItem("token");
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/authenticate`, {
          token
        })

        setTimeout(() => navigate("/tests"), 0);
      }
      catch(err) {
        setLoading(false);
      }
    }

    checkAuthUser();
  }, [])

  if(loading) {
    return <div>Authenticating User...</div>
  }
  

  useEffect(() => {
    if(password && confirmPas && password !== confirmPas) {
      setMsg("Passwords do not match!");
    }
    else {
      setMsg("");
    }
  }, [password, confirmPas]);

  const handleRegister = async() => {
    try {
      if(!email || !password) {
        dispatch(showMessage({msg: "All fields are required!", isSuccess: false}));
        return;
      }


      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      dispatch(showMsg({msg: "User Registered Successfully", isSuccess: true}));

      setTimeout(() => {
        dispatch(hideMsg());
        navigate("/login");
      }, 3000);
    }
    catch(err) {
      if(err.status === 409) {
        return dispatch(showMessage({msg: "User already exists!", isSuccess: false}));
      }
      dispatch(showMessage({msg: "Internal server error...", isSuccess: false}));
    }
  }

  return (
    <div className="signupMainContainer">
      <div className="signupContainer">
        <h1 style={{textAlign: "center"}}>Register</h1>
        <div className="inputGroup">
          <input type="text" className="registerInputs" required value={email} placeholder=" " onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="email" className="registerLabels">Email</label>
        </div>
        <div className="inputGroup">
          <input type="password" className="registerInputs" required value={password} placeholder=" " onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="password" className="registerLabels">Password</label>
        </div>
        <div className="inputGroup">
          <input type="password" className="registerInputs" required value={confirmPas} placeholder=" " onChange={(e) => setConfirmPas(e.target.value)} />
          <label htmlFor="confirmPassword" className="registerLabels">Confirm Password</label>
        </div>
        {msg && <span style={{color: "red", textAlign: "start", margin: "none"}}>{msg}</span>}
        <button className="signupBtn" onClick={handleRegister} disabled={password != confirmPas}>SignUp</button>
        <span style={{textAlign: "end"}}>Already have an account! <Link to="/login">Login</Link></span>
      </div>
      <MessageContainer />
    </div>
  )
}

export default Signup