import Image from 'next/image'
import behance from '../../public/behance.png'
import cocacola from '../../public/cocacola.png'
import google from '../../public/Group 13.png'
import dribbble from '../../public/dribbble.png' 
import amazon from '../../public/amazon.png'

const Logos = () => {
  return (
    <div className='flex lg:justify-around'>
        <Image src={behance} alt='behance' className=''/>
        <Image src={cocacola} alt='cocacola' className=''/>
        <Image src={google} alt='google' className=''/>
        <Image src={dribbble} alt='dribbble' className=''/>
        <Image src={amazon} alt='amazon' className=']'/>
    </div>
  )
}

export default Logos
