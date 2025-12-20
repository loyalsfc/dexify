import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from '../icons/icons'
import Link from 'next/link'
import Logo from '../logo/logo'
import SendFormModal from '../send-message/send-message'

function Footer() {
    return (
        <div>
            <div className='py-5 text-white md:pb-10'>
                <section className='flex flex-wrap flex-row'>
                    <div className='space-y-4 w-full md:w-1/3 shrink-0 text-center md:text-left'>
                        <span className='text-3xl text-white font-bold'>Dexify</span>
                        <p className='text-text-grey text-sm sm:text-base max-[640px]:max-w-xs max-[640px]:mx-auto'>
                            Dexify is a seamless dApp connectiviy platform that operates as an open-source protocol that bridges the gap between decentralized applications (Dapps) and mobile wallets.
                        </p>
                        <div className='flex items-center gap-3 justify-center md:justify-start pb-10 md:pb-0'>
                            <Social Icon={Facebook} />
                            <Social Icon={Twitter} />
                            <Social Icon={Linkedin} />
                            <Social Icon={Instagram} />
                        </div>
                    </div>
                    <div className='w-1/2 md:w-1/3 flex flex-col text-sm sm:text-base items-center md:items-end'>
                        <div>
                            <h5 className='text-2xl font-semibold mb-5'>Company</h5>
                            <div className='flex flex-col gap-1 sm:gap-3 text-text-grey'>
                                <Link className='hover:underline' href="/">Home</Link>
                                <Link className='hover:underline' href="#about">About Us</Link>
                                <Link className='hover:underline' href="#services">Services</Link>
                                <Link className='hover:underline' href="#">Careers</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 md:w-1/3 flex flex-col text-sm sm:text-base items-center md:items-end'>
                        <div>
                            <h5 className='text-2xl font-semibold mb-5'>Help</h5>
                            <div className='flex flex-col gap-1 sm:gap-3 text-text-grey'>
                                <SendFormModal>
                                    <span className='hover:underline'>Customer Support</span>
                                </SendFormModal>
                                <Link className='hover:underline' href="#">Terms & Condition</Link>
                                <Link className='hover:underline' href="#">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </section>                
            </div>
            <div className='pb-2 md:pb-5'>
                <div className='text-text-grey py-3 sm:py-8 text-sm flex flex-col md:flex-row justify-between'>
                    <p className=' font-semibold text-center'>Copyright © 2025 Dexify</p>
                    <span className='text-center md:text-left'>Design By Dexify</span>
                </div>
            </div>
        </div>
    )
}

function Social({Icon}:{Icon: React.FC}){
    return (
        <span className='h-8 w-8 rounded-full bg-[#ECE5F7] grid place-content-center'>
            <Icon />
        </span>
    )
}

export default Footer