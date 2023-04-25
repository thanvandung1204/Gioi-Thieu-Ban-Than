import React from 'react';
import Images from '../assets/z4287178931246_07f7c3bcbed459ee563ee774a76741c1 (1).jpg'
import { FaGithub, FaFacebook, FaDribbble } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-5'>
              VĂN  <span>DŨNG</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'> I am a</span>
              <TypeAnimation sequence={[
                'front End Developer', 500,
                ''
              ]}
                speed={75}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Chúc mọi người một ngày tốt lành! Tôi là Thân Văn Dũng, 20 tuổi và tôi đến từ Hà Nội. Tôi là Nhà phát triển Front-end mới hơn. Tôi có sáu tháng kinh nghiệm làm việc với tư cách là nhà phát triển web tại Hà Nôị.
              Tôi thường được khen ngợi về khả năng sáng tạo và kỹ năng làm việc độc lập. Tôi luôn đặt trái tim và tâm hồn của mình vào từng trang web mà tôi phát triển. Tôi đoán đó là tất cả những gì tôi phải chia sẻ về bản thân mình. Cảm ơn bạn đã đọc!
            </motion.p>
            <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'> Contact Me</button>
              <a href='#' className='text-gradient btn-link'> My Portfolio</a>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a style={{ fontSize: 40, paddingRight: 20 }} href='https://github.com/thanhdo21d'>
                <FaGithub />
              </a>

              <a style={{ fontSize: 40, paddingRight: 20 }} href='https://www.facebook.com/DSno01/'>
                <FaFacebook />
              </a>
              <a style={{ fontSize: 40 }}>
                <i className="fa fa-envelope"></i>
              </a>

              {/* <a href='#'>
              <FaDribbble />
            </a> */}
            </motion.div>
          </div>
        </div>

        <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]'>
          <img className='rounded-full w-[300px] border-orange-500 border-2 ' src={Images} alt='' />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
