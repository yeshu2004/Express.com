import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='flex items-center justify-between lg:px-20 px-10 py-10 font-semibold'>
        <Link to={"/"} className='text-4xl font-bold flex items-end'><h1>Express</h1><span className='text-blue-500 text-2xl'>.com</span></Link>
        <div className='flex items-center lg:gap-10 gap-5'>
          <Link className='lg:text-lg text-sm' to={"/login"}>Login</Link>
          <Link className='lg:text-lg text-sm'>Register</Link>
        </div>
      </div>
    </>
  )
}

export default Header