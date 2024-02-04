import Image from 'next/image'
import behance from '../../public/behance.png'
import cocacola from '../../public/cocacola.png'
import google from '../../public/Group 13.png'
import dribbble from '../../public/dribbble.png' 
import amazon from '../../public/amazon.png'

const Logos = () => {
  return (
    <div className='mb-[100px]'>
    <div className='grid xl:grid-cols-5 xl:mx-[350px] xl:m-auto md:grid-cols-2 md:space-y-[20px]  max-sm:grid-cols-3 max-sm:w-[350px] max-sm:m-auto'>
      <Image src={behance} alt="logo"  className='m-auto max-sm:pr-[20px]'/>
      <Image src={cocacola} alt="logo" className='m-auto max-sm:pr-[20px]'/>
      <Image src={google} alt="logo" className='m-auto max-sm:pl-[10px]'/>
      <Image src={dribbble} alt="logo" className='m-auto max-sm:ml-[40px]'/>
      <Image src={amazon} alt="logo" className='m-auto max-sm:ml-[60px]'/>
    </div>
    </div>
  )
}

export default Logos
