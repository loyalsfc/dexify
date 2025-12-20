import { FormEvent, ReactNode, useEffect, useState } from "react"
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify"

function SendFormModal({children}:{children: ReactNode}){
    const [isOpen, setIsOpen] = useState(false)
    const [loader, setLoader] = useState(false)


    useEffect(()=>{
        emailjs.init('AipbvUEOaW-U7mTEE')
    },[])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoader(true);
        emailjs.sendForm('service_tgqciuu', 'template_tuoj89k', "#contactForm")
        .then(function(response) {
                setLoader(false);
                toast.success("Message sent successfully");
                setIsOpen(false);
            }, function(error) {
                setLoader(false)
                console.log(error);
                toast.error("An error occuured");
        });
        
    }

    return(
        <>
            <button onClick={()=>setIsOpen(true)}>{children}</button>
            {isOpen && <div className="h-screen w-full fixed top-0 left-0 z-[9999] flex items-center justify-center">
                <div className="h-full w-full bg-black/30 backdrop-blur-md absolute top-0 left-0"></div>
                <div className="bg-white shadow-md rounded-[2.5rem] text-left p-5 md:p-10 lg:p-14 w-11/12 max-w-2xl z-10">
                    <form onSubmit={handleSubmit} className="text-[#858585]" id="contactForm">
                        <div className="flex flex-col-reverse sm:flex-row justify-between items-end sm:items-center gap-4">
                            <article className="font-ubuntu">
                                <h4 className="text-xl sm:text-3xl font-bold logo-text">Send Us a Message</h4>
                                <p className="text-sm sm:text-base font-medium">Having difficulties or want to learn more? Fill out the form below, and our support assistant we get back to you promptly</p>
                            </article>
                            <button className="ml-auto hover:scale-110 transition-all sm:ml-0" onClick={()=>setIsOpen(false)}>
                                <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.275 6.68L13.16 0.695H17.605L11.585 9.34C12.845 10.9733 14.0467 12.63 15.19 14.31C16.3567 15.9667 17.3133 17.53 18.06 19H13.475C13.265 18.5567 12.985 18.055 12.635 17.495C12.3083 16.9117 11.9467 16.3167 11.55 15.71C11.1767 15.08 10.78 14.4617 10.36 13.855C9.94 13.2483 9.53167 12.6767 9.135 12.14C8.31833 13.19 7.51333 14.3567 6.72 15.64C5.95 16.9 5.30833 18.02 4.795 19H0.455C0.805 18.3 1.225 17.5533 1.715 16.76C2.205 15.9667 2.73 15.1617 3.29 14.345C3.85 13.505 4.42167 12.6767 5.005 11.86C5.61167 11.02 6.20667 10.2267 6.79 9.48L0.735 0.695H5.39L9.275 6.68Z" fill="#858585"/>
                                </svg>
                            </button>
                        </div>
                        <div className="pt-5 space-y-5">
                            <div className="flex flex-col-reverse">
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    className="msg-input peer" 
                                    required
                                />
                                <label className="peer-focus:text-[#4E3962]" htmlFor="name">Name</label>
                            </div>
                            <div className="flex flex-col-reverse">
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className="msg-input peer" 
                                    required
                                />
                                <label className="peer-focus:text-[#4E3962]" htmlFor="name">Your Email</label>
                            </div>
                            <div className="flex flex-col">
                                <select name="title" className="msg-input pb-2.5 px-px" id="title">
                                    <option value="I am having diffuclties">I am having diffuclties</option>
                                    <option value="I want to report an issue">I want to report an issue</option>
                                    <option value="I want to learn more">I want to learn more</option>
                                </select>
                            </div>
                            <div>
                                <textarea 
                                    name="message" 
                                    // cols={4} 
                                    required
                                    rows={3} 
                                    id="message"
                                    placeholder="Your message"
                                    className="rounded-2xl border border-[#858585] p-4 block w-full outline-none focus:border-[#4E3692]"
                                />
                            </div>
                            <button className="block sm:w-1/2 px-8 py-2.5 text-white rounded-full bg-gradient-to-b from-[#201E30] to-[#4E3692] hover:from-[#4E3692] hover:to-[#201E30] transition-all mx-auto">
                                {loader ?
                                 <p className='h-6 w-6 rounded-full border-2 border-white border-t-gray animate-spin mx-auto' />
                                 : "Submit Form"}
                            </button>
                        </div>
                    </form>       
                </div>
            </div>}
        </>
    )
}

export default SendFormModal