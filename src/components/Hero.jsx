
import React from 'react'
import hero from '../assets/Hero.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug text-[blue]'>
                 Hi There, <br />I'm S Devendra <span className='text-[#FF6F61]'>Reddy</span>
               </h1>
               <p className='md:text-2xl text-xl mb-4 text-[white]'>Web Developer & Designer</p>
               <p className='mb-4 text-[white]'>I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and functional websites that solve real-world problems.</p>
               <button className='bg-[#FF6F61] text-white px-3 py-2 w-max rounded-md hover:bg-[#FF4F3A]'>
                 <a href="https://docs.google.com/document/d/1Tl7LZ1GeBhAdY0Itsvr_OgnWtvvepFsm/edit" download target='_blank'>Download CV</a>
               </button>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <div className='relative'>
                   <img 
                     src={hero} 
                     alt="Hero" 
                     className='lg:h-[80vh] h-80 rounded-full border-8 border-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg magic-photo' 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#FF6F61] rounded-full opacity-50"></div>
                 </div>
                 <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                 <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                 <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute top-40 right-10 hidden bg-[#F0F4F8] p-4 md:flex flex-col gap-6 rounded-full'>
        <img src={facebook} alt="" className='w-20 hover:bg-[#3B5998] p-2 rounded-full'/>
        <img src={instagram} alt="" className='w-20 hover:bg-[#E4405F] p-2 rounded-full'/>
        <img src={twitter} alt="" className='w-20 hover:bg-[#1DA1F2] p-2 rounded-full'/>
        <img src={linkedin} alt="" className='w-20 hover:bg-[#0077B5] p-2 rounded-full'/>
      </div>
    </section>
  )
}

export default Hero


