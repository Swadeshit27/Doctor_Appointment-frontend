import { Avatar, Rate } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import React from 'react'



const Review = ({ data }) => {
    const { name, profession, rate, reviewData } = data;
    return (
        <>
            <div className="review_card">
                <div className="review_header">
                    <div className="user_header">
                        <Avatar icon={<UserOutlined />} />
                        <div>
                            <h5>{name}</h5>
                            <p>{profession}</p>
                        </div>
                    </div>
                    <div className="rating">
                        <Rate disabled defaultValue={rate} />
                    </div>
                </div>
                <div className="review_body">
                    <p>{reviewData}</p>
                </div>
            </div>
        </>
    )
}

export default Review



