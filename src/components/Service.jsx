import React, { useEffect } from 'react'
import ServiceCard from './ServiceCard';
import AOS from "aos"
import "aos/dist/aos.css"

const serviceApi = [
  { imgSrc: "https://img.freepik.com/free-photo/young-female-doctor-white-coat-with-stethoscope-around-her-neck-showing-smartphone-smiling-confident-sitting-table-with-laptop-pink-wall_141793-52557.jpg?size=626&ext=jpg&ga=GA1.2.188362780.1679900037&semt=ais", title: "Easy to Appointment", description: "Confirm appointment" },
  { imgSrc: "https://www.pngitem.com/pimgs/m/455-4554771_doctor-png-female-doctor-transparent-background-png-download.png", title: "Easy to find doctors", description: "Find doctors near you" },
  { imgSrc: "https://img.freepik.com/free-photo/young-bearded-man-blue-shirt-with-headphones-with-microphone-smiling-showing-thumbs-up_141793-37307.jpg?size=626&ext=jpg&ga=GA1.2.188362780.1679900037&semt=ais", title: "24x7 Helpline", description: "Feel free to contact" },
  { imgSrc: "https://img.freepik.com/free-photo/high-angle-pill-foils-plastic-containers_23-2148533456.jpg?size=626&ext=jpg&ga=GA1.1.188362780.1679900037&semt=ais", title: "Medicines", description: "Essential at your doorstep." },
  { imgSrc: "https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-blood-samples-covid-test_23-2148958363.jpg?size=626&ext=jpg&ga=GA1.1.188362780.1679900037&semt=ais", title: "Lab Tests", description: "simply pick up at your home." },
]


const Service = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <>
      <div className='container-fluid col-10'>
        <h2 className='text-center my-3' data-aos="zoom-in">Why Choose Us</h2>
        <div className='sec_subContainer justify-content-lg-between my-2' >
          {serviceApi.map((val, i) => {
            return <ServiceCard data={val} key={i} dataaos={"zoom-in"}  />
          })}
        </div>
      </div>
    </>
  )
}

export default Service;