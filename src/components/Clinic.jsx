import React from 'react'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';

const Clinic = (props) => {
    const { clinicName, address, week, timing, helpNo } = props.clinicDetails;
    const { fee, rating } = props;
    return (
        <>
            <div className="d-flex justify-content-center align-items-center ">
                <div className="smallcontainer p-4 rounded shadow-sm">
                    <div className=" d-flex justify-content-between">
                        <h4>Clinic Appointment</h4>
                        <h4 className='text-primary'>₹ {fee} </h4>
                    </div>
                    <hr className='text-secondary' />
                    <div className="details">
                        <div className="d-block d-md-flex justify-content-between align-items-center">
                            <p className='fs-4 text-primary'><b className='text-secondary'>Clinic Name: </b> {clinicName}</p>
                            <p className='fs-4 text-success'>{rating} <StarRoundedIcon /></p>
                        </div>
                        <div className="timming">
                            <p className='fs-6 my-0'>{week}</p>
                            <p className='fs-6 my-0'> {timing}</p>
                        </div>
                        <div className='d-flex align-items-center  justify-content-start mt-4'><LocationOnRoundedIcon color='blue' />  {address}</div>
                        <div className='d-flex align-items-center  justify-content-start my-2'><PhoneInTalkRoundedIcon color='blue'/>{helpNo}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clinic
