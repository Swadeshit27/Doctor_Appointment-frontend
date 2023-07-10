import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../reducers/features/alert';


const AdminLogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const AdminLogInUser = async (e) => {
        e.preventDefault();
        if (!(email && password)) {
            message.error("please fill all the fields");
        }
        else {
            dispatch(showLoading());
            const res = await axios.post("https://doctor-appointment-backend-a949.onrender.com/AdminLogIn", { email, password })
            dispatch(hideLoading());
            try {
                if (res.data.success) {
                    message.success(res.data.message);
                    navigate("/AddDoctors")
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
            <div className="container col-10 col-md-6 col-lg-4 col-xl-4 p-5 userAdminLogIn_container" >
                <div className="chanal">
                    <div className="box"  >Admin Log in</div>
                </div>
                <div className="rest"> 
                        <div className='AdminLogIn_container'>
                            <input type="email" name="email" className="text-input" onChange={(e) => setEmail(e.target.value)} value={email} id="email" placeholder='email*' />
                            <input type="password" className="text-input" name="password" onChange={(e) => setPassword(e.target.value)} value={password} id="password" placeholder='password*' />
                            <div className='contact_btn' onClick={AdminLogInUser}>Log in</div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogIn
