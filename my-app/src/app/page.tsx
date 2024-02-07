import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner';
import Logos from '@/components/Logos';
import Projects from '@/components/Projects';
import Provide from '@/components/Provide';
import Experiences from '@/components/Experiences';
import { Feedback } from '@/components/Feedback';
import Subscribe from '@/components/Subscribe';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
// import Footer from '@/components/Footer';

export default function Home() {
  const {userId} = auth()
  console.log(userId);
  
  if(userId) {
    redirect('/dashboard');
  }
  return (
    <>
    <div className='bg-[#F4ECE0]'>
      <Navbar/>
      <Banner/>
    </div>
    <div className='bg-white'>
      <Logos/>
      <Projects/>
      <Provide/>
      <Experiences/>
      <Feedback/>
      <Subscribe/>
    </div>
    {/* <Footer/> */}
    
    </>

  );
}
