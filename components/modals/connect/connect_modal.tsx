'use state'

import Image from 'next/image'
import React, { useRef, useState } from 'react'

import wallets from "../../../wallets/wallets"
import Modal from '../modal/Modal';
import SendFormModal from '@/components/send-message/send-message';
import { toast } from 'react-toastify';
import dynamic from 'next/dynamic';

const ModalWallet = dynamic(
  () => import('../modal/ModalWallet'),
  { ssr: false } // Disable SSR
);

function Connect_modal({closeModal}:{closeModal: (bool: boolean) => void}) {
    const [filter, setFilters] = useState("");
    const [showConnectModal, setShowConnectModal] = useState<boolean>(false);
    const [showWalletsModal, setShowWalletModal] = useState<boolean>(false);
    const [walletName, setWalletName] = useState<string>("");
    const [walletImage, setWalletImage] = useState<string>("");
    const loading = useRef<HTMLDivElement>(null);
    const connectBtn = useRef<HTMLButtonElement>(null);
    const openFormRef = useRef<HTMLButtonElement>(null);

    function showWalletImport(){
        setShowConnectModal(false)
        setShowWalletModal(true)
    }

    function openContactForm(){
        openFormRef.current?.click();
        // closeModal(false);
    }

    function showModal(e: any){
        // setShowWalletListModal(false)
        setWalletName(e.currentTarget.getAttribute('data-name'))
        setWalletImage(e.currentTarget.getAttribute('data-image'))
        setShowConnectModal(true)
        setTimeout(()=>{
            loading.current!.textContent = "Connecting.."
        }, 500)
        setTimeout(()=>{
            loading.current!.textContent = "Connecting..."
        }, 1000)
        setTimeout(()=>{
            loading.current!.textContent = "Connecting."
        }, 1500)
        setTimeout(()=>{
            toast.error("Can't connect, connect manually", {
                position: "top-center",
            })
            loading.current!.textContent = "Connecting.."
            connectBtn.current!.classList.remove('hidden');
        }, 2000)
    }


    return (
        <>
            <div className='h-screen w-full fixed bg-black/60 backdrop-blur-sm z-40 top-0 left-0'>
                <div onClick={()=>closeModal(false)} className='absolute h-full w-full top-0 left-0' />
                <div className='rounded-2xl md:rounded-[2.5rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 md:max-w-3xl aspect-[420/650] max-sm:max-h-[600px] sm:aspect-square md:aspect-[920/751] overflow-hidden'>
                    <div className='w-full rounded-2xl md:rounded-[2.5rem] bg-white p-4 sm:px-7 md:px-10 h-full flex flex-col gap-3 sm:gap-0'>
                        <div className='flex items-center justify-between py-3 sm:py-5 relative'>
                            <article>
                                <h4 className='font-medium text-lg sm:text-xl'>Connect Wallet</h4>
                                <p className='text-dark text-[10px] sm:text-sm pb-2'>Start by connecting with one of the wallets below</p>
                            </article>
                            <button 
                                className='text-text-grey hover:text-white'
                                onClick={()=>closeModal(false)}
                            >
                                x
                            </button>
                        </div>
                        <div className='rounded-md p-px bg-[#111] relative sm:hidden'>
                            <input 
                                type="text" 
                                placeholder='Search wallet'
                                value={filter}
                                onChange={(e)=>setFilters(e.target.value)}
                                className='p-3 rounded-md w-full peer focus:outline-none border border-transparent focus:border-[#2F466A] text-sm' 
                            />
                            {filter.length > 0 && <button 
                                className={'absolute top-1/2 -translate-y-1/2 right-4'}
                                onClick={()=>setFilters('')}
                            >
                                x
                            </button>}
                        </div>
                        <div className='h-full px-px sm:px-0 py-px rounded-[14px] bg-gradient-to-b from-[#666666]/10 to-[#666666]  sm:bg-gradient-to-r flex-1 overflow-hidden sm:from-[#2F466A]/20 sm:via-[#2F466A] sm:to-[#2F466A]/20'>
                            <div className='grid grid-cols-1 sm:grid-cols-3 bg-white rounded-[14px] sm:gap-4 md:gap-y-6 md:gap-x-5 h-full overflow-scroll no-scrollbar py-4'>
                                {wallets.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())).map(item => {
                                    return(
                                        <div key={item.id} className='p-px rounded-[14px]'>
                                            <div 
                                                
                                                className='cursor-pointer sm:bg-[#010101] sm:font-semibold text-sm flex gap-6 sm:flex-row-reverse items-center sm:gap-2 justify-between hover:bg-[#2F466A]/80 px-3 sm:px-5 rounded-[14px] py-2 sm:py-2.5'
                                                data-name={item.name} 
                                                data-image={item.image}
                                                onClick={showModal}
                                            >
                                                <div className='h-6 sm:h-9 w-6 sm:w-9 relative'>
                                                    <img
                                                        src={item.image}
                                                        
                                                        alt={item.name + " Logo"}
                                                        
                                                    />
                                                </div>
                                                <h6 className='overflow-hidden sm:text-white text-sm flex-1 text-ellipsis whitespace-nowrap'>{item.name}</h6>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {wallets.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())).length === 0 && <p className='text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>No Wallet Match for <strong className='italic'>{filter}</strong></p>}
                        </div>
                        <div className='text-center flex justify-center py-4 text-sm'>
                            Having troubles?                 
                            <button onClick={openContactForm} className='text-[#4E3962] hover:underline cursor-pointer pl-1 block hover:scale-105 transition-all'>Contact Support</button>
                        </div>
                    </div>
                </div>
                {showConnectModal && <Modal connectBtn={connectBtn} loaderRef={loading} walletName={walletName} img={walletImage} handleClick={setShowConnectModal} showWalletImport={showWalletImport}/>}
                {showWalletsModal && <ModalWallet img={walletImage} name={walletName} cancelModal={setShowWalletModal}/>}
            </div>
            <SendFormModal>
                <button ref={openFormRef} className=''></button>
            </SendFormModal>
        </>
    )
}

export default Connect_modal