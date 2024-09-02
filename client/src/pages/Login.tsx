import React from 'react';
import loginVector from '../images/login-vector.png';

const Login = () => {
  return (
    <div>
      <div className='display-flex block-size-100 justify-content-center'>
        <div className='image-base'>
          <img src={loginVector} alt="login vector" className='login-image' />
        </div>
        <div className='login-base-form'>
          <div className='login-logo'>
            <div className='align-items-center display-flex'>
              {/* Replace this with the actual SVG */}
              <svg>Your SVG here</svg>
              <span>learning</span>
            </div>
          </div>
          <div className='display-flex flex-direction-column gap-6 is-full'>
            <div className='display-flex flex-direction-column gap-1'>
              <h4 className='heading'>Welcome to learning!</h4>
              <p className='paragraph'>Please sign-in to your account and start the adventure</p>
            </div>
            <form action="/login" method="POST">
              <div className='display-inline-flex flex-direction-column position-relative min-width-0 padding-0 margin-0 border-0 vertical-align-top width-100'>
                <label htmlFor="email" className='input-label transform-none width-fit-content max-width-100 position-relative'>Email</label>
                <div className='input-base box-sizing-border-box cursor-text display-inline-flex align-items-center width-100 position-relative'>
                  <input type="email" id="email" className='input-area font-inherit color-currentColor border-0 box-sizing-content-box letter-spacing-inherit background-none' />
                </div>
              </div>
              <div className='display-inline-flex flex-direction-column position-relative min-width-0 padding-0 margin-0 border-0 vertical-align-top width-100'>
                <label htmlFor="password" className='input-label transform-none width-fit-content max-width-100 position-relative'>Password</label>
                <div className='input-base box-sizing-border-box cursor-text display-inline-flex align-items-center width-100 position-relative'>
                  <input type="password" id="password" className='input-area font-inherit color-currentColor border-0 box-sizing-content-box letter-spacing-inherit background-none' />
                  <div className='input-base-eye'>
                    <button type="button" className='button-base-eye'>
                      <i className="ri-eye-off-line"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className='login-forgot display-flex justify-between-center align-items-center position-relative box-sizing-border-box outline-0 border-0 margin-0 curson-pointer user-select-none vertical-align-middle text-decoration-none'>
                <label htmlFor="remember-me" className='login-forgot-label'>
                  <span>
                    <input type="checkbox" id="remember-me" className='login-checkbox' />
                  </span>
                  <span>Remember me</span>
                </label>
                <a href="/forgot-password">Forgot password?</a>
              </div>
              <button type="submit" className='login-button'>Login</button>
              <div>
                <p>New on our platform?</p>
                <a href="/signup">Create an account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
