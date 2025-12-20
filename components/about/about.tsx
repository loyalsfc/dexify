import {motion} from 'framer-motion'
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import SendFormModal from '../send-message/send-message';

function About(){
    return(
        <div className='px-4' id='learn'>
            <article className='flex flex-col font-ubuntu md:flex-row items-center gap-4 md:gap-0 pt-20 pb-10 sm:py-20'>
                <motion.div 
                    className='w-1/2 mx-auto md:mx-0 md:w-2/5 md:pr-10 lg:pr-20'
                    initial={{opacity: 0, x: "-100px"}}
                    whileInView={{opacity: 1, x: "0"}}
                    transition={{duration: 0.3}}
                >
                    <div className='relative mx-auto overflow-hidden'>
                        <Player
                            autoplay
                            loop
                            src={`/other-animations/questions.json`}
                            className='h-full border scale-150 mx-auto '
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </div>
                </motion.div>
                <div className='md:w-3/5 overflow-hidden text-[#64606D] font-ubuntu text-center md:text-left'>
                    <motion.h2 
                        className='text-3xl sm:text-5xl lg:text-7xl font-bold mb-6'
                        initial={{ opacity: 0, x: "100px"}}
                        whileInView={{ opacity: 1, x: "0"}}
                        transition={{duration: 0.5}}
                    >
                        Learn More about
                        <span className='text-yellow block'>Dexify</span>
                    </motion.h2>
                    <motion.p 
                        className='text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-4'
                        initial={{ opacity: 0, x: "100px"}}
                        whileInView={{ opacity: 1, x: "0"}}
                        transition={{duration: 0.5, delay: 0.5}}
                    >
                        <span className='leading-snug md:leading-normal'>Dexify: Seamless Dapp Connectivity</span><br/>
                        <span className='leading-snug md:leading-normal'>
                            Dexify operates as an open-source protocol that bridges the gap between decentralized applications (Dapps) and mobile wallets. By utilizing QR code scanning or deep linking, our protocol enables secure and direct interactions between users&apos; mobile phones and any Dapp. This setup highlights the enhanced security and convenience of decentralized mobile wallets compared to traditional desktop or browser extension wallets.
                        </span>
                    </motion.p>
                    <SendFormModal>
                        <motion.button
                            className='rounded-full py-2 px-5 text-white btn-color'
                            initial={{ opacity: 0, scale: 0}}
                            whileInView={{ opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                        >
                            Learn More
                        </motion.button>
                    </SendFormModal>
                </div>
            </article>
        </div>
    )
}

export default About;