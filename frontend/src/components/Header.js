import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className='h-16 shadow-sm'>
      <div className='h-full containter mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Logo w={90} h={50} />
        </div>
        <div className='flex gap-1 items-center'>
          <CiSearch fontSize={18} />
          <input type='text' placeholder='Products Search...'></input>
        </div>
      </div>
    </header>
  )
}

export default Header