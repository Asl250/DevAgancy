'use client'
import Image from 'next/image'
import photo from '../../public/illustration (1).png'

const Banner = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold text-7xl text-center mb-10'>
            We Build 
            <span className='bg-[#F4D3A1]'> Digital </span> 
            Product
            <br />
             For Your Success
        </h1>
      <div className='space-x-3 max-sm:flex max-sm:flex-col max-sm:items-center '>
      <button className='px-[40px] py-[20px] bg-[#FF733B] rounded-md text-white text-2xl max-sm:mb-4'>Get Started</button>
      <button className='px-[40px] py-[20px] bg-[#F4D3A1] rounded-md text-[#FF733B] text-2xl max-sm:mr-5'>Watch Demo</button>
      </div>
        <Image src={photo} alt='photo' className='mb-10'/>
    </div>
  )
}

export default Banner
