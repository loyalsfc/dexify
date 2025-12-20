"use client"

import About from '@/components/about/about'
import Footer from '@/components/footer/footer'
import Subscribe from '@/components/footer/subscribe'
import Hero from '@/components/hero/hero'
import WhyJoin from '@/components/why_join/why-join'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic';

const Header = dynamic(
  () => import('@/components/header/header'),
  { ssr: false } // Disable SSR
);

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [playAnimation, setPlayAnimation] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
        setPlayAnimation(false)
    },5000)
  }, []);

  return (
    <main className="">
      {playAnimation ? <div id="page-preloader">
        <div className="theme-loader">Dexify</div>
        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 text-center text-purple font-medium'>Always verify the legitimacy of the dApp and double-check the contract addresses before interacting with it.</p>
      </div> :
      <>
        <ToastContainer />
        <div className='flex flex-col md:h-screen'>
          <Header showModal={showModal} setShowModal={setShowModal} />
          <Hero />
        </div>
        <div className="max-w-6xl mx-auto">
          <About />
          <WhyJoin setShowModal={setShowModal} />
        </div>
        <footer
          className="font-ubuntu rounded-t-[2.5rem] bg-gradient-to-b from-[#201E30] to-[#4E3692]"
        >
          <div className='max-w-6xl mx-auto overflow-x-hidden px-4 md:pt-10 md:px-8'>
            <Subscribe />
            <Footer />
          </div>
        </footer>
      </>}      
    </main>
  )
}
