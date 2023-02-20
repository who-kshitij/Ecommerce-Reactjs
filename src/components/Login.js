import React from 'react'

export default function Login() {
    return (
        <>
        <div className='login-main'>
            <div className="login">
                <div className="logform">
                    <h2>Login to your account</h2>
                    <input className='loginput' type="email" name="Email" placeholder='e-mail' />
                    <input className='loginput' type="password" name="Password" placeholder='password' />
                    <div className="logopt">
                        <span className="opt">
                           <span><input type="checkbox" name="Remember" id="" /> Remember me</span>
                        </span>
                        <span className="opt1">Forgot password?</span>
                    </div>
                    <div className="logbtn"><a className='link' href="/"><button className='button-17 btn-c3'>Login</button></a></div>
                    <p>OR</p>
                    <p>Login using social networks</p>
                    <div className='footer-social-icon'>
                        <span className='logicn'>
                        <a href="/"><i className="fab fa-facebook-f facebook-bg"></i></a>
                        <a href="/"><i className="fab fa-twitter twitter-bg"></i></a>
                        <a href="/"><i className="fab fa-google-plus-g google-bg"></i></a>
                        </span>
                    </div>
                </div>
                <div className="lognew">

                </div>
            </div>
        </div>
        </>

    )
}
