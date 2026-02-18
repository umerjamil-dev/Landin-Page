import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CrmCore = ({
    title = (
        <>
            Core Features Of Our <br />
            <span className="relative">
                CRM Application
            </span>
        </>
    ),
    mainDescription = "Discover The Essential Tools And Functionalities Designed To Optimize Your Customer Management, Improve Sales Efficiency, And Enhance Overall Business Performance.",
    features = []
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
        <section className="py-20 custom-padding bg-white ">
            <div className="">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.2]"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-700 font-semibold lg:text-lg "
                    >
                        {mainDescription}
                    </motion.p>
                </div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-primary-black rounded-xl p-6 custom-size-two:w-[76%] mx-auto  flex flex-col items-center text-center transition-all duration-300 space-y-10"
                        >
                            {/* Icon Box */}
                            <div className="w-16 h-16 flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-white text-xl tracking-wider font-bold mb-6">
                                {feature.title}
                            </h3>
                            <p className=" text-white text-center text-sm leading-relaxed mb-8">
                                {feature.description}
                            </p>

                            {/* Read More */}
                            <Link to="/contact">
                                <button className="text-white text-xs font-bold uppercase tracking-widest hover:text-primary-red transition-colors">
                                    Read More
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default CrmCore