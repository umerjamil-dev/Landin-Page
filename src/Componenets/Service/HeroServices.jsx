import React from 'react';
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { myhrm1, myhrm2, myhrm4, crm2main21 } from '../../assets';

const HeroServices = () => {
  const images = [myhrm1, myhrm2, myhrm4, crm2main21];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  // Floating animation for the badges
  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const floatAnimationReverse = {
    y: [0, 15, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section className='overflow-hidden bg-white my-[5%] font-outfit px-4 sm:px-0'>

      <main className='grid grid-cols-1 custom-size:grid-cols-2 custom-padding items-center py-12 md:py-20 custom-size:py-0 gap-10 custom-size:gap-16'>
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='flex flex-col justify-center items-center custom-size:items-start text-center custom-size:text-left space-y-6 lg:space-y-8'
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary-red/10 text-primary-red px-4 py-2 rounded-full w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-red"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">Best HRMS Solution 2026</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-primary-black leading-[1.2] custom-size:leading-[1.1] capitalize'
          >
            Get Automated With <br className='hidden sm:block' />
            <span className="text-primary-red underline decoration-primary-red/20 underline-offset-8">The Best HRMS</span> for Businesses
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='text-primary-gray font-medium leading-relaxed text-base md:text-lg  max-w-xl'
          >
            Streamline your operations and boost productivity with our all-in-one HRMS platform.
            Join thousands of successful businesses who have transformed their growth strategy with ProcessIQ Tech.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className='flex flex-wrap items-center justify-center custom-size:justify-start gap-4 lg:gap-6'
          >
            <Link to="/crm">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className='bg-primary-red text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium transition-all border-2 border-primary-red hover:bg-transparent hover:text-primary-red text-sm sm:text-base'
              >
                Learn More
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-primary-black text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center gap-2 border-2 border-primary-black transition-all hover:bg-transparent hover:text-primary-black text-sm sm:text-base'
              >
                Request a Demo
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Slider Section */}
        <div className='relative flex justify-center items-center mt-6 sm:mt-12 custom-size:mt-0'>
          {/* Background Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 flex justify-center items-center">
            <div className="w-[80%] h-[80%] bg-primary-red/5 blur-3xl animate-pulse" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[320px] sm:max-w-[450px] custom-size:max-w-[550px]"
          >
            <div className="relative z-10 rounded-2xl  overflow-hidden bg-white group">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                speed={1200}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  bulletActiveClass: 'swiper-pagination-bullet-active bg-primary-red !w-8 transition-all',
                }}
                loop={true}
                className="w-full aspect-square"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full bg-slate-50 relative flex items-center justify-center p-4 sm:p-8">
                      <img
                        src={img}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-contain transition-transform duration-[4000ms] ease-out group-hover:scale-110"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Global Style overrides for Swiper Pagination */}
      <style jsx global>{`
                .swiper-pagination-bullet {
                    background: #cbd5e1;
                    opacity: 1;
                    width: 8px;
                    height: 5px;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                }
                @media (min-width: 640px) {
                  .swiper-pagination-bullet {
                    width: 12px;
                    height: 6px;
                  }
                }
                .swiper-pagination-bullet-active {
                    background: #ff3b30 !important;
                    width: 24px !important;
                }
                @media (min-width: 640px) {
                  .swiper-pagination-bullet-active {
                    width: 32px !important;
                  }
                }
                .swiper-pagination {
                    bottom: 16px !important;
                }
                @media (min-width: 640px) {
                  .swiper-pagination {
                    bottom: 24px !important;
                  }
                }
            `}</style>
    </section>
  )
}

export default HeroServices
