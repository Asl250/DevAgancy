import Image from 'next/image'

const Subscribe = () => {
  return (
    <div className='my-20 items-center'>
        <div>
            <p className="text-4xl font-bold underline decoration-[#fc9063] 
                        text-center">Newsletter Subscription
            </p>
            <p className='text-center mt-4 text-[#6B625E]'>Praesent placerated egestas egestas cras rhone <br/> magna rutrum tellus laoreet</p>
            <div className='drop-shadow-2xl items-center flex justify-center mt-5'>
                <input type="email" placeholder='      Enter your email address' className='w-[250px] h-[50px] text-[#8A7F7B] rounded-md' />
                <button className='px-[20px] py-[11px] bg-[#FF733B] rounded-md text-white text-xl'>Subscribe</button>
            </div>

        </div>
    </div>
  )
}

export default Subscribe