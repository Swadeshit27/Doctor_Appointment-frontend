// import { Select } from 'antd';
import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminSignup = () => {
    const [DocData, setDocData] = useState({ name: "", qual: "", special: "", exp: "", fee: "", rating: "", shortAdd: "", info: "", catagory: "dentist" });
    const [DocPhoto, setDocPhoto] = useState();
    const [clinic, setclinic] = useState({ clinicName: "", week: "", timing: "", address: "", helpNo: "" });
    const addData = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setDocData({ ...DocData, [name]: value });
        setclinic({ ...clinic, [name]: value });
    }
    const addClinic = async (e) => {
        e.preventDefault();
        const { name, qual, special, exp, fee, rating, shortAdd, info, catagory } = DocData;
        const { clinicName, week, timing, address, helpNo } = clinic;
        // console.log(name, qual, special, exp, fee, rating, shortAdd, info, catagory)
        // console.log(clinicName, week, timing, address, helpNo)
        let Data = new FormData();
        Data.append("photo", DocPhoto)
        Data.append("name", name)
        Data.append("qual", qual)
        Data.append("special", special)
        Data.append("exp", exp)
        Data.append("rating", rating)
        Data.append("fee", fee)
        Data.append("shortAdd", shortAdd)
        Data.append("info", info)
        Data.append("catagory", catagory)

        Data.append("clinicName", clinicName)
        Data.append("week", week)
        Data.append("timing", timing)
        Data.append("address", address)
        Data.append("helpNo", helpNo)
        const res = await axios.post("https://doctor-appointment-backend-a949.onrender.com/doctorData", Data);
        if (res.data.success) {
            message.success(res.data.message);
            setclinic({ clinicName: "", week: "", timing: "", address: "", helpNo: "" });
            setDocData({ name: "", qual: "", special: "", exp: "", fee: "", rating: "", shortAdd: "", info: "", catagory: "" });
        }
        else message.console.error(res.data.message);
    }
    const removeall = (e) => {
        e.preventDefault();
        setclinic({ clinicName: "", week: "", timing: "", address: "", helpNo: "" });
        setDocData({ name: "", qual: "", special: "", exp: "", fee: "", rating: "", shortAdd: "", info: "", catagory: "" });
    }

    return (
        <>
            <div className="container " style={{ margin: "6rem 0" }}>
                <h1 className='text-center'>Enter Doctors Data</h1>
                <form className="row g-3">
                    <div className="col-12">
                    <h1 >Select Catagory</h1>
                        <select value={DocData.catagory} onChange={addData} name='catagory' style={{ fontSize: "1.3rem",padding:"0 .5rem", height: "2.5rem", width: "15rem", color:" #645353",border: "1px solid #ced4da", borderRadius: "5px", outline: "none"}} >
                        <option value="dentist">Dentist</option>
                        <option value="Gynecology">Gynecology</option>
                        <option value="Dietitian/Nutritionist">Dietitian/Nutritionist</option>
                        <option value="Physiotherapist">Physiotherapist</option>
                        <option value="General surgeon">General surgeon</option>
                        <option value="General physician">General physician</option>
                        <option value="pediatrician">pediatrician</option>
                        <option value="Gastroenterologist">Gastroenterologist</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Name</label>
                        <input type="text" className="form-control" value={DocData.name} onChange={addData} name='name' placeholder='Dr. Name*' />
                    </div>
                    <div className="col-md-6">
                        <p className="form-label">Upload Doctor's photo</p>
                        <input type="file" name="file" id="file" accept='.jpg, .jpeg' onChange={(e) => setDocPhoto(e.target.files[0])} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Qualification</label>
                        <input type="text" className="form-control" value={DocData.qual} onChange={addData} name='qual' placeholder='Dr. Qualification*' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Specialist</label>
                        <input type="text" className="form-control" value={DocData.special} onChange={addData} name='special' placeholder='Specialist*' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Experiance</label>
                        <input type="number" className="form-control" value={DocData.exp} onChange={addData} name='exp' placeholder='Dr. Experience*' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Fee</label>
                        <input type="number" className="form-control" value={DocData.fee} onChange={addData} name='fee' placeholder='Dr. clinic fee*' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Rating</label>
                        <input type="number" className="form-control" value={DocData.rating} onChange={addData} name='rating' placeholder='Dr. clinic ration*' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Short clinic address</label>
                        <input type="text" className="form-control" value={DocData.shortAdd} onChange={addData} name='shortAdd' placeholder='Dr. clinic short address*' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Inforamaion</label>
                        <input type="text" className="form-control" value={DocData.info} onChange={addData} name='info' placeholder='Dr. Information*' />
                    </div>
                    <h1>Clinic details</h1>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Clinic name</label>
                        <input type="text" className="form-control" value={clinic.clinicName} onChange={addData} name='clinicName' placeholder='Dr. clinic name*' />
                    </div>
                    <div className="col-md-6">
                        <p htmlFor="inputEmail4" className="form-label">Clinic timing</p>
                        <input type="text" className="form-control col-3 mb-2 " id="inputEmail4" value={clinic.week} onChange={addData} name='week' placeholder='weeks*' />
                        <input type="text" className="form-control col-3"   id="inputEmail4" value={clinic.timing} onChange={addData} name='timing' placeholder='Available time*' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Full address</label>
                        <textarea type="text" className="form-control" rows={3} value={clinic.address} onChange={addData} name='address' placeholder='clinic full address*' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Clinic contact no</label>
                        <input type="number" className="form-control" id="inputEmail4" value={clinic.helpNo} onChange={addData} name='helpNo' placeholder='Clinic helpline no*' />
                    </div>
                    <div className="col-12 d-flex">
                        <button type="submit" className="btn btn-primary m-2" onClick={addClinic}>Add clinic details</button>
                        <button type="submit" className="btn btn-danger m-2" onClick={removeall}>clear all</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminSignup
