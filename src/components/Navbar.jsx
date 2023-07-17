import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
// import Badge from 'react-bootstrap/Badge';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { message } from 'antd';
import { useSelector } from 'react-redux';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import BookOnlineRoundedIcon from '@mui/icons-material/BookOnlineRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

const Navbar = () => {
    const { user } = useSelector(state => state.user);
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        message.success("log out successfully")
        navigate("/login")
    }


    return (
        <>
            <div className="w-100 navcolor position-fixed top-0 d-flex justify-content-center align-items-center" style={{ "listStyle": "none", height: "4rem", zIndex: "999" }} >
                <div className='d-flex justify-content-between align-items-center col-11  p-0 px-md-3'>
                    <Link className="navbar-brand fs-3 fw-semibold text-primary" to={'/'}>Docta</Link>
                    <ul className="navbar-nav ms-auto d-sm-flex d-none flex-row justify-content-center align-items-center">
                        {!localStorage.getItem("token") ?
                            <>
                                <li className="nav-item">
                                    <Link className="fs-5  active text-primary ms-4" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="fs-5  active text-secondary ms-4" aria-current="page" to="/login">Log in</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="fs-5  active text-secondary ms-4" aria-current="page" to="/admin">Admin</Link>
                                </li>
                            </> :
                            <>
                                <li className="nav-item">
                                    <Link className="fs-5  active text-primary ms-4" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="fs-5   text-secondary ms-4" aria-current="page" to="/myappoitment">Booking</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="fs-5   text-secondary ms-4" aria-current="page" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="fs-5   text-secondary ms-4" aria-current="page" to="/contactus">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Avatar alt="swadesh" src={`https://doctor-appointment-backend-a949.onrender.com/Images/${user.photo}`} className=' ms-4' role="button" onClick={() => navigate("/aboutuser")} />
                                </li>
                                <li className="nav-item">
                                    <Link className="fs-5   text-secondary ms-4 text-danger" aria-current="page" onClick={logout} to="/login"><LogoutIcon /></Link>
                                </li>
                            </>}
                    </ul>
                    <div className='d-flex d-sm-none'><MenuRoundedIcon fontSize="large" onClick={() => setNav(true)} /></div>
                </div>
                <div className={nav ? "h-100 w-100  bg-dark bg-opacity-50  position-fixed top-0  start-0  d-flex d-md-none" : "d-none"}>
                    <div className={nav ? " h-100 w-75 bg-light position-fixed top-0  start-0 " : "pos"} style={{ zIndex: "99" }}>
                        <div className="cancel"><CloseRoundedIcon fontSize="large" onClick={() => setNav(false)} /></div>
                        <div className="mt-5 w-100">
                            <div className="logo pt-4">
                                <Avatar alt="swadesh" src={`https://doctor-appointment-backend-a949.onrender.com/Images/${user.photo}`} className=' mx-2' role="button" onClick={() => { navigate("/aboutuser"); setNav(false) }} sx={{ width: 100, height: 100 }} />
                                <p className='fs-4 '>Swadsh Pal</p>
                                <hr className='w-75 mx-auto' />
                            </div>
                            <ul className='w-75 mx-auto'>
                                {!localStorage.getItem("token") ?
                                    <>
                                        <li className="nav-item" onClick={() => setNav(false)}>
                                            <Link className="fs-5  active text-primary ms-4 pb-2 d-flex justify-content-start align-items-center" aria-current="page" to="/"><HomeRoundedIcon className='me-2' />Home</Link>
                                        </li>
                                        <li className="nav-item" onClick={() => setNav(false)}>
                                            <Link className="fs-5   text-secondary ms-4 pb-2 d-flex justify-content-start align-items-center" aria-current="page" to="/login"><LoginRoundedIcon className='me-2' />Log in</Link>
                                        </li>
                                        <li className="nav-item" onClick={() => setNav(false)}>
                                            <Link className="fs-5   text-secondary ms-4 pb-2 d-flex justify-content-start align-items-center" aria-current="page" to="/admin"><AdminPanelSettingsRoundedIcon className='me-2' /> Admin</Link>
                                        </li>
                                    </> :
                                    <>
                                        <li className="nav-item" onClick={() => setNav(false)}>
                                            <Link className="fs-5  active text-primary ms-4 pb-2 d-flex justify-content-start align-items-center " aria-current="page" to="/"><HomeRoundedIcon className='me-2' />Home</Link>
                                        </li>
                                        <li className="nav-item" onClick={() => setNav(false)}>
                                            <Link className="fs-5   text-secondary ms-4 pb-2 d-flex justify-content-start align-items-center" aria-current="page" to="/myappoitment"><BookOnlineRoundedIcon className='me-2' sx={{ color: "pink[500]" }} />Booking</Link>
                                        </li>
                                        <li className="nav-item" onClick={() => setNav(false)}>
                                            <Link className="fs-5   text-secondary ms-4 pb-2 d-flex justify-content-start align-items-center" aria-current="page" to="/about"><ContactSupportIcon sx={{ color: "pink[500]" }} className='me-2' /> About</Link>
                                        </li>
                                        <li className="nav-item" onClick={() => setNav(false)}>
                                            <Link className="fs-5   text-secondary ms-4  pb-2 d-flex justify-content-start align-items-center" aria-current="page" to="/contactus"><SupportAgentRoundedIcon sx={{ color: "pink[500] " }} className='me-2' />Contact</Link>
                                        </li>
                                        <li className="nav-item" onClick={() => setNav(false)}>
                                            <Link className="nav-link fs-5 ms-4 pb-2  d-flex justify-content-start align-items-center  text-danger" aria-current="page" onClick={logout} to="/login"><LogoutIcon className='me-2' />Log Out</Link>
                                        </li>
                                    </>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar








