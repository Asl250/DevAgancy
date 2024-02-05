import Image from 'next/image'
import check from '../../public/tick.png'
import feature from '../../public/Feature img.png'
import feature1 from '../../public/Feature img (1).png'

const Experiences = () => {
  return (
    <>
    <div className="my-[5%] xl:mx-[20%] grid grid-cols-2 max-sm:grid-cols-1">
        <div className="max-sm:mx-4 mx-auto my-auto">
            <h1 className="text-4xl font-bold">
                Providing The World's Best 
                <span className="underline decoration-[#F4D3A1]"> User Experiences</span>
            </h1>
            <p className="mt-10 font-normal text-[87807D]"> 
            Vestibulum blandit ut nunc vel bibendum semper elit eget <br/>
            dignissim rhoncus, nisl augue lacinia urna vel rutrum nisi <br/> 
            nunc sit amet risus nulla ornare egestas.
            </p>
            <div className='flex mt-2'>
                <Image src={check} alt="check" className='h-7 mt-2 mr-1'/>

                <p className="mt-2">
                    Blandit ut nunc vel bibendum semper elit
                </p>
            </div>
            <div className='flex mt-3'>
                <Image src={check} alt="check" className='h-7 mt-2 mr-1'/>

                <p className="mt-2">
                    Blandit ut nunc vel bibendum semper elit
                </p>
            </div>
        </div>
        <Image src={feature} alt="image" className="max-sm:mt-10 m-auto"/>
    </div> 



    <div className=" xl:mx-[20%] grid grid-cols-2 max-sm:grid-cols-1 mb-10">
    <Image src={feature1} alt="image" className="max-sm:mt-10 m-auto"/>

        <div className="max-sm:mx-4 mx-auto my-auto ml-4">
            <h1 className="text-4xl font-bold">
                Explore Your Best Ideas
                <span className="underline decoration-[#F4D3A1]"> On A Whiteboard</span>
            </h1>
            <p className="mt-10 font-normal text-[87807D]"> 
            Vestibulum blandit ut nunc vel bibendum semper elit eget <br/>
            dignissim rhoncus, nisl augue lacinia urna vel rutrum nisi <br/> 
            nunc sit amet risus nulla ornare egestas.
            </p>
            <div className='flex mt-2'>
                <Image src={check} alt="check" className='h-7 mt-2 mr-1'/>

                <p className="mt-2">
                    Blandit ut nunc vel bibendum semper elit
                </p>
            </div>
            <div className='flex mt-3'>
                <Image src={check} alt="check" className='h-7 mt-2 mr-1'/>

                <p className="mt-2">
                    Blandit ut nunc vel bibendum semper elit
                </p>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Experiences