import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { About1, heroMainCrmOne } from '../../assets'

const CrmHeroOne = ({
    title = (
        <>
            Elevate Ur Customer
            <br className='hidden md:block' />
            <span className="">Relationships</span> Our CRM
        </>
    ),
    description = "Enhance your customer interactions and streamline your sales processes with our powerful and intuitive CRM solution.",
    btn1Text = "Get Started Now",
    btn2Text = "Request a Demo",
    onBtn1Click = () => { },
    onBtn2Click = () => { }
}) => {
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

    // Month labels for sales report
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
                    <motion.h1
                        variants={itemVariants}
                        className='text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-medium text-primary-black leading-tight capitalize  lg:text-left'
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className='text-primary-gray font-medium text-base md:text-lg leading-relaxed max-w-xl '
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className='flex flex-wrap items-center  lg:justify-start gap-4'
                    >
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='border-2 border-primary-red px-10 py-4 rounded-full font-medium transition-all hover:bg-transparent hover:text-primary-black w-full sm:w-auto shadow-lg shadow-primary-red/20'
                            >
                                {btn1Text}
                            </motion.button>
                        </Link>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='bg-primary-black text-white px-10 py-4 rounded-full font-medium flex items-center justify-center gap-2 border-2 border-primary-black transition-all hover:bg-transparent hover:text-primary-black w-full sm:w-auto'
                            >
                                {btn2Text}
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Image with Floating Badges */}
                <div className='flex justify-center lg:justify-end items-center mt-8 sm:mt-0'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative w-full max-w-md lg:max-w-xl"
                    >
                        {/* Main Image */}
                        <div className="relative z-10 rounded-[2rem] overflow-hidden group">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className='w-full h-auto drop-shadow-2xl transition-transform duration-700 group-hover:scale-105'
                                src={heroMainCrmOne}
                                alt="CRM Software Interface"
                            />
                        </div>

                        {/* Floating Badge 1: Volume vs Service Level (Top Left) */}
                        <motion.div
                            animate={floatAnimation}
                            className="absolute -top-4 -left-4 md:-top-8 md:-left-8 z-20 bg-white p-3 md:p-4 rounded-xl shadow-2xl border border-gray-100 hidden sm:block w-48"
                        >
                            <h4 className="text-[9px] md:text-[11px] font-medium text-primary-black mb-3">Volume vs Service Level</h4>
                            <div className="flex items-end gap-2 h-16 md:h-20 mb-3 px-1">
                                {[
                                    { p: 40, g: 35 },
                                    { p: 35, g: 50 },
                                    { p: 45, g: 30 },
                                    { p: 30, g: 45 },
                                    { p: 25, g: 35 },
                                    { p: 40, g: 40 }
                                ].map((val, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center">
                                        <div className="w-full flex flex-col-reverse justify-start rounded-full overflow-hidden h-14 md:h-18">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: `${val.g}%` }}
                                                transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                                                className="w-full bg-[#10b981]"
                                            />
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: `${val.p}%` }}
                                                transition={{ delay: 1.2 + i * 0.1, duration: 0.8 }}
                                                className="w-full bg-[#8b5cf6]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-around items-center pt-2 border-t border-gray-50">
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center gap-1 mb-0.5">
                                        <span className="w-1.5 h-1.5 rounded-sm bg-[#8b5cf6]"></span>
                                        <span className="text-[7px] md:text-[8px] font-medium text-gray-400 uppercase">Volume</span>
                                    </div>
                                    <span className="text-[10px] font-medium text-primary-black">1.65</span>
                                </div>
                                <div className="w-[1px] h-4 bg-gray-100 mx-1"></div>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center gap-1 mb-0.5">
                                        <span className="w-1.5 h-1.5 rounded-sm bg-[#10b981]"></span>
                                        <span className="text-[7px] md:text-[8px] font-medium text-gray-400 uppercase">Services</span>
                                    </div>
                                    <span className="text-[10px] font-medium text-primary-black">635</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Badge 2: Sales Reports (Bottom Right) */}
                        <motion.div
                            animate={floatAnimationReverse}
                            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-20 bg-white p-3 rounded-xl shadow-2xl border border-gray-100 hidden sm:block w-56"
                        >
                            <h4 className="text-[9px] md:text-[12px] font-medium text-primary-black mb-3">Sales Reports</h4>

                            <div className="relative h-24 md:h-30 w-full mb-3 flex gap-2">
                                <div className="flex flex-col justify-between h-full text-[6px] md:text-[8px] font-medium text-gray-300 pr-0.5">
                                    <span>200</span>
                                    <span>100</span>
                                    <span>0</span>
                                </div>

                                <div className="relative flex-1">
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 60">
                                        {[0, 30, 60].map(y => (
                                            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#f3f4f6" strokeWidth="0.5" />
                                        ))}
                                        <line x1="55" y1="0" x2="55" y2="60" stroke="#fecaca" strokeWidth="0.5" strokeDasharray="2" />

                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 2, delay: 1 }}
                                            d="M0 20 Q 15 10, 25 25 T 50 30 T 75 20 T 100 40"
                                            fill="none" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round"
                                        />

                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 2, delay: 1.2 }}
                                            d="M0 35 Q 20 25, 35 45 T 55 15 T 80 25 T 100 45"
                                            fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"
                                        />
                                        <motion.circle
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 2.5 }}
                                            cx="55" cy="15" r="2" fill="#ef4444"
                                        />

                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 2, delay: 1.4 }}
                                            d="M0 30 Q 15 15, 30 20 T 60 40 T 85 30 T 100 25"
                                            fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round"
                                        />
                                    </svg>

                                    <div className="flex justify-between mt-1.5">
                                        {['Jan', 'Apr', 'Jul', 'Oct', 'Dec'].map(m => (
                                            <span key={m} className="text-[6px] md:text-[7px] font-medium text-gray-300">{m}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center gap-2 pt-2 border-t border-gray-50 flex-wrap">
                                <div className="flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]"></span>
                                    <span className="text-[7px] md:text-[8px] font-medium text-gray-400">Actual</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]"></span>
                                    <span className="text-[7px] md:text-[8px] font-medium text-gray-400">New</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                                    <span className="text-[7px] md:text-[8px] font-medium text-gray-400">Unique</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative background element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-red/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </motion.div>
                </div>
            </main>
        </section>
    )
}

export default CrmHeroOne


