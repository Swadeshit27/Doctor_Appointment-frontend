import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DatePicker, Radio, TimePicker, message } from 'antd';
import axios from 'axios';

const Book = () => {
    const { particularDoc } = useSelector(state => state.doctors)
    const navigate = useNavigate();
    const [patientData, setpatientData] = useState({
        patient: "", mobile: "", time: "", date: "", gender: "", age: "", problem: "", docname: particularDoc.name, clinic: particularDoc.clinicDetails.clinicName, address: particularDoc.shortAdd, fee: particularDoc.fee, bookingTime: Date.now()
    })
    const saveData = async (e) => {
        e.preventDefault();
        const { patient, mobile, time, date, gender, age, problem } = patientData;
        if (!(patient && mobile && time && date && gender && age && problem)) {
            message.error("please filled all the fields")
        }
        else {
            const res = await axios.post("https://doctor-appointment-backend-a949.onrender.com/patientdata", { patientData });
            try {
                if (res.data.success) {
                    message.success(res.data.message);
                    navigate("/review");
                }
                else {
                    message.error(res.data.message);
                }
            } catch (error) {
                message.error("Internal error");
                navigate("/")
            }
        }
    }
    const handonchange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setpatientData({ ...patientData, [name]: value })
    }
    const timeStyle = {
        height: "3rem",
        borderRadius: " 25px",
        padding: "1rem"
    }

    return (
        <>
            <form className="row g-3 my-3 contactus booking_container">
                <div className="col-md-6">
                    <input type="text" className="form-control" value={patientData.patient} onChange={handonchange} name='patient' placeholder='Patient Name*' required={true} />
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" value={patientData.mobile} onChange={handonchange} name='mobile' placeholder="Patient's mobile number*" />
                </div>
                <div className="col-md-6">
                    <h4 >Gender</h4>
                    <Radio.Group name='gender' onChange={handonchange}>
                        <Radio value={'male'}>Male</Radio>
                        <Radio value={'Female'}>Female</Radio>
                        <Radio value={'others'}>others</Radio>
                    </Radio.Group>
                </div>
                <div className="col-md-6">
                    <input type="number" className="form-control" value={patientData.age} onChange={handonchange} name='age' placeholder="patient's age" />
                </div>
                <div className="col-md-6">
                    <p htmlFor="inputEmail4" className="form-label">Choose appointment Date & time</p>
                    <DatePicker onChange={(e, date) => { setpatientData({ ...patientData, date }) }} className={timeStyle} />
                    <TimePicker use12Hours format="h:mm a" onChange={(e, time) => setpatientData({ ...patientData, time })} />
                </div>
                <div className="col-12">
                    <textarea type="text" className="form-control" placeholder="please elaborate your problem" value={patientData.problem} onChange={handonchange} rows={5} name='problem' />
                </div>
                <h5>₹ {particularDoc.fee} Clinic fee</h5>
                <div className="col-12">
                    <button type="submit" className="btn btn-success me-4 mb-4" onClick={saveData}>Confirm Appoiment</button>
                    <Link to={'/'}><button className="btn btn-danger me-4 mb-4">Cancel Appoiment</button></Link>
                </div>
            </form>
        </>
    )
}

export default Book
