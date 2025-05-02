import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='h-16 shadow-sm'>
      <div className='h-full containter mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Logo w={90} h={50} />
        </div>
        <div className='hidden lg:flex gap-1 items-center justify-between max-w-sm rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='Products Search...' className='w-full outline-none'></input>
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <CiSearch fontSize={18} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header