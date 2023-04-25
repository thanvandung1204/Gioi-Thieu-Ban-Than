import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
import img1 from '../assets/anh-phim.jpg'
import img2 from '../assets/anh-giay.jpg'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
            <h2 className='h2 leading-tight text-accent'> My Laster <br />  Work</h2>
            <p>  PROJECTS WITH ME !</p>
            <p>Good day, everyone! I'm Than Van Dung, I'm 20 years old and I'm from Hanoi. I'm Intern Front-end Developer. I have three months experience of working as a web developer at HANOI.
              I'm often praised for my creativity and independent working skills. I always put my heart and soul into every single website that I develop. I guess that's all I have to share about myself. Thank you</p>
            <button onClick={() => { return <a href='https://www.facebook.com/DSno01/'></a> }} className='btn btn-sm'> View all Projects</button>
          </motion.div>

          <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='group relative overflow-hidden border-2 border-orange/50 rounded-xl' >
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

            </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='s' />

            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span style={{ fontSize: 40 }} className='text-gradient'> Chiếu Phim Neflix </span>
            </div>

            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>

              <span className='text-3xl text-white'>Project Title </span>
            </div>
          </motion.div>
        </div>


        {/*  */}
        <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-10'>

          <div className='group relative overflow-hidden border-2 border-orange/50 rounded-xl' >
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

            </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='s' />

            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span style={{ fontSize: 40 }} className='text-gradient'> Cửa Hàng Bán Giày </span>
            </div>

            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>

              <span className='text-3xl text-white'>Project Title </span>
            </div>
          </div>
          {/*  */}


          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='group relative overflow-hidden border-2 border-orange/50 rounded-xl mt-8' >
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

            </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img4} alt='s' />

            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span style={{ fontSize: 40 }} className='text-gradient'> Cửa Hàng Điện Thoại </span>
            </div>

            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>

              <span className='text-3xl text-white'>Project Title </span>
            </div>
          </motion.div>

          {/*  */}



        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
