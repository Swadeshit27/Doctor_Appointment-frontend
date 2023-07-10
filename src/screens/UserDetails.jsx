import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../reducers/features/User';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getuserdata = async () => {
        const res = await axios.post("https://doctor-appointment-backend-a949.onrender.com/userdata", {}, {
            headers: {
                Authorization: "bearer " + localStorage.getItem("token"),
            }
        })
        if (res.data.success) {
            dispatch(setUserData(res.data.user))
        }
        else {
            message.error(res.data.message)
            navigate("/login")
        };
    }
    useEffect(() => {
        getuserdata();
    }, [])
    
    return (
        <>
            <div className=" col-md-8 col-10 mb-5 user_container">
                <h1 className='text-center my-4'>My Details</h1>
                <div className="w-100 p-4" >
                    <img src={`https://doctor-appointment-backend-a949.onrender.com/Images/${user.photo}`} alt="" width={150} height={150} />
                    <div className='user_details'>
                        <p className='ms-3 text-capitalize fs-4'>name: {user.name}</p>
                        <p className='ms-3  fs-4'>Email: {user.email}</p>
                        <p className='ms-3 text-capitalize fs-4'>mobile: {user.mobile}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetails


