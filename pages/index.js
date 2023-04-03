import {Navbar} from '../components/Navabr';
import {Hero} from '../components/Hero';
import {Footer} from '../components/Footer';

export default function Home() {
  return (
    <div className="fixed m-0 p-0 box-border w-full h-full  bg-[url(../public/images/BLVX6A.gif)] bg-cover bg-no-repeat text-slate-300">
      <main className='absolute w-full flex h-full bg-black bg-opacity-70'>
        <div className='lg:absolute lg:w-full md:absolute md:w-full overflow-scroll absolute w-full h-full'> 
          <Navbar/>
          <Hero/>
          <Footer/>
        </div>
      </main>
    </div>
  )
};

