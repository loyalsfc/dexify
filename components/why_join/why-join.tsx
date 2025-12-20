"use client"

import Image from 'next/image'
import React from 'react'
import Cards from './cards'
import {motion} from 'framer-motion'
import { Controls, Player } from '@lottiefiles/react-lottie-player'

const why_join = [
    {
        id: 1,
        title: "Use dApps",
        note: "connect to decentralized applications (dApps) in the crypto world",
        icon: "use_dapps.json"
    },
    {
        id: 2,
        title: "Validate",
        note: "Ensure the integrity and authenticity of transactions on a blockchain network.",
        icon: "validate.json"
    },
    {
        id: 3,
        title: "Migrate",
        note: "Transfer your cryptos from one blockchain/crypto to another.",
        icon: "migrate.json"
    },
    {
        id: 4,
        title: "Swap",
        note: "Exchange between different cryptocurrency options seamlessly",
        icon: "swap.json"
    },
    {
        id: 5,
        title: "Bridge",
        note: "Connect separate blockchain networks to enable seamless transfer of digital assets",
        icon: "connect.json"
    },
    {
        id: 6,
        title: "Stake",
        note: "Earn generous rewards for holding and supporting your favorite cryptocurrencies.",
        icon: "stake.json"
    },
]

function WhyJoin({setShowModal}:{setShowModal: (bool: boolean)=>void}) {
    return (
        <section className='pb-10' id='services'>
            <article className='flex flex-col md:flex-row-reverse font-ubuntu items-center md:items-start md:justify-between overflow-hidden pb-12 md:py-12 px-4 sm:px-8 text-gray'>
                <div className="h-32 w-32 overflow-hidden grid place-content-center">
                    <div className='relative mx-auto h-96 w-96 overflow-hidden'>
                        <Player
                            autoplay
                            loop
                            src={`/other-animations/dex_logo.json`}
                            className='h-full aspect-square mx-auto'
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </div>
                </div>
                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity:1, scale: 1 }}
                    transition={{duration: 0.5}}
                    className='pt-10'
                >
                    <Image
                        src="/icon.svg"
                        height={120}
                        width={120}
                        alt="Logo Icon"
                    />
                </motion.div> */}
                <div className='space-y-4 text-center md:text-left'>
                    <motion.h3 
                        initial={{opacity: 0, y: "-100px"}}
                        whileInView={{opacity: 1, y: "0"}}
                        transition={{duration: 0.5}}
                        className='text-2xl sm:text-3xl md:text-6xl max-w-2xl font-bold font-ubuntu leading-snug'
                    >
                        Used by millions. Trusted with billions.
                    </motion.h3>
                    <motion.p 
                        initial={{opacity: 0, scaleY: 0}}
                        whileInView={{opacity: 1, scaleY: 1}}
                        transition={{duration: 0.5}}
                        className='text-sm sm:text-base md:text-xl font-medium max-w-5xl'
                    >
                        Dexify has the most users of any decentralized platform ever. <span className='md:block'>And those users are now entrusting the platform with over $1.5 billion in funds</span>
                    </motion.p>
                    <motion.span 
                        className='md:text-purple font-medium block sm:text-xl hover:underline cursor-pointer'
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.5}}
                    >
                        Will you join us?
                    </motion.span>
                </div>
            </article>

            <motion.div 
                className='flex flex-nowrap sm:grid sm:grid-cols-2 md:grid-cols-3  gap-5 md:gap-10 lg:gap-20 py-8 px-4 md:px-10 overflow-scroll'
                initial={{opacity: 0, y: "150px"}}
                whileInView={{opacity: 1, y: "0"}}
                transition={{duration: 0.5}}
            >
                {why_join.map(item => {
                    return (
                        <Cards
                            key={item.id}
                            img={item.icon}
                            title={item.title}
                            note={item.note}
                            setShowModal={setShowModal}
                        />
                    )
                })}
            </motion.div>
        </section>
    )
}

export default WhyJoin