import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [ShowPassword, SetShowPassword] = useState(false);
    return (
        <section id='login'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src='/assets/signin.gif' alt='login' />
                    </div>

                    <form>
                        <div className=''>
                            <label>Email :</label>
                            <div className='bg-slate-100 p-2'>
                                <input type='email' placeholder='momenssf@gmail.com' className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                        <div>
                            <label>Password:</label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input type={ShowPassword ? 'text' : 'password'} placeholder='********' className='w-full h-full outline-none bg-transparent'></input>
                                <div className='cursor-pointer text-xl' onClick={() => SetShowPassword((prev) => (!prev))}>
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
                        </div>
                        <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login