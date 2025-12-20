'use client'

import React, { createRef, useEffect, useRef, useState } from 'react'
import Connect_modal from '../modals/connect/connect_modal'
import {motion} from 'framer-motion'
import SendFormModal from '../send-message/send-message'
import dynamic from 'next/dynamic'

const Logo = dynamic(
  () => import('../logo/logo'),
  { ssr: false } // Disable SSR
);

function Header({showModal, setShowModal}:{showModal:boolean, setShowModal: (bool: boolean) => void}) {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const modalRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(()=>{
        const handleClickOutside = (e: any) => {
            if(modalRef.current && !modalRef.current.contains(e.target) && !buttonRef.current?.contains(e.target)){
                setShowMobileMenu(false)
            }
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        document.addEventListener('click', handleClickOutside)
        window.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('click', handleClickOutside)
            window.removeEventListener('click', handleScroll)
        }
    },[])

    function closeMobileNav(){
        setShowMobileMenu(false);
    }

    useEffect(()=>{
        if(showModal){
            document.querySelector('body') && document.querySelector('body')?.classList.add("overflow-hidden")
        } else {
            document.querySelector('body') && document.querySelector('body')?.classList.remove("overflow-hidden")
        }
    },[showModal])

    return (
        <header className={`sticky top-0 z-50 bg-light-mode dark:bg-dark-mode ${isScrolled && 'dark:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]'} ${isScrolled && 'shadow-md'}`}>
            <div className='max-w-[1216px] mx-auto'>
                <div className='px-4 md:px-10 py-2 flex items-center gap-4'>
                    <Logo />
                    <nav className='hidden lg:flex items-center gap-7 ml-auto'>
                        <NavItems color='D9099F' text='Home' link='/'/>
                        <NavItems color='09D943' text='Learn' link='#learn' />
                        <NavItems color='0703D4' text='Services' link='#services' />
                        <SendFormModal>
                            <span className='flex gap-2 transition-all lg:hover:scale-125 font-semibold text-sm items-center text-[#A397AA] group-[]:border-b group-[]:pb-8 border-dark-mode/20 dark:border-light-mode/20'>
                                <span className={`block h-3.5 w-3.5 rounded-full opacity-50 bg-[#ECF01E]`} />
                                Contact
                            </span>
                        </SendFormModal>
                    </nav>

                    <div className='hidden lg:block ml-auto sm:mr-4'>
                        <SwitchMode />
                    </div>

                    <motion.button
                        onClick={()=>setShowModal(true)} 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='btn-color text-[#F3F3F3] px-2.5 md:px-5 ml-auto lg:ml-0 py-2 text-xs sm:text-sm font-semibold rounded-full hidden sm:block'
                    >
                        Connect
                    </motion.button>
                    <button 
                        className='lg:hidden ml-auto sm:ml-0' 
                        ref={buttonRef} 
                        onClick={()=>setShowMobileMenu(!showMobileMenu)}
                    >
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="19.5652" height="3.91304" rx="1.95652" fill="#D9D9D9"/>
                            <rect y="7.04346" width="16.4348" height="3.91304" rx="1.95652" fill="#D9D9D9"/>
                            <rect y="14.0869" width="12.5217" height="3.91304" rx="1.95652" fill="#D9D9D9"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div ref={modalRef} className={`bg-light-mode dark:bg-dark-mode w-full px-4 overflow-hidden transition-all absolute top-0 h-screen ${!showMobileMenu ? "-left-full" : "left-0" }`}>
                <button className='absolute right-8 top-8' onClick={()=>setShowMobileMenu(false)}>
                    <svg viewBox="0 0 12 12" height="16" width="16"
                        xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="11" 
                            x2="11" y2="1" 
                            className='stroke-dark-mode dark:stroke-light-mode'
                            strokeWidth="2"/>
                        <line x1="1" y1="1" 
                            x2="11" y2="11" 
                            className='stroke-dark-mode dark:stroke-light-mode'
                            strokeWidth="2"/>
                    </svg>
                </button>
                <nav className='flex flex-col gap-8 pt-16 group'>
                    <NavItemsMobile clickFunc={closeMobileNav} color='D9099F' text='Home' link='/'/> 
                    <NavItemsMobile clickFunc={closeMobileNav} color='09D943' text='Learn' link='#learn'/>
                    <NavItemsMobile clickFunc={closeMobileNav} color='0703D4' text='Services' link='#services'/>
                    <SendFormModal>
                        <span className='flex gap-2 transition-all lg:hover:scale-125 font-semibold text-sm items-center text-[#A397AA] group-[]:border-b group-[]:pb-8 border-dark-mode/20 dark:border-light-mode/20'>
                                <span className={`block h-3.5 w-3.5 rounded-full opacity-50 bg-[#ECF01E]`} />
                                Contact
                        </span>
                    </SendFormModal>
                </nav>
                <div className='pt-8 flex justify-center'>
                    <button
                        onClick={()=>setShowModal(true)} 
                        className='bg-purple text-[#F3F3F3] px-5 transition-all py-3 text-xs sm:text-sm font-semibold rounded-full'
                    >
                        Connect Wallet
                    </button>
                </div>
                <div className='grid place-content-center py-2 mt-8'>
                    <SwitchMode />
                </div>
            </div>
            {showModal && <div><Connect_modal closeModal={setShowModal}/></div>}
        </header>
    )
}

function NavItems({text, color, link}:{text:string, color:string, link: string}){
    return(
        <a href={link} className='flex gap-2 transition-all lg:hover:scale-125 font-semibold text-sm items-center text-[#A397AA] group-[]:border-b group-[]:pb-8 border-dark-mode/20 dark:border-light-mode/20'>
            <span className={`block h-3.5 w-3.5 rounded-full opacity-50`} style={{backgroundColor: `#${color}`}} />
            {text}
        </a>
    )
}

function NavItemsMobile({text, color, link, clickFunc}:{text:string, color:string, link: string, clickFunc: ()=>void}){
    const menuRef = createRef<HTMLAnchorElement>()
    const closeMenu = () => {
        clickFunc();
        menuRef.current?.click();
    } 
    return(
        <button onClick={closeMenu} className='flex gap-2 transition-all lg:hover:scale-125 font-semibold text-sm items-center text-[#A397AA] group-[]:border-b group-[]:pb-8 border-dark-mode/20 dark:border-light-mode/20'>
            <a ref={menuRef} href={link} className='hidden'/>
            <span className={`block h-3.5 w-3.5 rounded-full opacity-50`} style={{backgroundColor: `#${color}`}} />
            {text}       
        </button>
    )
}

function SwitchMode(){
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return(
        <>
            <input 
                className='hidden peer' 
                type="checkbox" 
                name="toggle-mode" 
                id="toggle-mode"
                onChange={handleChange} 
            />
            <label 
                htmlFor="toggle-mode"
                className='block h-6 border border-[#8E15DC] bg-[#33363F] dark:bg-purple w-12 sm:w-14 rounded-[36px] relative after:content-[""] after:absolute after:block cursor-pointer after:h-full after:w-1/2 after:bg-white after:rounded-full after:top-0 after:left-0 peer-checked:after:left-1/2 after:transition-all'
            >
                <svg className='absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.993 0a.428.428 0 0 0-.421.434v1.284a.428.428 0 1 0 .856 0V.434A.428.428 0 0 0 5.993 0zM2.06 1.632a.428.428 0 0 0-.298.735l.908.909a.428.428 0 1 0 .606-.606l-.908-.908a.428.428 0 0 0-.308-.13zm7.867 0a.428.428 0 0 0-.295.13l-.908.908a.428.428 0 1 0 .606.606l.908-.909a.429.429 0 0 0-.311-.735zM6 3.002a2.997 2.997 0 1 0 0 5.995 2.997 2.997 0 0 0 0-5.994zM.434 5.573a.428.428 0 1 0 0 .856H1.72a.428.428 0 1 0 0-.856H.434zm9.847 0a.428.428 0 1 0 0 .856h1.285a.428.428 0 1 0 0-.856H10.28zM2.965 8.595a.428.428 0 0 0-.295.13l-.908.907a.428.428 0 1 0 .606.606l.908-.908a.428.428 0 0 0-.311-.735zm6.058 0a.428.428 0 0 0-.299.735l.908.908a.428.428 0 1 0 .606-.606l-.908-.908a.428.428 0 0 0-.307-.13zm-3.03 1.252a.428.428 0 0 0-.421.434v1.285a.428.428 0 1 0 .856 0V10.28a.429.429 0 0 0-.435-.434z" fill="#fff" />
                </svg>
                <svg className='absolute left-3/4 top-1/2 -translate-y-1/2 -translate-x-1/2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.049 4.291l-1.043.22.714.792-.113 1.06.974-.435.973.435-.113-1.06.714-.792-1.043-.22-.531-.924-.532.924zM11.209 8.59l-.684-.145-.348-.605-.348.605-.683.144.468.519-.074.694.637-.285.638.285-.074-.694.468-.519z" fill="#fff"/>
                    <path d="M5.354 6A6 6 0 0 1 8.677.63a6 6 0 1 0 0 10.741A6 6 0 0 1 5.354 6z" fill="#fff" />
                </svg>
            </label>
        </>
    )
}

export default Header