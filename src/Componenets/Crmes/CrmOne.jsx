import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Crm1, HeroMini } from '../../assets'

const CrmOne = () => {
    const data = [
        "Built for modern businesses",
        "Customer-first approach",
        "Trusted by global teams",
    ]

    return (
        <section className='bg-[#E5E5E5]/50   custom-padding py-16 overflow-hidden'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-16 items-center'>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='w-full'
                >
                    <img className='w-full h-auto object-cover rounded-2xl  ' src={Crm1} alt="CRM Journey" />
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className='space-y-6'
                >
                    <div className='space-y-2'>
                        <h4 className='text-xl md:text-2xl font-semibold text-primary-black border-l-4 border-primary-red pl-3'>
                            About Our CRM Journey
                        </h4>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-black leading-tight'>
                            Innovating CRM for <br className='hidden lg:block' /> Modern Teams
                        </h2>
                    </div>

                    <p className='text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl'>
                        Our CRM is designed to empower modern teams with smarter tools, streamlined workflows, and real-time insights—driving stronger collaboration, customer relationships, and sustainable business growth.
                    </p>

                    <div className='space-y-4'>
                        {data.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, backgroundColor: "#fff" }}
                                className='bg-white/80 backdrop-blur-sm rounded-xl border border-transparent hover:border-primary-red transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4 max-w-md cursor-default'
                            >
                                <div className='rounded-l-full px-6 bg-primary-black rounded-r-full   text-white flex items-center justify-center text-sm sm:text-base font-bold shrink-0'>
                                    {index + 1}
                                </div>
                                <p className='font-semibold text-primary-black text-sm sm:text-lg lg:text-xl'>
                                    {value}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pt-4'>
                        <Link to="/contact">
                            <motion.button
                                // whileHover={{ scale: 1.05, backgroundColor: "#ED1C24", borderColor: "#ED1C24" }}
                                whileTap={{ scale: 0.95 }}
                                className='bg-primary-black border border-primary-red text-white px-8 py-2 rounded-full border-2 border-primary-black shadow-lg  transition-all duration-300 text-lg font-medium'
                            >
                                Get Started
                            </motion.button>
                        </Link>

                        <div className='flex items-center gap-4'>
                            <img className='h-12   ' src={HeroMini} alt="User avatars" />
                            <div className='flex flex-col'>
                                <h3 className='text-xl sm:text-2xl font-bold text-primary-black text-center'>3.5k+</h3>
                                <p className='text-gray-600 text-sm sm:text-base font-medium'>Active Users</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CrmOne
