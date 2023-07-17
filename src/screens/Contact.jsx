import React from 'react'
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <>
          <div className="container-fluid" style={{ margin: "6rem 0" }}>
              <div className="row my-5">
              <div className="col-12 col-md-6 order-1 order-md-0 ">
                      <h1 className='text-center py-3'>Feel Free To Contact</h1>
                      <form className='contactus'>
                          <input type="text" placeholder='Name*'  required={true}/>
                          <input type="text" placeholder='Email*'  required={true}/>
                          <input type="text" placeholder='Mobile*' required={true} />
                          <textarea name="text" rows="3" placeholder='Your query*' required={true}></textarea>
                          <div type="submit" className='contact_btn text-center'>Submit</div>
                      </form>
              </div>
              <div className="col-12 col-md-6 order-0 order-md-1 py-3 d-flex justify-content-center">
                  <img className=' img-fluid' src="images/customer.jpg" width={400} alt="" />
                  </div>
              </div>
              <div className="row justify-content-center contact_details py-5">
                  <div className="col-8 col-md-3 m-3">
                      <WifiCalling3Icon className='icon'/>
                      <p className='fs-5 fw-bold'>Phone</p>
                      <p>8436893969</p>
                  </div>
                  <div className="col-8 col-md-3 m-3">
                      <MarkEmailReadIcon className='icon' />
                      <p className='fs-5 fw-bold'>Email</p>
                      <p>help.pal@gamil.com</p>
                  </div>
                  <div className="col-8 col-md-3 m-3">
                      <LocationOnIcon className='icon' />
                      <p className='fs-5 fw-bold'>Address</p>
                      <p>Jalpaiguri</p>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Contact