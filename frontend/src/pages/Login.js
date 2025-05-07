import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const Login = () => {
    const [ShowPassword, SetShowPassword] = useState(false);
    const [Data, setData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataResponse = await fetch(SummaryApi.signin.url, {
            method: SummaryApi.signin.method,
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Data)
        })
        const dataApi = await dataResponse.json()
        console.log('data: ', dataApi)
        if (dataApi.success) {
            toast.success(dataApi.message)
            navigate('/')
        }
        if (dataApi.error) toast.error(dataApi.message);
    }
    console.log('log in data: ', Data);
    return (
        <section id='login'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
                    <div className='w-20 h-20 mx-auto overflow-hidden rounded-full'>
                        <img src='/assets/signin.gif' alt='login' />
                    </div>

                    <form
                        className='pt-6'
                        onSubmit={handleSubmit}
                    >
                        <div className='grid'>
                            <label>Email :</label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='email'
                                    name='email'
                                    onChange={handleChange}
                                    value={Data.email}
                                    placeholder='momenssf@gmail.com'
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>

                            <div>
                                <label>Password:</label>
                                <div className='bg-slate-100 p-2 flex'>
                                    <input
                                        type={ShowPassword ? 'text' : 'password'}
                                        name='password'
                                        onChange={handleChange}
                                        value={Data.password}
                                        placeholder='********'
                                        required
                                        className='w-full h-full outline-none bg-transparent'></input>
                                    <div className='cursor-pointer text-xl'
                                        onClick={() => SetShowPassword((prev) => (!prev))}>
                                        <span>
                                            {
                                                ShowPassword ?
                                                    (
                                                        <FaEyeSlash />
                                                    )
                                                    :
                                                    (
                                                        <FaEye />
                                                    )
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className='text-red-600 hover:text-red-700 flex justify-end hover:underline'>
                                    <Link to='/forgot-password'>ForgotPassword?</Link>
                                </div>
                            </div>
                            <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
                        </div>
                    </form>
                    <p className='my-5'>Dont have an account? <Link to='/sign-up' className='text-red-600 hover:text-red-700 hover:underline'> Sign up!</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Login