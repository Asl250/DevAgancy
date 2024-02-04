import Image from 'next/image'
import icon0 from '../../public/icon.png'
import icon1 from '../../public/icon (1).png'
import icon2 from '../../public/icon (2).png'

const Provide = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
        <div className="lg:justify-between flex mx-[5%]">
            <div className="block">
                <p className="text-4xl font-bold underline decoration-[#fc9063]">What We Provide</p><br/>
                <p className="text-[#a49e9b] text-xl">
                Praesent placerated egestas egestas cras rhone <br/> magna rutrum tellus laoreet 
                </p>
            </div>
            <div>
                <div className='max-[640px]:ml-[50px]'>
                <button className='max-sm:hidden lg:block px-[40px] py-[20px] bg-[#F4D3A1] rounded-md text-[#FF733B] text-2xl'>See More</button>

                </div>
            </div>
        </div>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 max-sm:mx-[10%] gap-8 mt-10">
               
        
            <div className="bg-[#E3F8FA] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <Image src={icon0} alt="single" className='w-50 mx-auto mt-[20px]'/>
                <p className='text-center text-4xl font-bold'>App Design</p>
                <div className='text-center font-medium'>
                    <p className='text-[#6B625E] text-xl py-2 mx-8 mt-6'>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>    
                </div>
                <button className=' underline w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-xl text-black'>Learn More</button>
            </div>

            <div className="bg-[#F4ECE0] w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
                <Image src={icon1} alt="single" className='w-50 mx-auto mt-[20px]'/>
                <p className='text-center text-4xl font-bold'>Web Design</p>
                <div className='text-center font-medium'>
                <p className='text-[#6B625E] text-xl py-2 mx-8 mt-6'>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>    
                </div>
                <button className=' underline w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-xl text-black'>Learn More</button>
            </div>

            <div className="bg-[#F5E6FE] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <Image src={icon2} alt="single" className='w-50 mx-auto mt-[20px]'/>
                <p className='text-center text-4xl font-bold'>Web Developmentn</p>
                <div className='text-center font-medium'>
                    <p className='text-[#6B625E] text-xl py-2 mx-8 mt-6'>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>
                </div>
                <button className=' underline w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-xl text-black'>Learn More</button>
            </div>

    </div>
    <div className='lg:hidden flex justify-center md:hidden mt-6'>
            <button className='px-[30px] py-[20px] bg-[#F4D3A1] context-center rounded-md text-[#FF733B] text-2xl'>See More</button>

        </div>

</div>
  )
}

export default Provide