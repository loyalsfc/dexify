'use client'

import React from 'react'
import {motion} from 'framer-motion'
import { Controls, Player } from '@lottiefiles/react-lottie-player'

function Cards({img, title, note, setShowModal,}:{img:string, title: string, note: string, setShowModal: (bool: boolean)=>void}) {
    return(
        <motion.div 
            className='bg-white dark:bg-[#1A1918] w-3/4 sm:w-full shrink-0 rounded-[45px] pt-8 pb-12 px-5 text-center flex flex-col items-center'
            exit={{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.7}}
        >   
            <div className='mx-auto h-10 grid place-content-center overflow-hidden'>
                <div className='relative mx-auto h-48 w-48 overflow-hidden'>
                    <Player
                        autoplay
                        loop
                        src={`/icon-animation/${img}`}
                        className='h-full aspect-square mx-auto scale-125'
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
            </div>
            <h4 className='mt-5 text-2xl text-purple dark:text-[#A3A3A3] font-bold'>{title}</h4>
            <p className='mt-[18px] text-sm mb-10 text-gray font-bold'>{note}</p>
            <motion.button 
                className='mt-auto text-sm md:text-base px-1 text-[#F3F3F3] whitespace-pre py-2 btn-color dark:text-[#1A1918] rounded-[2.5rem]  dark:group-even:bg-[#A3A3A3] dark:group-odd:bg-[#A3A3A3] w-1/2'
                onClick={()=>setShowModal(true)}
                whileTap={{scale: 0.9}}
                whileHover={{scale: 1.01}}
            >
                {title}
            </motion.button>
        </motion.div>
    )
}

export default Cards