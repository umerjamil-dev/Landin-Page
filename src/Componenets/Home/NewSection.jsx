import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { front } from '../../assets';

const NewSection = () => {
    const features = [
        {
            title: 'Centralized Data',
            description: "Access and manage all employee information from one secure, unified database.",
        },
        {
            title: 'Automated Payroll',
            description: "Process salaries, deductions, and tax compliance with one click for error-free payments.",
        },
        {
            title: 'Smart Attendance',
            description: 'Real-time monitoring of employee hours, leaves, and shifts with integrated reporting.',
        },
    ];


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="py-20 custom-padding bg-white overflow-hidden">
            <div className="">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="flex-1 space-y-8"
                    >
                        <motion.div variants={itemVariants} className="space-y-4">
                            <span className="text-primary-gray font-medium tracking-widest text-sm uppercase">
                                OUR BEST FEATURES
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-medium text-primary-black leading-tight">
                                Simplify your Workflow with our powerful HRMS Features
                            </h2>
                            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
                                Empowering your business with intelligent automation and seamless employee management.
                            </p>

                        </motion.div>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="mt-1 bg-red-50 p-1 rounded-full group-hover:bg-primary-red transition-colors duration-300">
                                        <CheckCircle2 className="w-6 h-6 text-primary-red group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-medium text-primary-black group-hover:text-primary-red transition-colors duration-300">
                                            {feature.title}:
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed italic">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Content - Enhanced Image Display */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex-1 relative group"
                    >
                        {/* Main Background Card Effect */}
                        <div className="absolute -inset-6 bg-gradient-to-br from-gray-100 to-gray-300 rounded-[2.5rem] -z-10 shadow-inner" />

                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 1, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative z-10 p-2 md:p-6"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-8 border-white">
                                <img
                                    src={front}
                                    alt="HRMS Dashboard"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Decorative Elements */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-8 -right-8 w-24 h-24 bg-primary-red/20 rounded-full blur-2xl z-0"
                            />
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-red/10 rounded-full blur-3xl z-0"
                            />

                            {/* Small decorative "Badge" to add detail */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute top-10 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 z-20 hidden md:block"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] font-medium text-primary-gray uppercase tracking-widest">System Active</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Background Decorative patterns */}
                        <div className="absolute top-0 right-0 opacity-10 pointer-events-none -z-20">
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="100" cy="100" r="100" fill="url(#paint0_radial)" />
                                <defs>
                                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(100)">
                                        <stop stopColor="#ED1C24" />
                                        <stop offset="1" stopColor="#ED1C24" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default NewSection;
