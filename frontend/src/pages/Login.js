import React from 'react'
import { FaEye } from "react-icons/fa";

const Login = () => {
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
                                <input type='password' placeholder='********' className='w-full h-full outline-none bg-transparent'></input>
                                <div className='cursor-pointer'>
                                    <span>
                                        <FaEye />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login