import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import nwImg from '../assets/kisspng-html-responsive-web-design-web-development-logo-5ad79481955596.3424196015240776976117.png'
import newImg from '../assets/kisspng-cascading-style-sheets-logo-clip-art-css3-html-5b7617f6c08d14.6703786015344660387887.png'
import ewImg from '../assets/kisspng-javascript-clip-art-openclipart-logo-number-5b8045d1149525.9523801015351331370843.png'
import newmg from '../assets/kisspng-game-react-native-javascript-android-physics-5ac6d5f51879e8.6623465115229803411003.png'
import newIm from '../assets/kisspng-bootstrap-logo-computer-software-web-application-p-b-5abb6c2ab15640.3860806115222323627264.png'
import neIm from '../assets/tailwind-css-icon.png'

const Services = () => {

  return <section className='section' id='services'>
    <div className='container mx-auto justify-center'>

      <h2 style={{ letterSpacing: 20, fontSize: 40, fontWeight: 90, boxShadow: 20 }} className='text-center h2 text-accent mb-20'>MY KNOWLEDGE</h2>

      <div className='flex flex-col lg:flex-row gap-x-20 mt-32' >



        <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>

          <div className='flex gap-x-20 justify-center'>
            <img style={{ width: 70 }} src={nwImg} />
            <img style={{ width: 70 }} src={newImg} />
            <img style={{ width: 70 }} src={ewImg} />
            <img style={{ width: 70 }} src={newmg} />
            <img style={{ width: 70 }} src={newIm} />
            <img style={{ width: 70 }} src={neIm} />
          </div>
        </motion.div>
        {/*  */}

      </div>
    </div>
  </section>;
};

export default Services;
