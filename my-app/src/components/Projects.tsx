'use client'
import photo1 from '../../public/1 (1).png'
import photo2 from '../../public/2.png'
import Image from 'next/image'


const Projects = () => {
  return (
    <div>
        <div className="lg:justify-between  flex mx-[5%]">
        <div className="block">
            <p className="text-4xl font-bold underline decoration-[#fc9063]">Our Projects</p><br/>
            <p className="text-[#a49e9b] text-xl">
                Present placerated agestas egestas cras rhone <br/>
                magna rutrum tellus laoret 
            </p>
        </div>
        <div>
            <div className='max-[640px]:ml-[50px]'>
            <button className='max-sm:hidden lg:block px-[40px] py-[20px] bg-[#F4D3A1] rounded-md text-[#FF733B] text-2xl'>See More</button>

            </div>
        </div>
        </div>
        <div className="my-[10px] max-sm:mx-[30%] grid lg:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-2 justify-center items-center max-[1330px]:mx-[20%]">
                <Image src={photo1} alt="image1" className='lg:mx-[15%] max-sm:mb-5'/>
                <Image src={photo2} alt="image2" className='lg:mx-[15%]'/>
        </div>
        <div className='lg:hidden flex justify-center md:hidden mt-6'>
            <button className='px-[30px] py-[20px] bg-[#F4D3A1] context-center rounded-md text-[#FF733B] text-2xl'>See More</button>

        </div>

    </div>
  )
}

export default Projects