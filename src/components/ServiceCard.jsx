import React from 'react'

const ServiceCard = ({ data }) => {
    const { imgSrc, title, description } = data;
    return (
        <>
            <div className="ser_container col-6 col-md-3" style={{ width: "13rem" }} >
                <img src={imgSrc} alt="" />
                <div className="ser_details">
                    <h4 className='text-center p-2'>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
