import { Tabs } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Clinic from '../components/Clinic';
import Book from './Book';

const DoctorProfile = () => {
    const navigate = useNavigate();
    const { particularDoc } = useSelector(state => state.doctors)
    
    const { name, photo, qual, special, exp, fee, info, shortAdd, rating, clinicDetails } = particularDoc;
  
    return (
        <>{
            particularDoc ? <>
                <h1 className='text-center' style={{ marginTop: "6rem" }}>Doctor's Profile</h1>
                <div className="container col-sm-10 col-lg-8 p-4  d-flex flex-column min-vh-100 " >
                    <div className="d-md-flex doctor_profile" >
                        <div className="img">
                            <img src={`https://doctor-appointment-backend-a949.onrender.com/Images/${photo}`} alt="photoofdoctor" style={{ width: "150px", height: "150px", }} className='mt-4 mx-3' />
                        </div>
                        <div className="details p-3">
                            <p className='fs-3 text-primary'>{name}</p>
                            <p className='text-success my-0'>Profile is claimed</p>
                            <p className='my-0'>{qual}</p>
                            <p className='my-0'>{special}</p> 
                            <p className='py-0'><span className='text-success '> {exp}</span> Years Experience Overall</p>
                            <p className='text-secondary'> Medical Registration Verified</p> 
                            <p>{info}</p>
                        </div>
                    </div>
                    <Tabs 
                        className='my-3'
                        defaultActiveKey="1"
                        items={[
                            {
                                label: 'Clinic details',
                                key: '1',
                                children: <Clinic clinicDetails={clinicDetails} fee={fee} rating={rating} />,
                            },
                            {
                                label: 'Book Now',
                                key: '3',
                                children: <Book/>
                            },
                        ]}
                    />
                </div>
            </>
                : navigate("/")
        }
            

        </>
    )
}

export default DoctorProfile
