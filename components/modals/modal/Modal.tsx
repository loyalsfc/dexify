import React from 'react'

function Modal({
        walletName, img, handleClick, showWalletImport, loaderRef, connectBtn
    }:{
        walletName: string, 
        img: string, 
        handleClick:(bool: boolean)=>void, 
        showWalletImport: () =>void, 
        loaderRef: React.RefObject<HTMLDivElement>, 
        connectBtn: React.RefObject<HTMLButtonElement>
}) {
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/[0.33] overflow-hidden flex items-center justify-center z-50'>
            <div className='mb-8 w-[90vw] overflow-hidden bg-[#212429] shadow max-w-[420px] max-h-[90vh] flex rounded-[20px] h-fit'>
                <div className='flex flex-nowrap flex-col w-full relative'>
                    <div className='absolute right-4 top-3.5' onClick={()=>handleClick(false)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                            <line x1="18" y1="6" x2="6" y2="18">
                            </line>
                            <line x1="6" y1="6" x2="18" y2="18">
                            </line>
                        </svg>
                    </div>
                    <div className='p-4 bg-[#f2f2f2f0] text-[#2172e5] font-semibold'>
                        <button onClick={()=>handleClick(false)}>Back</button>
                    </div>
                    <div className="p-8 bg-white ">
                        <div className='text-red border border-red rounded-[12px] mb-5 '>
                            <div className='p-4 flex items-center'>
                                <div ref={loaderRef} id='loader' className="loading">Connecting.</div>
                                <button ref={connectBtn} id='connectBtn' className='rounded-[8px] text-xs text-white bg-[#565a69] ml-4 p-2 font-semibold hidden' onClick={showWalletImport}>Connect Wallet</button>
                            </div>
                        </div>
                        <div className='border border-[#40444f] rounded-[12px] p-4 cursor-pointer flex items-center justify-between'>
                            <article>
                                <h4 className='font-semibold text-[#564d4d]'>{walletName}</h4>
                                <p className='mt-2.5 text-xs text-[#564d4d]'>Easy-to-use browser extension</p>
                            </article>
                            <div className='h-fit w-fit'>
                                <img src={img} alt="logo" className='h-6 w-6'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
