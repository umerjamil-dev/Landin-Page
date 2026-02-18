import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { it1, Line1, Line2 } from '../../assets'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const ServiceItTrade = () => {
    const swiperRef = useRef(null)

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
       <>
        <section className="relative py-20 overflow-hidden bg-white">
            <img src={Line1} className='absolute -bottom-0 -left-0 pointer-events-none  w-[20%]' alt="" />
            <img src={Line2} className='absolute -top-0 -right-0 pointer-events-none  w-[20%] ' alt="" />

            <div className="relative z-10 mx-auto max-w-7xl custom-padding">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    {/* Subtitle */}
                    <motion.span
                        variants={itemVariants}
                        className="mb-3 text-sm font-bold tracking-[0.2em] uppercase text-slate-500"
                    >
                        Advanced IT & Trading Ecosystem
                    </motion.span>

                    {/* Title */}
                    <motion.h2
                        variants={itemVariants}
                        className="mb-6 text-4xl font-extrabold text-slate-900 md:text-5xl lg:text-6xl"
                    >
                        Powering Your <br className='hidden md:block' /> <span className='text-primary-red'>Brokerage Success</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl mb-12 text-base font-medium leading-relaxed md:text-lg text-slate-600"
                    >
                        Process IQ Tech delivers a seamless blend of high-performance IT infrastructure and intelligent trading tools. Manage your leads, monitor sales status, and scale your business with an all-in-one platform built for modern financial markets.
                    </motion.p>

                    {/* Mockup Image Slider Container */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full max-w-5xl mx-auto"
                    >
                        <div className="relative">
                            <div className="overflow-hidden bg-white shadow-2xl rounded-xl md:rounded-[2rem] border border-slate-100">
                                <Swiper
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper
                                    }}
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    className="w-full h-auto"
                                >
                                    {[1, 2, 3].map((item) => (
                                        <SwiperSlide key={item}>
                                            <img
                                                src={it1}
                                                alt={`Trading Dashboard Mockup ${item}`}
                                                className="w-full h-auto"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Floating Badge 1: Sells Growth (Top Left) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6   border-6     xl:-left-20     2xl:-left-30  md:top-20 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block w-40 md:w-48 text-left"
                            >
                                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Sells Growth</span>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <h4 className="text-xl md:text-2xl font-bold text-slate-900">+28%</h4>
                                </div>
                                <div className="mt-3 h-8 w-full">
                                    <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 2, delay: 1 }}
                                            d="M0 25 Q 20 5, 40 20 T 80 10 T 100 15"
                                            fill="none"
                                            stroke="#3b82f6"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </motion.div>


                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -right-4 md:-bottom-12 md:-right-8 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block w-64 md:w-90 text-left"
                            >
                                <h4 className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">User Data</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden border border-white">
                                                <img src="https://i.pravatar.cc/150?u=1" alt="user" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-900">Jesse Thomas</p>
                                                <p className="text-[10px] text-slate-400">627 Points - 98% Correct</p>
                                            </div>
                                        </div>
                                        <span className="text-xs font-bold text-green-500 flex items-center gap-0.5">1 ▲</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden border border-white">
                                                <img src="https://i.pravatar.cc/150?u=2" alt="user" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-900">Thisal Mathiyazhagan</p>
                                                <p className="text-[10px] text-slate-400">837 Points - 89% Correct</p>
                                            </div>
                                        </div>
                                        <span className="text-xs font-bold text-red-500 flex items-center gap-0.5">2 ▼</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating Decorative Glows */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-primary-red/10 rounded-full blur-3xl -z-10 -translate-x-12 -translate-y-12"></div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary-red/10 rounded-full blur-3xl -z-10 translate-x-12 translate-y-12"></div>
                    </motion.div>

                    {/* Navigation Arrows */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-12 mt-16"
                    >
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="flex items-center gap-2 transition-transform hover:-translate-x-2 group focus:outline-none"
                        >
                            <MoveLeft className="w-30 h-30 text-slate-800 group-hover:text-primary-black transition-colors" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="flex items-center gap-2 transition-transform hover:translate-x-2 group focus:outline-none"
                        >
                            <MoveRight className="w-30 h-30 text-slate-800 group-hover:text-primary-black transition-colors" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
       </>
    )
}
export default ServiceItTrade

