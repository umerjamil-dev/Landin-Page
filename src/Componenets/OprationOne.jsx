import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Opration1 } from '../assets';

const OprationOne = () => {
    const listItems = [
        "ISO Certified Standards",
        "AI-Powered Automation",
        "Real-time Monitoring"
    ];

    return (
        <section className="custom-padding py-20 bg-white overflow-hidden">
            <div className="grid custom-size:grid-cols-2 gap-12  items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col space-y-8 "
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-medium text-center text-primary-black tracking-tight custom-size:text-left">
                            Operations & Workflow
                        </h2>
                        <p className="text-primary-black font-medium leading-relaxed max-w-xl  mx-auto custom-size:mx-0">
                            ProcessIQ Tech integrates advanced project management frameworks with real-time operational tracking to ensure every task is optimized for speed and accuracy.
                        </p>
                    </div>

                    <div className="    flex flex-col md:flex-row gap-12 items-start">
                        {/* Features List */}
                        <div className="flex flex-col gap-4 w-full md:w-auto">
                            {listItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 border-2 border-primary-red px-6 py-3 rounded-full group cursor-default hover:bg-primary-red transition-all duration-300"
                                >
                                    <CheckCircle2 size={24} className="text-primary-black group-hover:text-white transition-colors" />
                                    <span className="text-primary-black font-medium group-hover:text-white transition-colors whitespace-nowrap">
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Warranty Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-primary-red  rounded-xl p-4  lg:h-60 text-white flex flex-col items-center text-center space-y-2 shadow-2xl shadow-primary-red/20 w-full md:w-[230px]"
                        >
                            <div className="p-3 bg-white/20 rounded-full">
                                <ShieldCheck size={40} />
                            </div>
                            <h3 className="text-2xl font-medium uppercase tracking-wider">Guarantee</h3>
                            <p className=" leading-tight opacity-90 font-medium">
                                We provide 99.9% operational and enterprise-grade security.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center custom-size:justify-end"
                >
                    <motion.img
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        src={Opration1}
                        alt="Operations Illustration"
                        className="w-full max-w-[700px] object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};
export default OprationOne;