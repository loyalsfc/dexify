import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { Poppins } from "next/font/google";

const poppin = Poppins({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

function Logo(){
    return(
        <div className="flex items-center gap-2">
            <div className="h-12 w-12 overflow-hidden pt-3 grid place-content-center">
                <div className='relative mx-auto h-48 w-48 overflow-hidden'>
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
            <span className={`text-2xl font-medium logo-text ${poppin.className}`}>Dexify</span>
        </div>
    )
}

export default Logo