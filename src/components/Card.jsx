import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({ catagory, imgsrc }) => {
    const navigate = useNavigate();
    return (
        <div className='flex rounded  overflow-hidden m-3 cursor-pointer' style={{ minWidth: "300px", height: "18rem", border: "1px solid #d3cbcb", boxShadow: "rgb(219 214 214) 2px 2px 5px 0px" }} onClick={()=>navigate('/doctors')}>
            <img src={imgsrc} alt="" className='w-100 h-75' />
            <div className="details">
                <h3 className='fs-4 p-2 text-capitalize text-secondary'>{catagory}</h3>
            </div>
        </div>
    )
}

export default Card
