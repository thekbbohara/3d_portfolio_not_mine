
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='flex items-center justify-center gap-24 flex-wrap max-sm:px-10' id='about'>
        <img src={'/about.webp'} width={400} height={400} className="rounded-2xl"/>


        <motion.div  className='w-[500px]' initial={{opacity: 0, x: 100}}
    whileInView={{opacity: 1, x: 0}}
    transition={{
        duration: 1,
        ease: 'easeInOut'
    }}
        >        <h1 className='text-blue-500 text-[20px] font-bold'>ABOUT ME</h1>
        <h2 className='text-white font-bold text-[35px]'>Front-end Developer
        based in Bangladesh 📍</h2>
        <p className='text-gray-300 text-[16px]'>
        Hey, my name is Tasin, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.
        </p>
        <p className='text-gray-300 text-[16px]'>
        My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
        </p>

        </motion.div>
    </div>
  )
}

export default About
