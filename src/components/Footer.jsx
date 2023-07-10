import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer >
                <div className="container-fluid  p-3 ">
                    <div className="row  justify-content-center align-items-center">
                        <div className=" col-10 col-sm-4 col-lg-3 d-flex flex-column">
                            <h5 >Quick links</h5>
                            <Link to={"/"}>Home</Link>
                            <Link to={"/about"} >About</Link>
                            <Link to={"/contactus"} >Contact Us</Link>
                        </div>
                        <div className="col-10 col-sm-4 col-lg-3">
                            <h5 >Contact Details </h5>
                            <p >Jalpaiguri</p>
                            <p >help.pal@gamil.com</p>
                            <p >8456975667</p>
                        </div>
                        <div className="col-10 col-sm-4 col-lg-3">
                            <h5 >Ligel stuff</h5>
                            <p > Disclaimer</p>
                            <p >Privacy Policy</p>
                            <p >Terms Of Service</p>
                        </div>
                    </div>
                </div>
                <p className='text-center mt-2 bg-secondary copyright'>© 2022 Company, Inc</p>
            </footer>
        </>
    )
}

export default Footer
