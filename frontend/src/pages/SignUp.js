import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import imageToBase64 from '../helpers/imageToBase64';


const SignUp = () => {
    const [ShowPassword, SetShowPassword] = useState(false);
    const [ShowPasswordConformation, SetShowPasswordConformation] = useState(false);
    const [Data, setData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        profilePic: ''
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
    // console.log('sign up data: ', Data);

    const handleUploadedFile = async (e) => {
        const file = e.target.files[0];
        const profilePicture = await imageToBase64(file);
        // console.log('file', profilePicture);

        setData((prev) => {
            return {
                ...prev,
                profilePic: profilePicture
            }
        })
    }
    return (
        <section id='sign-up'>
            <div className='mx-auto containter p-4'>
                <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={Data.profilePic || '/assets/signin.gif'} alt='login' />
                        </div>
                        <form>
                            <label>
                                <div className='text-xs bg-opacity-30 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                                    Upload Profile Picture
                                </div>
                                <input type='file' className='hidden' onChange={handleUploadedFile} />
                            </label>
                        </form>
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
                                    required
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
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                            <div>
                                <label>Password: </label>
                                <div className='bg-slate-100 p-2 flex'>
                                    <input
                                        type={ShowPassword ? 'text' : 'password'}
                                        name='password'
                                        onChange={handleChange}
                                        value={Data.password}
                                        placeholder='********'
                                        required
                                        className='w-full h-full outline-none bg-transparent'
                                    />
                                    <div className='cursor-pointer text-xl'
                                        onClick={() => SetShowPassword((prev) => (!prev))}>
                                        <span>
                                            {
                                                ShowPassword ?
                                                    (
                                                        <FaEyeSlash />
                                                    ) :
                                                    (
                                                        <FaEye />
                                                    )
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label>Confirm Password: </label>
                                <div className='bg-slate-100 p-2 flex'>
                                    <input
                                        type={ShowPasswordConformation ? 'text' : 'password'}
                                        name='passwordConfirm'
                                        onChange={handleChange}
                                        value={Data.passwordConfirm}
                                        placeholder='********'
                                        required
                                        className='w-full h-full outline-none bg-transparent'
                                    />
                                    <div className='cursor-pointer text-xl'
                                        onClick={() => SetShowPasswordConformation((prev) => (!prev))}>
                                        <span>
                                            {
                                                ShowPasswordConformation ?
                                                    (
                                                        <FaEyeSlash />
                                                    ) :
                                                    (
                                                        <FaEye />
                                                    )
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign Up</button>
                        </div>
                    </form>
                    <p className='my-5'>Already have an account? <Link to='/login' className='text-red-600 hover:text-red-700 hover:underline'> Login!</Link></p>

                </div>
            </div >
        </section >
    )
}

export default SignUp