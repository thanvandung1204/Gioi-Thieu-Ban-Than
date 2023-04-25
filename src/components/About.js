import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import aboutNew from '../assets/z4287178931246_07f7c3bcbed459ee563ee774a76741c1 (1).jpg'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return <section className='section mt-10' id='about' ref={ref} >
    <div className='container mx-auto'>
      <div className='flex flex-col gap-x-20 lg:flex-row lg:items-center lg:gap-y-10 lg:gap-y-0 h-screen'>
        <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top mt-20' >
          <img className='rounded-full' style={{ width: 500, height: 600, opacity: 0.6 }} src={aboutNew} />
        </motion.div>

        <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1'>
          <h2 className='h2 text-accent'>
            About me.
          </h2>
          <h3 className='h3 mb-4'> I'm a Front-end Developer.  </h3>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12 mt-15'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                  <CountUp start={0} end={0.5} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Year of <br /> Experience
              </div>
            </div>

            {/*  */}

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                  <CountUp start={0} end={100} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Project <br /> Completed
              </div>
            </div>

            {/*  */}

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                  <CountUp start={0} end={213} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br /> Clients
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex gap-x-8 items-center'>
          <button className='btn btn-lg'>Contact Me </button>
          <a href='#' className='text-gradient btn-link'>
            My Portfolio
          </a>
        </motion.div>
      </div>

    </div>
  </section>;
};

export default About;
