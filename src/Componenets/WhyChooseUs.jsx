import React from 'react'
import { motion } from 'framer-motion'
import { WhyChoose1 } from '../assets'

const WhyChooseUs = () => {
    const features = [
        "Advanced AI Analytics",
        "Strategic BPO Excellence",
        "Scalable IT Infrastructure",
        "Automated HR Management",
        "24/7 Global Support",
        "Cloud-Native Architecture",
        "Dynamic Workflow Automation",
        "Robust Data Security",
        "Customizable Service Level",
        "Real-time Performance Metrics",
        "Seamless API Integrations",
        "Enterprise-Grade Compliance"
    ];
    return (
        // why choose us section is here 
        <section className='   custom-padding py-20 bg-white overflow-hidden font-outfit'>
            <div className='grid custom-size:grid-cols-2 gap-10 items-center'>
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='flex flex-col space-y-6'
                >
                    <div className='flex items-center gap-2 text-primary-red font-medium tracking-widest text-sm uppercase'>
                        <span className='w-10 h-[2px] bg-primary-red'></span>
                        Core Advantages
                    </div>
                    <h2 className='text-4xl md:text-5xl font-medium text-primary-black tracking-tight leading-tight'>
                        Why Organizations Trust <br className='hidden custom-size-two:block' /> <span className='text-primary-red'>ProcessIQ Tech</span>
                    </h2>

                    <p className='text-slate-600 font-medium text-lg leading-relaxed text-justify'>
                        ProcessIQ Tech stands out as a global leader in business transformation. We don't just provide software; we deliver strategic ecosystems that integrate IT, BPO, and HR operations into one seamless engine. Our emphasis on AI-driven efficiency and scalable architecture empowers your organization to thrive in a digital-first economy.
                    </p>

                    <div className='flex items-center w-full max-w-md my-6'>
                        <div className='h-[2px] flex-1 bg-primary-red'></div>
                        <div className='w-3 h-3 bg-primary-red rotate-45'></div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-x-8 gap-y-4 pt-4'>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className='flex items-center gap-3 group'
                            >
                                <div className='w-5 h-5 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-primary-red transition-all duration-300'>
                                    <div className='w-1.5 h-1.5 rounded-full bg-primary-red group-hover:bg-white' />
                                </div>
                                <span className='text-slate-800 font-medium text-[15px] leading-tight'>
                                    {feature}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className='relative flex justify-center custom-size:justify-end items-center'
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className='relative'
                    >
                        {/* Decorative background circle */}
                        <div className='absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary-red/5 rounded-full blur-3xl' />

                        <img
                            src={WhyChoose1}
                            alt="ProcessIQ Technology Solutions"
                            className='w-full max-w-[600px] object-contain drop-shadow-[0_45px_45px_rgba(0,0,0,0.15)] relative z-10'
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyChooseUs
