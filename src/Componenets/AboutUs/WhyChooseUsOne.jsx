import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { About5, Logo21 } from '../../assets'

const StatCircle = ({ percentage, label, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 group"
        >
            <div className="relative w-20 h-20 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="transparent"
                        className="text-gray-100"
                    />
                    <motion.circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="transparent"
                        strokeDasharray="226.2"
                        initial={{ strokeDashoffset: 226.2 }}
                        whileInView={{ strokeDashoffset: 226.2 - (226.2 * percentage) / 100 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-primary-red"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg  font-medium text-primary-black">{percentage}%</span>
                </div>
            </div>
            <div className="space-y-1">
                <h4 className="text-lg  font-medium text-primary-black uppercase tracking-wider">{label}</h4>
                <p className="text-sm text-primary-gray leading-relaxed max-w-[280px]">{description}</p>
            </div>
        </motion.div>
    )
}

const WhyChooseUsOne = () => {
    return (
        <section className="custom-padding py-24 bg-white relative overflow-hidden">
            <div className="">

                {/* Layout Container */}
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-y-12 lg:gap-y-0 relative ">

                    {/* Top Left: Header Info */}
                    <div className="lg:col-span-5 pt-4 z-30">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-primary-black mb-8"
                        >
                            <ArrowRight className="w-6 h-6 text-primary-black" />
                            <span className="text-xl font-medium uppercase ">Why Choose Us</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl   font-medium text-primary-black leading-[1.1] tracking-tight"
                        >
                            Unlock the potential <br className="hidden md:block" /> of your business.
                        </motion.h2>
                    </div>

                    {/* Top Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className=" hidden  lg:col-span-7 lg:col-start-6 relative z-10  custom-size:flex justify-end items-center"
                    >
                        <img
                            src={About5}
                            alt="Team collaboration"
                            className="w-[80%] object-cover   rounded-sm z-1000"
                        />
                    </motion.div>

                    {/* Bottom Left: Dark Box (Overlaps upward) */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-[#1A1A1A] px-8 pt-8   custom-size:-mt-30 relative -z-0 shadow-2xl"
                    >
                        {/* Decorative Elements */}
                        {/* <div className="absolute -top-3 -right-3 w-32 h-32 border-t-8 border-r-8 border-primary-red -z-10"></div> */}
                        <div className="absolute -bottom-0 -left-0 w-24 h-16 bg-primary-red/40 -z-10 group-hover:scale-110 transition-transform -z-9 hidden md:block "></div>

                        <div className="space-y-8">
                            <img src={Logo21} className=' h-30' alt="" />

                            <div className="space-y-6">
                                <h4 className="text-3xl md:text-4xl  font-medium text-white leading-tight">
                                    Best Creative IT Agency And Solutions Since 2005.
                                </h4>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-8 pt-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl  font-medium text-white"># 1</span>
                                </div>

                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05, backgroundColor: "#ED1C24" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-12 py-4 bg-transparent border-2 border-primary-red rounded-full text-white  font-medium uppercase tracking-widest text-sm transition-all shadow-[0_10px_20px_rgba(237,28,36,0.2)]"
                                    >
                                        About More
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Right: Stats area */}
                    <div className="lg:col-span-5 pt-12 lg:pt-16 lg:pl-16 space-y-12">
                        <StatCircle
                            percentage={70}
                            label="Strategy"
                            description="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
                        />
                        <StatCircle
                            percentage={98}
                            label="Audience"
                            description="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
                        />
                        <StatCircle
                            percentage={85}
                            label="Keyword"
                            description="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsOne