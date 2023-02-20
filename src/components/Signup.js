import React from 'react'

export default function Signup() {
  return (
    <>
    <div className='login-main'>
            <div className="signup">
                <div className="signform">
                    <h2 className='signuh2'>Welocme to Shopstop!</h2>
                    <p className='sp'>Register your account</p>
                    <h6>Name</h6>
                    <input className='signinput' type="text" name="name" placeholder='name'/>
                    <h6>E-mail</h6>
                    <input className='signinput' type="email" name="Email" placeholder='e-mail' />
                    <h6>Password</h6>
                    <input className='signinput' type="password" name="Password" placeholder='password' />
                    {/* <div className="logopt">
                        <span className="opt">
                           <span><input type="checkbox" name="Remember" id="" /> Remember me</span>
                        </span>
                        <span className="opt1">Forgot password?</span>
                    </div> */}
                    <div className="logbtn"><a className='link' href="/"><button className='button-17 btn-c3'>Sign Up</button></a></div>
                    {/* <p>OR</p> */}
                    <div className="regsoc">

                    
                    <p>Register using social networks</p>
                    <div className='footer-social-icon'>
                        <span className='logicn'>
                        <a href="/"><i className="fab fa-facebook-f facebook-bg"></i></a>
                        <a href="/"><i className="fab fa-twitter twitter-bg"></i></a>
                        <a href="/"><i className="fab fa-google-plus-g google-bg"></i></a>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="lognew">

                </div>
            </div>
        </div>
    </>

  )
}
