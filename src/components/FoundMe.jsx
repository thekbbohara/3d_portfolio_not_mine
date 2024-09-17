
const FoundMe = () => {
  return (
    <div className="flex items-center flex-col justify-center mt-24">
        <h1 className='text-blue-500 text-[30px] font-bold text-center mb-2'>Found me </h1>
        <h2 className='text-white font-bold text-[18px] text-center mb-10'>Found me in a virtual device</h2>
        <iframe src="https://phone-portfolio-1.vercel.app" className="rounded-[50px]" width="285" height="600" frameBorder="0" scrolling="auto"></iframe>
    </div>
  )
}

export default FoundMe
