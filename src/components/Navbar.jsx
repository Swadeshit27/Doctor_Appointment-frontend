import React from 'react'
import { Link, useNavigate } from "react-router-dom"
// import Badge from 'react-bootstrap/Badge';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { message } from 'antd';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const {user} = useSelector(state => state.user)
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        message.success("log out successfully")
        navigate("/login")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navcolor" style={{ "listStyle": "none" }}>
                <div className="container-fluid col-11">
                    <Link className="navbar-brand fs-3 fw-semibold text-black" to="/">Docta</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {!localStorage.getItem("token") ? <>
                                <li className="nav-item">
                                    <Link className="nav-link fs-5  active text-secondary" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fs-5   text-success" aria-current="page" to="/login">Log in</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fs-5   text-success" aria-current="page" to="/admin">Admin log in</Link>
                                </li>
                            </> :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link fs-5  active text-secondary" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link fs-5   text-secondary" aria-current="page" to="/myappoitment">Booking</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link fs-5   text-secondary" aria-current="page" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link fs-5   text-secondary" aria-current="page" to="/contactus">Contact</Link>
                                    </li>
                                    <Avatar alt="swadesh" src={`https://doctor-appointment-backend-a949.onrender.com/Images/${user.photo}`} className=' mx-2' role="button" onClick={() => navigate("/aboutuser")} />
                                    <li className="nav-item">
                                        <Link className="nav-link fs-5   text-success" aria-current="page" onClick={logout}  to="/login"><LogoutIcon /></Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar








