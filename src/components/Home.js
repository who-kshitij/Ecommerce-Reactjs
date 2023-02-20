import React from 'react'
import Offers from './Offers';
import Numbers from './Numbers';
import Dealday from './Dealday';
import Featured from './Featured';
import Usp from './Usp';
import { Outlet, Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="main-land">
          <div className="landing">
            <div className='landing-text'>
              <h1>
                FLAT 50% OFF
              </h1>
              <h4>
                on first order
              </h4>
              <h6>
                So what are you waiting for? Hurry up! Register now.
              </h6>
            </div>
            <div className='landbtn'>
              <Link className='link' to="/signup"><button className='button-17 btn-c1'>Register Now</button></Link>
              <Link className='link' to="/login"><button className='button-17 btn-c2'>Login</button></Link>
            </div>
          </div>
        </div>
      </div>
      <Offers />
      <Dealday />
      <Featured />
      <Usp />
      <Numbers />
      {/* <Outlet /> */}
    </>
  )
}
