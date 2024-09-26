
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div className='md:px-[130px] max-lg:px-[80px] sm:px[80px] max-sm:px-10 px-[80px] mt-44 text-white'>
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
                        <a href="https://github.com/Rayan37307/animee-land">
                        <button className='flex text-[17px] font-bold items-center justify-center gap-2 border-gray-200 border-[1px] px-5 py-3 rounded-lg shadow-lg'>Code <img src="/github.png" alt="" width={20}/></button>
                        </a>
                        <a href={"https://anime-land-three.vercel.app/"}>
                        <button className='flex text-[17px] font-bold items-center justify-center gap-2 border-gray-200 border-[1px] px-5 py-3 rounded-lg shadow-lg'>Live <img src="/broadcast.png" alt="" width={20}/></button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex gap-10 items-center justify-center flex-row-reverse py-10 flex-wrap'>
                <div className='w-auto  '>
                    <img src="/car-hub.png" alt="" width={350} className='rounded-xl'/>
                </div>
                <div className='flex flex-col w-[300px] justify-center items-center px-10'>
                    <h1 className='text-[20px] font-bold'>Car Hub 🚗</h1>
                    <p className='text-[12px] font-medium mb-8 text-gray-300 mt-5'>
                        Car Hub is a sleek web application designed to simplify car rentals. Users can browse a catalog of cars, filtering by factors like fuel type, transmission, and price per day. The site offers detailed listings for each vehicle, including specifications like MPG and drivetrain. The goal is to provide a seamless car rental experience with an intuitive and user-friendly interface.
                    </p>
                    <div className='flex gap-16 mt-5'>
                        <h2 className='text-[16px] font-bold'>React</h2>
                        <h2 className='text-[16px] font-bold'>Tailwind</h2>
                    </div>
                    <div className='flex gap-10 mt-5'>
                        <a href="https://github.com/Rayan37307/carHub">

                        <button className='flex text-[17px] font-bold items-center justify-center gap-2 border-gray-200 border-[1px] px-5 py-3 rounded-lg shadow-lg'>Code <img src="/github.png" alt="" width={20}/></button>
                        </a>
                        <a href="https://car-hub-orpin-zeta.vercel.app/">

                        <button className='flex text-[17px] font-bold items-center justify-center gap-2 border-gray-200 border-[1px] px-5 py-3 rounded-lg shadow-lg'>Live <img src="/broadcast.png" alt="" width={20}/></button>
                        </a>
                    </div>
                </div>
            </div>
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
                        <a href="https://github.com/Rayan37307/animee-land">
                        <button className='flex text-[17px] font-bold items-center justify-center gap-2 border-gray-200 border-[1px] px-5 py-3 rounded-lg shadow-lg'>Code <img src="/github.png" alt="" width={20}/></button>
                        </a>
                        <a href={"https://anime-land-three.vercel.app/"}>
                        <button className='flex text-[17px] font-bold items-center justify-center gap-2 border-gray-200 border-[1px] px-5 py-3 rounded-lg shadow-lg'>Live <img src="/broadcast.png" alt="" width={20}/></button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </motion.div>
  )
}

export default Projects
