
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Earth from "./Earth";


const Hero = () => {
  return (
    <div className='h-[70vh] flex items-center justify-center md:gap-24 gap-10 flex-wrap max-sm:px-10' id="home">
        <div className='hero_text_animation text-white'>
            <motion.h1
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{
                duration: 1,
                ease: 'easeInOut',
            }}
            className="text-[50px] font-bold text-[#fff]"

                >
                Front-End React <br />
                Developer 👋🏼
            </motion.h1>
            <motion.p initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{
                delay: 0.25,
                duration: 1,
                ease: 'easeInOut',
            }} className="text-[15px] text-gray-300 mt-10">
                Hi I'm Tasin Bin tarek . A passionate Front-end React <br /> Developer Based in Bangladesh 📍
            </motion.p>
            <motion.div className="mt-10 flex gap-10" initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{
                delay: 0.5,
                duration: 1,
                ease: 'easeInOut',
            }}>
                <img src={'/github.png'} alt="github" width={30} height={30} />
                <img src={'/linkedin.png'} alt="github" width={30} height={30} />
            </motion.div>
        </div>
        <motion.div className=" items-center justify-center" initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{
                delay: 1,
                duration: 1,
                ease: 'easeInOut',
            }}>
                <Earth />
         </motion.div>

    </div>
  )
}

export default Hero
