import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { message } from "antd"
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../reducers/features/alert';

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [photo, setphoto] = useState();
    const [user, setuser] = useState({
        name: "", email: "", mobile: "", password: "", cpassword: ""
    })
    const addData = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setuser({ ...user, [name]: value })
    }
    const signupUser = async (e) => {
        e.preventDefault();
        const { name, email, mobile, password, cpassword } = user;
        if (!name || !email || !mobile || !password || !cpassword) {
            message.error("Please fill all the fields")
        }
        else if (password != cpassword) {
            message.error("password and confirm password not matched")
        }
        else {
            dispatch(showLoading());
            let formData = new FormData();
            formData.append("photo", photo);
            formData.append("name", name);
            formData.append("email", email);
            formData.append("mobile", mobile);
            formData.append("password", password);
            formData.append("cpassword", cpassword);
            const res = await axios.post("https://doctor-appointment-backend-a949.onrender.com/signup", formData)
            dispatch(hideLoading());
            try {
                if (res.data.success) {
                    message.success(res.data.message);
                    // localStorage.setItem("token", res.data.token);
                    navigate("/login");
                }
                else {
                    message.error(res.data.message);
                }
            } catch (error) {
                message.error("server error")
                dispatch(hideLoading());
            }
        }
    }

    return (
        <>
            <div className='login_container'>
                <input type="text" className="text-input" name="name" id="name" value={user.name} onChange={addData} autoComplete='off'
                    placeholder="Name*" required />
                <input type="email" className="text-input" name="email" id="email" value={user.email} onChange={addData} autoComplete='off' placeholder="Email*" required />
                <input type="number" className="text-input" name="mobile" id="mobile" value={user.mobile} onChange={addData} autoComplete='off'
                    placeholder="Mobile No*" required />
                <input type="file" name="file" id="file" accept='.jpg, .jpeg' onChange={(e) => setphoto(e.target.files[0])} />
                <input type="password" className="text-input" name="password" id="password" value={user.password} onChange={addData} autoComplete='off'
                    placeholder="Password*" required />
                <input type="password" className="text-input" name="cpassword" id="cpassword" value={user.cpassword} onChange={addData} autoComplete='off'
                    placeholder="confirm password" required />
                <div className='contact_btn' onClick={signupUser} >Sign Up</div>
            </div>
        </>
    )
}

export default Signup
