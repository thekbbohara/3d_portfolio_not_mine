import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div className='md:px-[130px] sm:px[80px] max-sm:px-10 mt-44 text-white'>

        <h1 className='text-blue-500 text-[20px] font-bold'>Projects</h1>
        <h2 className='text-white font-bold text-[18px]'>Each Projects is a unique piece of development 📍</h2>
        <div className='mt-24 flex flex-col'>
            <div className='flex gap-10 items-center justify-center py-10 flex-wrap'>
                <div className='w-auto  '>
                    <img src="/animeland.png" alt="" width={350} className='rounded-xl '/>
                </div>
                <div className='flex flex-col w-[300px] justify-center items-center px-10'>
                    <h1 className='text-[20px] text-white font-bold'>Anime Land 📺</h1>
                    <p className='text-[12px] font-medium mb-24 text-gray-300 mt-5'>
                        The AnimeLand website is a online Platform That allows you to find various anime with rating
                    </p>
                    <div className='flex gap-16 mt-5'>
                        <h2 className='text-[16px] font-bold'>React</h2>
                        <h2 className='text-[16px] font-bold'>Tailwind</h2>
                    </div>
                    <div className='flex gap-10 mt-5'>
                        <button className='flex text-[17px] font-bold items-center justify-center gap-2 border-gray-200 border-[1px] px-5 py-3 rounded-lg shadow-lg'>Code <img src="/github.png" alt="" width={20}/></button>
                        <button className='flex text-[17px] font-bold items-center justify-center gap-2 border-gray-200 border-[1px] px-5 py-3 rounded-lg shadow-lg'>Live <img src="/broadcast.png" alt="" width={20}/></button>
                    </div>
                </div>
            </div>
            <div className='flex gap-10 items-center justify-center flex-row-reverse py-10 flex-wrap'>
                <div className='w-auto  '>
                    <img src="/animeland.png" alt="" width={350} className='rounded-xl'/>
                </div>
                <div className='flex flex-col w-[300px] justify-center items-center px-10'>
                    <h1 className='text-[20px] font-bold'>Anime Land 📺</h1>
                    <p className='text-[12px] font-medium mb-24 text-gray-300 mt-5'>
                        The AnimeLand website is a online Platform That allows you to find various anime with rating
                    </p>
                    <div className='flex gap-16 mt-5'>
                        <h2 className='text-[16px] font-bold'>React</h2>
                        <h2 className='text-[16px] font-bold'>Tailwind</h2>
                    </div>
                    <div className='flex gap-10 mt-5'>
                        <button className='flex text-[17px] font-bold items-center justify-center gap-2 border-gray-200 border-[1px] px-5 py-3 rounded-lg shadow-lg'>Code <img src="/github.png" alt="" width={20}/></button>
                        <button className='flex text-[17px] font-bold items-center justify-center gap-2 border-gray-200 border-[1px] px-5 py-3 rounded-lg shadow-lg'>Live <img src="/broadcast.png" alt="" width={20}/></button>
                    </div>
                </div>
            </div>
            <div className='flex gap-10 items-center justify-center py-10 flex-wrap'>
                <div className='w-auto  '>
                    <img src="/animeland.png" alt="" width={350} className='rounded-xl'/>
                </div>
                <div className='flex flex-col w-[300px] justify-center items-center px-10'>
                    <h1 className='text-[20px] font-bold'>Anime Land 📺</h1>
                    <p className='text-[12px] font-medium mb-24 text-gray-300 mt-5'>
                        The AnimeLand website is a online Platform That allows you to find various anime with rating
                    </p>
                    <div className='flex gap-16 mt-5'>
                        <h2 className='text-[16px] font-bold'>React</h2>
                        <h2 className='text-[16px] font-bold'>Tailwind</h2>
                    </div>
                    <div className='flex gap-10 mt-5'>
                        <button className='flex text-[17px] font-bold items-center justify-center gap-2 border-gray-200 border-[1px] px-5 py-3 rounded-lg shadow-lg'>Code <img src="/github.png" alt="" width={20}/></button>
                        <button className='flex text-[17px] font-bold items-center justify-center gap-2 border-gray-200 border-[1px] px-5 py-3 rounded-lg shadow-lg'>Live <img src="/broadcast.png" alt="" width={20}/></button>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Projects
