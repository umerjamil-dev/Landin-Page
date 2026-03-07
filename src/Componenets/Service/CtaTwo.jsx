import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WhyChoose1, Line2 } from '../../assets';

const CtaTwo = () => {
    return (
        <section className="custom-padding py-24 bg-white overflow-hidden relative">
            <img src={Line2} className='absolute -top-0 -right-10 h-full opacity-30 ' alt="" />
            <div className="grid custom-size:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col space-y-8"
                >
                    <div className="space-y-4">
                        <h4 className="text-primary-black font-medium text-lg">Workforce Excellence</h4>
                        <h2 className="text-4xl md:text-5xl font-medium text-primary-black tracking-tight leading-tight">
                            Modern HRMS Solutions For Your Workforce
                        </h2>
                        <p className="text-primary-gray font-medium leading-relaxed">
                            Our HRMS streamlines human resources processes, from recruitment and payroll to performance management, centralized in one powerful platform.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Feature 1 */}
                        <div className="space-y-2">
                            <h3 className="text-2xl font-medium text-primary-black">Automated Payroll Management</h3>
                            <p className="text-primary-gray font-medium leading-relaxed">
                                Simplify complex payroll calculations, tax compliance, and benefit administration with our integrated automated payroll system for error-free processing.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="space-y-2">
                            <h3 className="text-2xl font-medium text-primary-black">Employee Performance Tracking</h3>
                            <p className="text-primary-gray font-medium leading-relaxed">
                                Monitor employee progress and facilitate growth with comprehensive performance reviews and real-time attendance tracking tools.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-8 pt-4">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 border-2 border-primary-red text-primary-black font-medium rounded-full hover:bg-primary-red hover:text-white transition-all duration-300"
                            >
                                Get Started Free
                            </motion.button>
                        </Link>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                                        <img
                                            src={`https://i.pravatar.cc/150?u=${i + 10}`}
                                            alt="User"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h4 className="font-medium text-primary-black text-lg">2.5k +</h4>
                                <p className="text-primary-gray text-sm font-medium">Active HR Users</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center custom-size:justify-end items-center"
                >
                    {/* Red decorative background */}
                    {/* <div className="absolute w-[80%] h-[80%] bg-primary-red rounded-full opacity-90 blur-sm" />
                    <div className="absolute w-full h-full border-2 border-dashed border-primary-red/30 rounded-full animate-[spin_20s_linear_infinite]" /> */}

                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <img
                            src={WhyChoose1}
                            alt="HRMS Dashboard Laptop"
                            className="w-full max-w-[600px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaTwo;
