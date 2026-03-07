import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Entry from '../Pages/Entry';

const FAQS = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqData = [
        {
            question: "What core services does ProcessIQ Tech provide?",
            answer: "We offer a comprehensive suite of solutions including Managed IT Services, Business Process Outsourcing (BPO), Omni-channel Call Center support, and automated HR/Payroll systems."
        },
        {
            question: "How secure is the data handled by your systems?",
            answer: "ProcessIQ Tech employs enterprise-grade security protocols, including end-to-end encryption, regular security audits, and multi-factor authentication to ensure absolute data integrity and compliance."
        },
        {
            question: "Can your solutions integrate with our existing software?",
            answer: "Yes, our platforms are designed with open API architectures, allowing for seamless integration with major CRM, ERP, and communication tools you already use."
        },
        {
            question: "Do you offer 24/7 technical support?",
            answer: "Absolutely. Our global support teams are available 24/7 to monitor your infrastructure and provide real-time assistance for any mission-critical operations."
        },
        {
            question: "How long does the implementation process take?",
            answer: "Depending on the complexity, standard modules can be deployed within weeks. We provide a detailed project roadmap during the initial consultation phase."
        },
        {
            question: "Is your platform scalable for global enterprises?",
            answer: "Yes, our cloud-native architecture is built specifically for scale. Whether you have 50 or 50,000 employees, our systems adapt to your workload dynamically."
        },
        {
            question: "What distinguishes your BPO services from others?",
            answer: "Our BPO solutions are technology-led. We combine highly skilled professionals with proprietary automation tools to deliver higher accuracy and faster turnaround times."
        }
    ];
    // faqs section is here 
    return (
        <>
            <section className="custom-padding py-24 bg-white overflow-hidden font-outfit">
                <div className="grid custom-size:grid-cols-2 gap-16 items-start">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className='flex items-center gap-2 text-primary-red font-medium tracking-widest text-sm uppercase'>
                            <span className='w-10 h-[2px] bg-primary-red'></span>
                            Support Center
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-primary-black leading-tight">
                            Got Questions? <br /> We have <span className='text-primary-red'>Answers.</span>
                        </h2>
                        <p className="text-slate-600 font-medium text-lg max-w-lg leading-relaxed">
                            Find everything you need to know about our technology ecosystem and how we can transform your business operations.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary-black text-white px-10 py-4 rounded-full font-medium text-lg shadow-2xl transition-all hover:bg-primary-red tracking-wider"
                            >
                                Contact Support
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Right Accordion */}
                    <div className="flex flex-col space-y-4">
                        {faqData.map((faq, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div key={index} className="overflow-hidden bg-slate-50 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-md">
                                    <motion.div
                                        animate={{
                                            backgroundColor: isActive ? "#ED1C24" : "rgba(255, 255, 255, 0)",
                                            color: isActive ? "#FFFFFF" : "#000000"
                                        }}
                                        className={`cursor-pointer px-8 py-6 flex items-center justify-between transition-all duration-300 `}
                                        onClick={() => setActiveIndex(isActive ? -1 : index)}
                                    >
                                        <span className="text-lg font-medium">{faq.question}</span>
                                        <motion.div
                                            animate={{ rotate: isActive ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={isActive ? 'text-white' : 'text-primary-red'}
                                        >
                                            <ChevronDown size={24} />
                                        </motion.div>
                                    </motion.div>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="bg-primary-red"
                                            >
                                                <div className="px-8 pb-8 pt-2 text-white/90 font-medium font-medium leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
            <Entry />
        </>
    );
};

export default FAQS;
