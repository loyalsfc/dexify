import {motion} from 'framer-motion'

function Subscribe(){
    return(
        <section className="text-white py-10 md:pb-20 flex flex-col md:flex-row md:items-center gap-5 md:gap-10 lg:gap-20">
            <motion.article 
                className="flex-1 text-center md:text-left"
                initial={{opacity: 0, x: "-150px"}}
                whileInView={{opacity: 1, x: "0"}}
                transition={{duration: 0.5}}
            >
                <h3 className="text-xl font-semibold mb-3">Subscribe to Newsletter</h3>
                <p className="text-[#CDCDCD] text-sm">Get updates, trends and latest information.</p>
            </motion.article>
            <motion.form 
                action="" 
                onSubmit={(e)=> {
                    e.preventDefault();
                }}
                className="flex items-center gap-2 sm:gap-5 max-[640px]:max-w-md max-[640px]:mx-auto"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.5}}
            >
                <input 
                    type="text" 
                    className="text-xs sm:text-base rounded-full py-2.5 md:py-3.5 px-5 w-full md:w-80 lg:w-96 h-full placeholder:text-white text-white bg-transparent border sm:border-2 border-[#ECE5F7]" 
                    placeholder="Enter your email"    
                />
                <button className="text-xs sm:text-base md:text-xl font-medium text-[#F3F3F3] border sm:border-2 border-[#ECE5F7] rounded-full px-3 sm:px-5 py-2">Subscribe</button>
            </motion.form>
        </section>

    )
}

export default Subscribe