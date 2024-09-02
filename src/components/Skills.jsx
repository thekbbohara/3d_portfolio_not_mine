import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div className="flex items-center justify-center mt-44 mb-44 flex-wrap" initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}>
      <h2 className="text-[20px] font-bold text-white">Skills </h2>
      <span className="text-[30px] text-gray-600 ml-14">|</span>
      <ul className="flex items-center ml-10 max-md:justify-center flex-wrap">
        <li className="px-5 py-3">
          <motion.div className="flex items-center" initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.75,
              duration: 1,
              ease: 'easeInOut',
            }}>
            <img src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} alt="html and css" width={50} height={50} className="mr-5" />
            <p className="text-[15px] text-gray-300">HTML & CSS</p>
          </motion.div>
        </li>
        <li className="px-5 py-3">
          <motion.div className="flex items-center" initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: 'easeInOut',
            }}>
            <img src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} alt="javascript" width={50} height={50} className="mr-5" />
            <p className="text-[15px] text-gray-300">JavaScript</p>
          </motion.div>
        </li>
        <li className="px-5 py-3">
          <motion.div className="flex items-center" initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1.25,
              duration: 1,
              ease: 'easeInOut',
            }}>
            <img src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt="react" width={50} height={50} className="mr-5" />
            <p className="text-[15px] text-gray-300">React</p>
          </motion.div>
        </li>
      </ul>
    </motion.div>
  )
}

export default Skills
