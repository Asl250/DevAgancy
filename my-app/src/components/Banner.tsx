'use client'
import Image from 'next/image'
import photo from '../../public/illustration (1).png'

const Banner = () => {
  return (
    <div className='my-[150px]  flex flex-col items-center '>
      <h1 className='font-bold text-7xl text-center'>
            We Build 
            <span className='bg-[#F4D3A1]'> Digital </span> 
            Product
            <br />
             For Your Success
        </h1>
      <div className='space-x-3'>
      <button className='px-[35px] py-[10px] bg-[#FF733B] rounded-md text-white text-xl max-[376px]:block max-[376px]:mb-2 max-[376px]:m-4'>Get Started</button>
      <button className='px-[35px] py-[10px] bg-[#F4D3A1] rounded-md text-[#FF733B] text-xl'>Watch Demo</button>
      </div>
        <Image src={photo} alt='photo' className='mb-10'/>
    </div>
  )
}

export default Banner
