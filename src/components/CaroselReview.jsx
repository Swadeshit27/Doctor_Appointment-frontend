import React, { useEffect, useState } from 'react'
import Review from './Review'
import { Carousel } from 'antd'
import axios from 'axios'

const CaroselReview = () => {
    const [reviewList, setreviewList] = useState([])
    const fetchReview = async () => {
        const res = await axios.get("https://doctor-appointment-backend-a949.onrender.com/getReview");
        setreviewList(res.data.data);
    }
    useEffect(() => {
        fetchReview();
    }, [])

    return (
        <>
            <div className="container-fluid col-11 py-3">
                <h2 className='text-center mx-4'>What our users have to say</h2>
                    <Carousel autoplay  className='col-10 mx-auto mt-4 ' >
                        {reviewList.map((val, i) => {
                            return <Review data={val} key={i} />
                        })}
                    </Carousel>
            </div>
        </>
    )
}

export default CaroselReview
