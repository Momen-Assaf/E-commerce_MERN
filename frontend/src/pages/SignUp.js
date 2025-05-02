import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [ShowPassword, SetShowPassword] = useState(false);
    const [ShowPasswordConformation, SetShowPasswordConformation] = useState(false);
    const [Data, setData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <section id='sign-up'>
            <div className='mx-auto containter p-4'>
                <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src='/assets/signin.gif' alt='login' />
                    </div>
                    <form
                        className='pt-6'
                    >
                        <div className='grid'>
                            <label>Full Name :</label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='text'
                                    name='name'
                                    onChange={handleChange}
                                    value={Data.name}
                                    placeholder='Momen Assaf'
                                    className='w-full h-full outline-none bg-transparent'
                                />
                            </div>
                            <label>Email: </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='email'
                                    name='email'
                                    onChange={handleChange}
                                    value={Data.email}
                                    placeholder='momenssf@gmail.com'
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </section >
    )
}

export default SignUp