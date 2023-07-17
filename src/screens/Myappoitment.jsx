import { Button, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Myappoitment = () => {
    const [inputval, setinputval] = useState("");
    const [patients, setpatients] = useState([]);
    const searchPatient = async () => {
        const res = await axios.post("https://doctor-appointment-backend-a949.onrender.com/getpatient", { inputval });
        if (res.data.success) {
            setpatients(res.data.data)
        }
        else {
            message.error(res.data.message)
        }
    }
    useEffect(() => {
        setpatients([])
    }, [inputval])

    return (
        <>
            <div className="col-10 text-center  mx-auto appoitment_search " style={{ marginTop: "6rem" }} >
                <input type="search" name="" id="" className='w-50' onChange={e => setinputval(e.target.value)} placeholder='Enter your mobile no' />
                <Button type="primary" className='ms-2' shape="circle" icon={<SearchOutlined />} onClick={searchPatient}></Button>
            </div>
            <div className="container mt-5" style={{ minHeight: "80vh" }}>
                {patients ?
                    <>
                        {patients.map((val) => {
                            const { patient, mobile, time, date, gender, age, problem, docname, clinic, address, fee } = val;
                            return (
                                <>
                                    <hr />
                                    <div className="row app_results">
                                        <div className="col-10 mx-auto col-lg-3 col-sm-6">
                                            <p><b>Doctor Name:</b>  {docname}</p>
                                            <p> <b>Clinic Name: </b> {clinic} </p>
                                            <p><b>Clinic Address:</b>  {address}</p>
                                        </div>
                                        <div className="col-10 mx-auto col-lg-3 col-sm-6">
                                            <p><b>Patient Name:</b>  {patient}</p>
                                            <p><b>Mobile No.:</b> {mobile}  </p>
                                            <p><b>Gender:</b>  {gender} & Age:  {age}</p>
                                            <p></p>
                                        </div>
                                        <div className="col-10 mx-auto col-md-6">
                                            <p><b>Patient's Problem:</b> {problem} </p>
                                            <p><b>Appoitment date & time:</b>  {date} {time}  </p>
                                            <p><b>Clinic Fee: </b> {fee}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            )
                        })}
                    </>
                    : <p>sorry no data found</p>}
            </div>
        </>
    )
}

export default Myappoitment
