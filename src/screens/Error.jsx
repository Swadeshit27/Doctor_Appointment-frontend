import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div class="container-fluid main" style={{ margin: "6rem 0" }}>
                <div class="row">
                    <div class="col-md-10 col-12 mx-auto  d-flex flex-column align-items-center  ">
                        <img src="images/404.svg" alt="about" class="img-fluid" width="500" />
                        <h3>Oops Page not found </h3>
                        <Link className='btn btn-primary my-3' to="/">Go back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error
