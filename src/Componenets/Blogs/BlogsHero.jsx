import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { About1, HeroImg, HeroMini, Line2, WhyChoose1 } from '../../assets'

const BlogsHero = () => {
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
        <section className='overflow-hidden bg-white my-[8%] relative'>
            <img src={Line2} className='absolute -top-0 -right-0' alt="" />
            <main className='grid custom-size:grid-cols-2 custom-padding  items-center py-20 custom-size:py-0'>
                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='flex flex-col justify-center space-y-6 lg:space-y-8'
                >
                    <motion.h1
                        variants={itemVariants}
                        className='text-4xl md:text-5xl lg:text-7xl font-bold text-primary-black leading-[1.2] capitalize'
                    >
                        Insights From Our
                        <br className='hidden custom-size:block' />
                        <span className="text-primary-red">Technology Hub</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className='text-primary-gray font-medium leading-relaxed text-lg text-primary-black text-justify'
                    >
                        Stay ahead of the curve with our latest articles on AI integration, global BPO trends, and strategic IT management. ProcessIQ Tech brings you expert perspectives on navigating the ever-evolving digital landscape.
                    </motion.p>



                    <motion.div
                        variants={itemVariants}
                        className='flex flex-wrap items-center gap-4 lg:gap-8'
                    >
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='border-2 border-primary-red text-primary-black px-10 py-3 rounded-full font-bold transition-all hover:bg-primary-red hover:text-white'
                            >
                                Get Started Now
                            </motion.button>
                        </Link>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='bg-primary-black text-primary-red px-8 py-3 rounded-full font-bold flex items-center gap-2 border-2 border-primary-black transition-all hover:bg-transparent hover:text-primary-black'
                            >
                                Request a Demo
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Image & Animated Boxes */}
                <div className=' hidden  relative custom-size:flex justify-center  ` custom-size:justify-end items-center  custom-size:mt-0'>

                    {/* Main Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        < motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className='  w-full max-w-md custom-size-two:max-w-2xl  drop-shadow-2xl'
                            src={About1}
                            alt="HR Software Interface"
                        />
                    </motion.div>
                </div>
            </main>
        </section>
    )
}

export default BlogsHero