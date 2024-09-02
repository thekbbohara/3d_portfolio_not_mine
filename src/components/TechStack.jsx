
import { motion } from "framer-motion"

const TechStack = () => {
  return (
    <motion.div className='flex items-center justify-center md:mt-20 flex-wrap mt-72' initial={{opacity: 0, x: -100}}
    whileInView={{opacity: 1, x: 0}}
    transition={{
        duration: 1,
        ease: 'easeInOut',
    }}>
        <h2 className='text-[20px] font-bold text-white'>Tech Stack </h2>
        <span className='text-[30px] text-gray-600 ml-14'>|</span>
        <ul className='flex items-center ml-10 max-md:justify-center flex-wrap'>
        <img src={'/icons.svg'} alt='html and css' width={135} height={135}  className='px-5 py-3'/>
          <img src={'/icons (1).svg'} alt='html and css' width={135} height={135} className='px-5 py-3'/>
          <img src={'/icons (2).svg'} alt='html and css' width={135} height={135} className='px-5 py-3'/>
          <img src={'/icons (3).svg'} alt='html and css' width={135} height={135} className='px-5 py-3'/>
        </ul>
    </motion.div>
  )
}

export default TechStack
