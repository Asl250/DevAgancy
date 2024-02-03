import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner';
import Logos from '@/components/Logos';

export default function Home() {
  return (
    <>
    <div className='bg-[#F4ECE0]'>
      <Navbar/>
      <Banner/>
    </div>
    <Logos/>

    </>

  );
}
