// import logo from '../../public/logo1.png'
// import facebook from '../../public/facebook.png'
// import twitter from '../../public/twitter.png'
// import basketball from '../../public/basketball.png'
// import linkedin from '../../public/in.png'
// import v from '../../public/v.png'
// import Image from 'next/image'
// import Link from 'next/link';


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
  


//     const Footer = () => {
//         return (
//           <footer className='bg-yellow-950 pb-10'>
//             <div className="flex flex-row mt-24 py-12 text-center justify-center">
//               <Image src="../../public/logo1.png    " alt="Brand" width={20} height={20} />
//               <h1 className='text-2xl font-riot text-white font-bold px-5'>DevAgency</h1>
//             </div>
//             <div className="flex flex-wrap mx-[5%] max-sm:mx-[16.5%]">
//               {MenuLinks.map((item: any, idx: any) => {
//                 return (
//                   <li key={idx} className="list-none mx-auto text-white hover:text-gray-900 pb-8">
//                     <Link href={item.href} className="text-lg font-riot justify-center">
//                       {item.text}
//                       </Link>
//                   </li>
//                       );
//               })}
//             </div>
//             <hr className='mx-[8%] text-white pb-10'/>
//             <div className='columns px-[8%] max-sm:px-[1%] pb-7'>
//               <div className='inline ms-[50%] max-sm:mx-[15%] sm:ms-1 float-end max-sm:text-center max-sm:justify-center'>
//                 {FooterIcons.map((item, idx) => {
//                   return (
//                     <Image key={idx} src={item.src} alt={item.alt} width={20} height={20} className='inline mx-3 sm:text-center'/>
//                   );
//                 })}
//               </div>
//               <p className='inline float-start max-sm:text-center w-[360px] text-sm py-3 text-white'>Copyright @ Milton Debnath 2020, All rights reserved</p>
      
//             </div>
//           </footer>
//         )
//       }
      
//       export default Footer