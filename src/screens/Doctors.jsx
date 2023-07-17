import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setparticularDoc } from '../reducers/features/Doctors'

const Doctors = () => {
    const { doctors } = useSelector(state => state.doctors)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <>
            {doctors.listofDoctors ?
                <div className="container  min-vh-100 " style={{ marginTop: "6rem " }}>
                    <h3>{doctors.listofDoctors.length} doctors available in Kolkata</h3>
                    <h5>Book appointments with minimum wait-time & verified doctor details</h5>
                    <hr />
                    <>
                        {doctors.listofDoctors.map((val) => {
                            return (
                                <>
                                    <div className="col-12 col-lg-10  d-flex flex-column flex-md-row align-items-center justify-content-md-around">
                                        <div className="imgage">
                                            <img src={`https://doctor-appointment-backend-a949.onrender.com/Images/${val.photo}`} alt="doctor" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
                                        </div>
                                        <div className="details w-lg-50 my-3" >
                                            <div className='fs-3 text-primay'>{val.name}</div>
                                            <div>{doctors.catagory}</div>
                                            <div className='lfs-5'>{val.exp} years experience overall </div>
                                            <div>  <b>{val.shortAdd}</b> :  {val.clinicDetails.clinicName}</div>
                                            <p> ₹{val.fee} Consultation fee at clinic</p>
                                        </div>
                                        <div className="button">
                                            <Link className="btn btn-primary bottom-0 " style={{ position: "relative", bottom: " -7rem" }} onClick={() => dispatch(setparticularDoc(val))} to={"/doctor"}>Book Now</Link>
                                        </div>
                                    </div>
                                    <hr className='col-lg-10' />
                                </>
                            )
                        })}
                    </>
                </div>
             : navigate("/")
            }
        </>
    )
}

export default Doctors
