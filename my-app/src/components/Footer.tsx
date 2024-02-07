import logo from '../../public/logo1.png'
import facebook from '../../public/facebook.png'
import twitter from '../../public/twitter.png'
import basketball from '../../public/basketball.png'
import linkedin from '../../public/in.png'
import v from '../../public/v.png'
import Image from 'next/image'
import Link from 'next/link';


// export const FooterIcons = [
//     {
//       src: '../../public/facebook.png',
//       alt: 'Facebook'
//     },
//     {
//       src: '../../public/twitter.png',
//       alt: 'Twitter'
//     },
//     {
//       src: '../../public/basketball.png',
//       alt: 'Instagram'
//     },
//     {
//       src: '../../public/in.png',
//       alt: 'Linkedin'
//     },
//     {
//       src: '../../public/v.png',
//       alt: 'Version'
//     }
  


    const Footer = () => {
        return (
    <div className='mt-10 py-11 bg-stone-900'>
        <Image src={logo} alt='logo' className='m-auto'/>
        <ul className='grid text-white text-2xl max-sm:text-lg xl:grid-cols-5 xl:mx-[500px] mt-8 max-sm:grid-cols-3 max-sm:mr-6 max-sm:ml-[50px] md:grid-cols-5 md:mx-6  '>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li className='max-sm:text-center'>Contact</li>
          <li className='max-sm:text-center'>Privacy</li>
        </ul>
        <hr className='mt-10 xl:w-[1280px] md:w-[] bg-[#241008] mx-auto'/>
            <div className="grid mx-auto max-w-screen-xl xl:mx-auto md:flex md:items-center md:justify-between md:mx-6 max-sm:hidden">
                <span className="text-xl text-white sm:text-center  dark:text-white max-sm:text-center max-sm:mt-5">Copyright @ Milton Debnath 2020</span>
                <ul className="text-white flex gap-5 mt-10 pb-8 max-sm:mx-auto">
                  <li>
                      <Image src={facebook} alt="logo"/>
                  </li>
                  <li>
                      <Image src={twitter} alt="logo"/>
                  </li>
                  <li>
                      <Image src={basketball} alt="logo"/>
                  </li>
                  <li>
                      <Image src={linkedin} alt="logo"/>
                  </li>
                  <li>
                      <Image src={v} alt="logo"/>
                  </li>
                </ul>
            </div>
        <div className="grid mx-auto max-w-screen-xl md:items-center md:justify-between md:mx-6 xl:hidden lg:hidden md:hidden  ">
        <ul className="text-white flex gap-5 mt-10 pb-8 max-sm:mx-auto">
                    <li>
                      <Image src={facebook} alt="logo"/>
                    </li>
                    <li>
                      <Image src={twitter} alt="logo"/>
                    </li>
                    <li>
                      <Image src={basketball} alt="logo"/>
                    </li>
                    <li>
                      <Image src={linkedin} alt="logo"/>
                    </li>
                    <li>
                      <Image src={v} alt="logo"/>
                    </li>
                </ul>
                <span className="text-xl text-white sm:text-center  dark:text-white max-sm:text-center max-sm:mt-5">Copyright @ Milton Debnath 2020</span>
        </div>
    </div>
        )
      }
      
      export default Footer