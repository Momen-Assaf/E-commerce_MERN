import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='h-16 shadow-sm bg-white'>
      <div className='h-full containter mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to="/">
            <Logo w={90} h={50} />
          </Link>
        </div>
        <div className='hidden lg:flex gap-1 items-center justify-between max-w-sm rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='Products Search...' className='w-full outline-none'></input>
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <CiSearch fontSize={18} />
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='cursor-pointer text-2xl '>
            <FaRegCircleUser />
          </div>
          <div className='relative text-2xl '>
            <span>
              <FaCartShopping />
            </span>
            <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>
          <div>
            <Link to="/login" className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header