import React, { useEffect } from 'react'
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
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="col-10 col-sm-8 col-md-8 col-xl-6 mx-auto  mb-5 user_container">
                <h1 className='text-center my-2 my-md-4'>My Details</h1>
                <div className="w-100 d-md-flex  p-4" >
                    <div style={{ minWidth: "40%", display: "flex", justifyContent: "center" }}>
                        <img src={`https://doctor-appointment-backend-a949.onrender.com/Images/${user.photo}`} alt="" width={200} height={150} />
                    </div>
                    <div className='user_details'>
                        <h3 className='ms-sm-4 text-capitalize'>name: <span className='text-primary'>{user.name}</span></h3>
                        <h4 className='ms-sm-4 '> Email: <span className='text-primary'>{user.email}</span></h4>
                        <h4 className='ms-sm-4'>mobile: <span className='text-primary'>{user.mobile}</span></h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetails


