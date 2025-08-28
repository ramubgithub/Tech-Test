import React, { useState, useEffect } from 'react'
import './Home.css'
import { useLocation, Outlet, useNavigate } from 'react-router-dom'
import { hideMsg, showMessage, showMsg } from '../redux/redux';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import MessageContainer from '../Message/MessageContainer';

axios.defaults.withCredentials = true;

function Home() {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const url = useLocation();

    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
      const checkAuthUser = async() => {
        try {
          const token = localStorage.getItem("token");
          await axios.post(`${import.meta.env.VITE_BACKEND_URL}/authenticate`,
            {
              token
            }
          );
          setAuthorized(true);
        }
        catch(err) {
          if(err.response?.status === 401) {
            localStorage.removeItem("token");
            navigate("/login");
            return;
          }
          dispatch(showMessage({msg: "Internal server error...", isSuccess: false}))
        }
        finally {
          setLoading(false);
        }
      }
    
      checkAuthUser();
    }, []);

    useEffect(() => {
      if(url.pathname === "/tests") {
        setIsActive(false);
      }
      else if(url.pathname === "/tests/results") {
        setIsActive(true);
      }
    }, [url.pathname])

    if(loading) {
      return <div>Authenticating User...</div>
    }

    if(!authorized) {
      return null;
    }

    const handleTests = () => {
      setIsActive(false);
      navigate("/tests");
    }

    const handleResults = () => {
      setIsActive(true);
      navigate("/tests/results");
    }

    const handleLogout = async() => {
      localStorage.removeItem("token");
      dispatch(showMsg({msg: "Successfully Logged Out!", isSuccess: true}));
      setTimeout(() => {
        dispatch(hideMsg());
        navigate("/");
      }, 3000);
    }
  return (
    <>
      <div className="homeContainer">
        <button className={`homeBtn ${!isActive && 'testBtn'}`} onClick={handleTests}>Tests</button>
        <button className={`homeBtn ${isActive && 'resultBtn'}`} onClick={handleResults}>Results</button>
        <button className="homeBtn logoutBtn" onClick={handleLogout}>Logout</button>
      </div>
      <MessageContainer />
      <Outlet />
    </>
  )
}

export default Home
