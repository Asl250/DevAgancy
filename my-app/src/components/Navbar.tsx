'use client';
import Image from 'next/image'
import logo from '../../public/logo (1).png' 
import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import './icon.css'

const Navbar = () => {
  // const [user, setUser]

    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  return (
    <div className='flex justify-between items-center h-28 max-w-[1640px] mx-auto px-4 xl:mx-[10%]'>
    <Image src={logo} alt='logo' className='cursor-pointer'/>
      <ul className='hidden md:flex lg:space-x-5 space-x-0'>
        <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Home</li>
        <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Services</li>
        <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Projects</li>
        <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>About</li>
        <li  className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Contact</li>
        <div className='flex element'>
          <Link id='login' href="/dashboard" className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Login</Link>
          <UserButton afterSignOutUrl='/'/>
        </div>
    
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full  bg-white  ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] pl-10'}>
        <Image src={logo} alt='logo' className='mt-5 ml-3 cursor-pointer'/>
        <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Home</li>
        <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Services</li>
        <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Projects</li>
        <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>About</li>
        <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Contact</li>
        <Link href="/dashboard" className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Login</Link>
        <UserButton afterSignOutUrl='/'/>

      </ul>
    </div>
  )
}

export default Navbar
