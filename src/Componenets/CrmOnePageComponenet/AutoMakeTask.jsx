import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { MainCrmOne1 } from '../../assets'

import TaskInsightCard from './TaskInsightCard'

const AutoMakeTask = ({
    title = "Automate Tasks To Increase Efficiency And Reduce Manual Effort",
    description = "Gain Precise Insights For Your Business With Our Advanced Analytics Tools. Make Informed Decisions Based On Accurate, Real-Time Data",
    points = [
        "Actionable Insights",
        "Enhanced Decision-Making",
        "Improved Efficiency"
    ],
    btnText = "Explore More",
    imgSrc = MainCrmOne1
}) => {
    return (
        <section className="py-16 custom-padding bg-white overflow-hidden font-outfit relative">
            <div className="absolute bottom-10 -right-4  z-20 scale-90 md:scale-100 drop-shadow-2xl">
                <TaskInsightCard />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col space-y-8"
                >
                    <h2 className="text-3xl md:text-5xl font-medium text-slate-900 ">
                        {title}
                    </h2>

                    <p className="text-slate-800 font-medium text-lg ">
                        {description}
                    </p>

                    <ul className="space-y-4">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="text-red-600 w-6 h-6 flex-shrink-0" />
                                <span className="text-slate-900 font-medium text-lg">{point}</span>
                            </li>
                        ))}
                    </ul>

                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-black text-primary-red px-12 py-4 rounded-full font-medium text-lg w-fit shadow-xl hover:shadow-primary-red/20 transition-all border border-transparent hover:border-primary-red/30"
                        >
                            {btnText}
                        </motion.button>
                    </Link>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    {/* Main Background Image */}
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl ">
                        <img
                            src={imgSrc}
                            alt="CRM Automation"
                            className="w-full h-auto max-w-md lg:min-w-lg object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Floating Insight Card Overlay */}


                    {/* Decorative Background Blob */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50 blur-3xl rounded-full"></div>
                </motion.div>

            </div>
        </section>
    )
}

export default AutoMakeTask