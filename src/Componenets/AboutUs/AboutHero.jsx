import React from 'react'
import { motion } from 'framer-motion'
import { About1 } from '../../assets'
import { Link } from 'react-router-dom'

const AboutHero = () => {
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

  return (
    <section className='overflow-hidden bg-white py-12 md:py-20 lg:py-28 font-outfit'>
      <main className='custom-padding grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='flex flex-col justify-center space-y-6 lg:space-y-8'
        >
          <div className='flex text-center lg:text-left items-center gap-2 text-primary-red font-medium tracking-[0.2em] uppercase text-sm'>
            <span className='w-8 h-[2px] bg-primary-red'></span>
            About ProcessIQ Tech
          </div>
          <motion.h1
            variants={itemVariants}
            className='text-3xl md:text-5xl lg:text-7xl font-medium text-primary-black leading-tight '
          >
            Engineering <span className='text-primary-red'>Excellence</span> <br className='hidden md:block' /> for the Digital Era
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='text-slate-600 font-medium text-base md:text-lg leading-relaxed text-justify max-w-xl xl:max-w-2xl'
          >
            At ProcessIQ Tech, we believe that technology should be an enabler, not a barrier. Our journey began with a vision to simplify complex business operations through intelligent automation and strategic outsourcing. Today, we stand as a global leader in business transformation, helping enterprise teams scale with precision and confidence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className='flex flex-wrap items-center justify-center lg:justify-start gap-4'
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-primary-red text-white px-10 py-4 rounded-full font-medium transition-all shadow-lg shadow-primary-red/20 w-full sm:w-auto flex justify-center'
              >
                Join Our Journey
              </motion.button>
            </Link>
            <Link to="/service">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-primary-black text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 border-none transition-all hover:bg-slate-800 w-full sm:w-auto'
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <div className='flex justify-center lg:justify-end items-center '>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-lg lg:max-w-2xl"
          >
            <div className='absolute -z-10 -bottom-10 -right-10 w-full h-full bg-primary-red/5 rounded-full blur-3xl'></div>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className='w-full h-auto drop-shadow-2xl rounded-[3rem]'
              src={About1}
              alt="ProcessIQ Innovation Hub"
            />
          </motion.div>
        </div>
      </main>
    </section>
  )
}

export default AboutHero