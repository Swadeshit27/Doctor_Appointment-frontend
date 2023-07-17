import React, { useEffect, useRef, useState } from 'react'
import Service from '../components/Service';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, message } from 'antd';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch } from 'react-redux';
import { setUserData } from '../reducers/features/User';
import { setdoctorList } from "../reducers/features/Doctors"
import CaroselReview from '../components/CaroselReview';

const Home = () => {
    const [docList, setdocList] = useState([])
    // const [scroll, setscroll] = useState(0)
    const ref = useRef(null);
    const scrollleftRight = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const storeDoctors = (data) => {
        dispatch(setdoctorList(data));
        navigate("/doctors")
    };
    const getuserdata = async () => {
        const res = await axios.post("https://doctor-appointment-backend-a949.onrender.com/userdata", {}, {
            headers: {
                Authorization: "bearer " + localStorage.getItem("token"),
            }
        })
        try {
            if (res.data.success) {
                dispatch(setUserData(res.data.user))
            }
            else {
                message.error(res.data.message)
                navigate("/login")
            };
        } catch (error) {
            message.error("server error")
        }
    }
    const detDoctorList = async () => {
        const res = await axios.get("https://doctor-appointment-backend-a949.onrender.com/doctorsData");
        if (res.data.success) {
            setdocList(res.data.list);
        }
        else {
            message.error(res.data.message)
            navigate("/login")
        };
    }
    useEffect(() => {
        getuserdata();
        detDoctorList();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '80vh', background: "#f8f8fb", paddingTop:"6rem" }} >
                <div className="row col-11">
                    <div className="col-md-6 order-md-1 order-2 main_header " >
                        <h1 className=' text-capitalize'><span className='bigf1'><i className='fs-1'>O</i>ur</span> expertise at your service</h1>
                        <h2>Your most trusted health partner.</h2>
                        <h3>The best match services for you & your health.</h3>
                        <div className='mt-3 d-flex'>
                            <Link className="create_btn filled " to={"/about"}>About Us</Link>
                            <Link className="create_btn outline" to={"/contactus"}>Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-md-6  order-md-2 order-1 main_right d-flex justify-content-center" >
                        <img src="../images/doctor2.png" className="img-fluid " alt="..." width={500} />
                    </div>
                </div>
            </div>
            <Service />
            <hr className='col-11 mx-auto' />
            <div className="container-fluid col-11  p-md-3 position-relative " >
                <h3 className='my-1'>Book an appointment for an in-clinic consultation</h3>
                <h5 className='my-1'>Find experienced doctors across all specialties</h5>
                <div className="d-flex overflow-scroll py-4 px-2" ref={ref}>
                    <div className="left-right d-none d-sm-flex " style={{ position: "absolute", left: ".8rem", top: "50%" }} onClick={() => scrollleftRight(-310)} ><ArrowBackIosNewIcon /></div>
                    {docList !== [] ?
                        docList.map((val) => {
                            const { _id, catagory, imgsrc } = val;
                            return (<Card key={_id}
                                hoverable style={{ minWidth: "280px", height: "18rem", border: "1px solid #d3cbcb",margin:"10px" }}
                                cover={<img src={imgsrc} alt="" className='w-100 h-75' />}
                                onClick={() => storeDoctors(val)}
                                data-aos="zoom-in"
                            >
                                <h3 className='text-center text-capitalize'>{catagory}</h3>
                            </Card>)
                        })
                        : <h1>sory do data found</h1>}
                    <div className='left-right d-none d-sm-flex ' style={{ position: "absolute", right: ".5rem", top: "50%" }} onClick={() => scrollleftRight(+310)} ><ArrowForwardIosIcon /></div>
                </div>
            </div>
            <hr className='col-10 mx-auto' />
            <CaroselReview />
            <div className="container-fuild p-4 p-md-5 app_download" >
                <div className="row">
                    <div className="mx-auto col-md-4 d-flex justify-content-center download_left" >
                        <img src="images/DowmloadApp.png" alt="" height={400} />
                    </div>
                    <div className="mx-auto col-md-6  py-3 download_right" >
                        <h1>Download the Docta app</h1>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deserunt modi, nesciunt beatae pariatur quae. Quia dolorum quaerat inventore. Quibusdam mollitia eum voluptas recusandae!</p>
                        <h4>Get the link to download the app</h4>
                        <div className="sms_box">
                            <input type="text" placeholder='Enter your mobile no' /><button className="btn btn-primary ms-3 p-2">Send SMS</button>
                        </div>
                        <div className="d-flex mt-4">
                            <div className="create_btn filled d-flex justify-content-evenly align-items-center px-2"><ShopIcon />  Google Play</div>
                            <div className="create_btn outline d-flex justify-content-evenly align-items-center px-2"><AppleIcon /> Apple Store</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
