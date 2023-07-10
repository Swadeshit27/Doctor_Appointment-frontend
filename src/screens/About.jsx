import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div className='container-fluid  my-5'>
                <h1 className='text-center my-3 fw-semibold' >About Us</h1>
                <div className="container  mb-5">
                    <div className="row">
                        <div className="col-12 col-md-6 col-xl-4 order-0 ">
                            <img src="images/swadesh.jpg" alt="" width={300} height={300} />
                        </div>
                        <div className="col-12 col-md-6 py-3 order-1">
                            <h1>Swadesh Pal</h1>
                            <p>Full stack MERN Web Developer</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quam voluptatem a sit quia ipsa aliquid id earum quas rem,</p>
                            <p className='fs-5 mt-3'>Connect me on</p>
                            <div className="profile">
                                <Link to="https://www.facebook.com/Keshab1113?mibextid=ZbWKwL" className="profileIcon"><i className="bi bi-facebook"></i></Link>
                                <Link to="https://www.instagram.com/keshabdas2003/" className="profileIcon"><i className="bi bi-instagram "></i></Link>
                                <Link to="https://www.linkedin.com/in/keshab-das-6a84ab234" className="profileIcon"><i className="bi bi-linkedin "></i></Link>
                                <Link to="https://github.com/Keshab1113" className="profileIcon"><i className="bi bi-github "></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
    // < div className = "col-12 col-lg-10 my-3" >
    //     <div className="row">
    //         <div className="aboutkeshab col-md-6 col-12 order-md-1 order-2 main_left ">
    //             <img src="../images/keshab.jpg" alt="" srcset="" />
    //             <h1 className='ownname'>Keshab Das</h1>
    //             <h2>Frontend Developer</h2>
    //             <div className="profile">
    //                 <Link to="https://www.facebook.com/Keshab1113?mibextid=ZbWKwL" className="profileIcon"><i className="bi bi-facebook"></i></Link>
    //                 <Link to="https://www.instagram.com/keshabdas2003/" className="profileIcon"><i className="bi bi-instagram "></i></Link>
    //                 <Link to="https://www.linkedin.com/in/keshab-das-6a84ab234" className="profileIcon"><i className="bi bi-linkedin "></i></Link>
    //                 <Link to="https://github.com/Keshab1113" className="profileIcon"><i className="bi bi-github "></i></Link>
    //             </div>
    //         </div>
    //         <div className="aboutswadesh col-md-6 col-12 order-md-1 order-2 main_left">
    //             <img src="../images/swadesh.jpg" alt="" srcset="" />
    //             <h1 className='ownname'>Swadesh Pal</h1>
    //             <h2>Backend Developer</h2>
    //             <div className="profile">
    //                 <Link to="https://www.facebook.com/profile.php?id=100073559185519" className="profileIcon"><i className="bi bi-facebook"></i></Link>
    //                 <Link to="https://www.instagram.com/_swadesh_pal/" className="profileIcon"><i className="bi bi-instagram "></i></Link>
    //                 <Link to="https://www.linkedin.com/in/swadesh-pal-204036228/" className="profileIcon"><i className="bi bi-linkedin "></i></Link>
    //                 <Link to="https://github.com/Swadeshit27" className="profileIcon"><i className="bi bi-github "></i></Link>
    //             </div>
    //         </div>
    //     </div>
