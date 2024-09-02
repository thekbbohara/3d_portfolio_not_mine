import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.div className='justify-start mt-44 md:px-52 sm:px-10 max-sm:px-10' id='Contact' initial={{opacity: 0, x: -500}}
    whileInView={{opacity: 1, x: 0}}
    transition={{
        duration: 1,
        ease: 'easeInOut'
    }}>
        <div>
        <h1 className='text-blue-500 text-[20px] font-bold'>Contact</h1>
        <h2 className='text-gray-300 font-bold text-[23px]'>Dont Be Shy! Hit Me Up!👇</h2>
        </div>

        <div
        className=""
        style={{
          marginTop: "30px",
          padding: "0px",
          boxSizing: "border-box",
          scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
          scrollbarWidth: "thin",
          gap: "1.5rem",
          alignItems: "center",
          display: "flex",
        }}
      >
        <span
          style={{
            margin: "0px",
            padding: "0px",
            boxSizing: "border-box",
            scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
            scrollbarWidth: "thin",
            borderRadius: "50%",
            alignItems: "center",
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
            color: "rgb(20, 126, 251)",
            display: "flex",
            height: "5rem",
            justifyContent: "center",
            width: "5rem",
          }}
        >
          <svg
            className="tabler-icon tabler-icon-mail"
            height="30"
            width="30"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
              scrollbarWidth: "thin",
            }}
          >
            <path
              d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                scrollbarWidth: "thin",
              }}
            />
            <path
              d="M3 7l9 6l9 -6"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
                scrollbarWidth: "thin",
              }}
            />
          </svg>
        </span>
        <div
          className="contact__info"
          style={{
            margin: "0px",
            padding: "0px",
            boxSizing: "border-box",
            scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
            scrollbarWidth: "thin",
            gap: "0.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
              scrollbarWidth: "thin",
              color: "white",
              fontSize: "1.7rem",
            }}
          >
            Mail
          </h3>
          <a
            href="mailto:stefan.topallovic@gmail.com"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              scrollbarColor: "rgb(142, 142, 142) rgb(255, 255, 255)",
              scrollbarWidth: "thin",
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "1.7rem",
            }}
          >
            r11137307@gmail.com
          </a >
        </div>

        </div>
     </motion.div>
  )
}

export default Contact
