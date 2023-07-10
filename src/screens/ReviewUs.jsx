import { Rate, message } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ReviewUs = () => {
    const [revData, setRevData] = useState({ name: "", profession: "", rate: 3, reviewData: "" });
    const navigate = useNavigate();
    const addData = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setRevData({ ...revData, [name]: value })
    }
    const saveReview = async () => {
        const { name, profession, rate, reviewData } = revData;
        if (!(name && profession && rate && reviewData)) {
            message.error("Please filled all the blocks")
        }
        else {
            const res = await axios.post("https://doctor-appointment-backend-a949.onrender.com/userReview", { revData })
            if (res.data.success) {
                message.success(res.data.message);
                navigate('/');
            }
            else message.error(res.data.message);
        }
    }
    return (
        <>
            <div className="container-fluid col-10">
                <div className="row my-5">
                    <div className="col-12 col-md-6 order-1 order-md-0 ">
                        <h1 className='text-center py-3'>Please review our website</h1>
                        <form className='contactus'>
                            <div className='rating'><Rate defaultValue={revData.rate} onChange={(e) => setRevData({ ...revData, rate: e })} /></div>
                            <input type="text" placeholder='Name*' name='name' onChange={addData} required={true} />
                            <input type="text" placeholder='profession*' name="profession" onChange={addData} required={true} />
                            <textarea rows="3" placeholder='Your experience*' name='reviewData' onChange={addData} required={true}></textarea>
                            <div type="submit" className='contact_btn text-center' onClick={saveReview}>Submit</div>
                        </form>
                    </div>
                    <div className="col-12 col-md-6 order-0 order-md-1 py-3 d-flex justify-content-center">
                        <img className=' img-fluid' src="images/review.jpg" width={400} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewUs
