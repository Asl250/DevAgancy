'use client'
import photo1 from '../../public/1 (1).png'
import photo2 from '../../public/2.png'
import Image from 'next/image'


const Projects = () => {
  return (
    <div>
        <div className="justify-between flex mt-[10%] xl:mx-[20%] md:mx-[40px] lg:space-x-[20%]">
            <div className="max-sm:mx-10">
                <p className="text-4xl font-bold underline decoration-[#fc9063]">Our Projects</p><br/>
                <p className="text-[#a49e9b] text-xl">
                    Present placerated agestas egestas cras rhone <br/>
                    magna rutrum tellus laoret 
                </p>
            </div>
            <div className="max-sm:hidden mt-6">
                <button className='max-sm:hidden lg:block px-[40px] py-[20px] bg-[#F4D3A1] rounded-md text-[#FF733B] text-2xl'>See More</button>
            </div>
        </div>
        <div className="my-[10px] max-sm:mx-[30%] grid lg:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-2 justify-center items-center max-[1330px]:space-x-[5%] max-[1257px]:space-x-[50px] max-[1024px]: mx-0">
                <Image src={photo1} alt="image1" className='lg:mx-[15%] max-sm:mb-5 max-[1024px]:mx-0'/>
                <Image src={photo2} alt="image2" className='lg:mx-[15%] max-[1024px]:pr-[50px] max-[1024px]:w-[110%]'/>
        </div>
        <div className='lg:hidden flex justify-center md:hidden mt-6'>
            <button className='px-[30px] py-[20px] bg-[#F4D3A1] context-center rounded-md text-[#FF733B] text-2xl'>See More</button>

        </div>

    </div>
  )
}

export default Projects