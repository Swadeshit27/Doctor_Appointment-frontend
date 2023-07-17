import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../reducers/features/alert';
import Signup from './Signup';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [count, setcount] = useState(true)

  const active = {
    color: " #fff",
    background: "#5951ff",
  }
  const inactive = {
    color: "#5951ff",
    background: "#fff",
  }

  const loginUser = async (e) => {
    e.preventDefault();
    if (!(email && password)) {
      message.error("please fill all the fields");
    }
    else {
      dispatch(showLoading());
      const res = await axios.post("https://doctor-appointment-backend-a949.onrender.com/login", { email, password })
      dispatch(hideLoading());
      try {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token)
          message.success(res.data.message);
          navigate("/")
        }
        else {
          message.error(res.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        console.log(error)
        message.error("internal error");
      }
    }
  }

  return (
    <>
      <div style={{minHeight:"75vh"}}>
        <div className="container col-10 col-md-6 col-lg-4 col-xl-3 px-1 px-sm-2 py-5 userlogin_container" >
          <div className="chanal">
            <div className="box" style={count ? active : inactive} onClick={() => setcount(true)}>Log in</div>
            <div className="box" style={count ? inactive : active} onClick={() => setcount(false)}>Sign up</div>
          </div>
          <div className="rest">
            {count ?
              <div className='login_container'>
                <input type="email" name="email" className="text-input" onChange={(e) => setEmail(e.target.value)} value={email} id="email" placeholder='email*' />
                <input type="password" className="text-input" name="password" onChange={(e) => setPassword(e.target.value)} value={password} id="password" placeholder='password*' />
                <p className='forget'>Forget password ?</p>
                <div className='contact_btn' onClick={loginUser}>Log in</div>
              </div>
              : <Signup />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
