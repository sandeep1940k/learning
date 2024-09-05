import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import loginVector from '../assets/images/login-vector.png'
import {Link} from 'react-router-dom'


function Login() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const formValues = watch();
    const [isShowPassword, setIsShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleShowPassword = () => {
        setIsShowPassword(prevState => !prevState);
    };
    return (
        <div className='login-container'>
            <div className='login-layout'>
                <div className='login-image'>
                    <img src={loginVector} alt="login vector" />
                </div>
                <div className='login-base-form'>
                    <div className='login-logo'>
                        <div className='login-logo-base'>
                            <svg width="0.8334em" height="1.25em" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-2xl text-primary"><path d="M10.9812 0.00524902C9.05254 0.154841 9.18305 2.24353 9.68854 2.78302C8.25199 3.76907 4.79545 6.14063 2.46161 7.7383C0.441925 9.12088 -0.306542 12.5842 0.404209 14.8459C1.09437 17.0421 4.54196 18.6769 6.37589 19.173C6.37589 19.173 4.26138 20.3734 2.4013 21.8357C0.541198 23.298 -0.226411 25.2159 1.11576 27.368C2.45793 29.5202 4.62727 29.3677 6.37298 28.5902C8.11869 27.8127 11.6976 25.1525 13.7964 23.6958C15.5375 22.3786 15.988 19.5071 15.1866 17.0779C14.5366 15.1079 10.9443 13.2467 9.15607 12.5842C9.88894 12.058 11.8158 10.6997 13.5014 9.48761C14.0794 11.114 15.9999 10.9862 16.5856 10.1167C17.3169 8.52096 18.8487 4.89685 19.621 3.10974C19.9586 1.74926 19.1141 1.01258 18.2628 0.857968C17.0426 0.636375 13.9353 0.349144 10.9812 0.00524902Z" fill="currentColor"></path><path d="M9.69175 2.78408C9.07245 2.04544 9.2087 0.0928254 11.0154 0.0038147C12.0027 0.118754 13.0111 0.227932 13.9603 0.330705C15.8511 0.535426 17.5071 0.714735 18.2949 0.86355C19.1757 1.02993 19.9586 1.84025 19.6198 3.13127C19.3478 3.76064 18.9846 4.6053 18.5994 5.50115C17.8907 7.14911 17.1076 8.97035 16.6806 9.94344C16.2627 10.896 14.2222 11.294 13.4959 9.48911C11.8103 10.7012 9.92306 12.0566 9.19019 12.5828C9.06583 12.5292 8.83906 12.4502 8.54997 12.3496C7.58877 12.0148 5.93855 11.4401 5.0719 10.7624C3.49587 9.3061 4.22761 7.0786 4.79045 6.1469C6.48266 4.98846 7.54245 4.26039 8.54488 3.57175C8.92499 3.31063 9.29681 3.05518 9.69175 2.78408Z" fill="white" fill-opacity="0.2"></path><path d="M6.37927 19.1733C7.71785 19.6318 10.3831 20.7458 10.9422 21.4913C11.641 22.4231 12.0573 23.3964 10.6373 25.8923C10.3983 26.0539 10.1753 26.2048 9.96614 26.3465C8.07101 27.6297 7.31218 28.1435 6.0452 28.7466C4.94018 29.1805 2.40572 29.7128 0.969301 27.1147C-0.406419 24.6263 1.17752 22.8041 2.39865 21.8418L4.42527 20.376L5.39487 19.7628L6.37927 19.1733Z" fill="white" fill-opacity="0.2"></path></svg>
                            <span>learning</span>
                        </div>
                    </div>
                    <div className='login-form-container'>
                        <div className='login-form-heading'>
                            <h4>Welcome to learning! &#128400;</h4>
                            <p>Please sign-in to your account and start the adventure</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='login-form-element'>
                                <label htmlFor="email">Email</label>
                                <div className='login-custom-input'>
                                    <div className='login-custom-input'>
                                        <input type="email" id="email" {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: 'Please enter a valid email address'
                                            }
                                        })} />
                                    </div>
                                </div>
                                {errors.email && <div className='login-error'>{errors.email.message}</div>}
                            </div>
                            <div className='login-form-element'>
                                <label htmlFor="password">Password</label>
                                <div className='login-custom-input'>
                                    <input type={isShowPassword ? 'text' : 'password'} id="password" {...register('password', {
                                        required: 'Password is required',
                                        minLength: { value: 6, message: 'Password should be at least 6 characters long' }
                                    })} />
                                    <div className='login-eye-input'>
                                        <button type="button" className='button-base-eye' onClick={handleShowPassword}>
                                            <i className={isShowPassword ? 'ri-eye-line' : 'ri-eye-off-line'}></i>
                                        </button>
                                    </div>
                                </div>
                                {errors.password && <div className='login-error'>{errors.password.message}</div>}
                            </div>
                            <div className='login-forgot-base'>
                                <label htmlFor="rememberMe" className='login-forgot-label'>
                                    <span>
                                        <input type="checkbox" id="rememberMe" className='login-checkbox' {...register('rememberMe', { required: 'Please select' })} />
                                        {formValues.rememberMe ?
                                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7Z" fill="currentColor"></path>
                                                <path d="M11 13.793L9.35348 12.1465L8.64648 12.8535L11 15.207L15.8535 10.3535L15.1465 9.6465L11 13.793Z" fill="white"></path>
                                            </svg>
                                            :
                                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z" stroke="var(--mui-palette-text-disabled)" strokeWidth="2"></path>
                                            </svg>
                                        }
                                    </span>
                                    <span>Remember me</span>
                                </label>
                                {errors.rememberMe && <div className='login-error'>{errors.rememberMe.message}</div>}
                                <a href="/forgot-password">Forgot password?</a>
                            </div>
                            <button type="submit" className='login-button'>Login</button>
                            <div className='login-account-base'>
                                <p>New on our platform?</p>
                                <Link to="/signup">Create an account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
