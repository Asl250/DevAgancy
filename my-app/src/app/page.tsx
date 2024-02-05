import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner';
import Logos from '@/components/Logos';
import Projects from '@/components/Projects';
import Provide from '@/components/Provide';
import Experiences from '@/components/Experiences';
import { Feedback } from '@/components/Feedback';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

export default function Home() {
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
    <Footer/>
    
    </>

  );
}
