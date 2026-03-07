import React from 'react';
import { motion } from 'framer-motion';
import { Crm2 } from '../../assets';
import { Rocket, Users, Zap, MoreVertical } from 'lucide-react';

const TenantsSummaryCard = () => {
    const data = [
        { type: '1 BHK', color: 'bg-pink-500', percent: 'w-[30%]', count: 600, collected: '$2410', due: '$410' },
        { type: '2 BHK', color: 'bg-blue-500', percent: 'w-[60%]', count: 1080, collected: '$2651', due: '$231' },
        { type: '3 BHK', color: 'bg-purple-500', percent: 'w-[15%]', count: 300, collected: '$4004', due: '$404' },
        { type: 'Villa', color: 'bg-teal-400', percent: 'w-[45%]', count: 960, collected: '$5105', due: '$105' },
    ];

    return (
        <div className="bg-white p-2 rounded-xl shadow-2xl w-full max-w-[300px] font-sans hover:scale-105 transition-all duration-300">
            <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium text-gray-800 text-[10px] sm:text-xs tracking-wide">Tenants summary</h4>
                <MoreVertical size={14} className="text-gray-400 cursor-pointer" />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-center">
                {/* Donut Chart Mockup */}
                <div className="relative w-20 h-20 flex-shrink-0">
                    <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                        <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#f3f4f6" strokeWidth="4" />
                        <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#EC4899" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="0" className="drop-shadow-sm" />
                        <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#3B82F6" strokeWidth="4" strokeDasharray="30 70" strokeDashoffset="-20" className="drop-shadow-sm" />
                        <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#2DD4BF" strokeWidth="4" strokeDasharray="35 65" strokeDashoffset="-50" className="drop-shadow-sm" />
                        <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#A855F7" strokeWidth="4" strokeDasharray="15 85" strokeDashoffset="-85" className="drop-shadow-sm" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="font-medium text-gray-800 text-xs">3002</span>
                        <span className="text-[7px] text-gray-400 font-medium leading-tight">Tenant<br />total count</span>
                    </div>
                </div>

                {/* Table Data */}
                <div className="flex-1 w-full">
                    <div className="grid grid-cols-5 gap-1 mb-2 text-[8px] text-gray-400 font-medium border-b border-gray-100 pb-1">
                        <span>Type</span>
                        <span className="col-span-1">Weightage</span>
                        <span className="text-center">Count</span>
                        <span className="text-right">Collected</span>
                        <span className="text-right">Due</span>
                    </div>
                    <div className="space-y-2">
                        {data.map((item, idx) => (
                            <div key={idx} className="grid grid-cols-5 gap-1 items-center text-[9px] text-gray-600 font-medium">
                                <span className="text-gray-800 whitespace-nowrap">{item.type}</span>

                                {/* Progress Bar Visual */}
                                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full ${item.color} ${item.percent}`}></div>
                                </div>

                                <span className="text-center">{item.count}</span>
                                <span className="text-right">{item.collected}</span>
                                <span className="text-right text-gray-400">{item.due}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const CrmesCta = () => {

    const features = [
        {
            icon: Users,
            title: "Seamless Collaboration",
            description: "Empower your team to work together effortlessly, ensuring everyone stays on the same page."
        },
        {
            icon: Zap,
            title: "Real-Time Insights",
            description: "Make informed decisions instantly with live data analytics and comprehensive reporting tools."
        },
        {
            icon: Rocket,
            title: "Enhanced Productivity",
            description: "Automate routine tasks and optimize workflows to focus on what truly matters—growth."
        }
    ];

    return (
        <section className='bg-red pt-16  pr-4 md:pr-9 lg:pr-16 xl:pr-20 2xl:pr-30 overflow-hidden rounded-t-2xl'>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-8'>

                {/* Left Column: Image & Overlay */}
                <div className='relative '>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='space-y-4   pl-4 md:pl-9 lg:pl-16 xl:pl-20 2xl:pl-30'
                    >
                        <h4 className='text-white text-lg md:text-xl font-medium tracking-wider uppercase'>CRM Benefits</h4>
                        <h2 className='text-white md:text-4xl text-3xl lg:text-5xl font-medium leading-tight'>
                            Ready to Streamline Your <br className='hidden xl:block' /> Business Operations?
                        </h2>
                    </motion.div>

                    <div className='relative'>
                        {/* Main Image */}
                        <motion.img
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            src={Crm2}
                            alt="CRM Dashboard Preview"
                            className='relative -left-16 sm:-left-20 w-[100%]  '
                        />

                        {/* Floater Card - Tenants Summary */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
                            className='absolute -bottom-6 custom-size:-bottom-6 custom-size-two:bottom-12  xl:-bottom-8 right-4 md:-right-8 lg:right-0 xl:right-10 z-10 hidden sm:block'
                        >
                            <TenantsSummaryCard />
                        </motion.div>
                    </div>
                </div>

                {/* Right Column: Content & Features */}
                <div className='flex flex-col justify-center  space-y-10 pb-6 sm:pb-0 pl-8 sm:pl-0'>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-gray-300  lg:text-2xl leading-relaxed font-medium'
                    >
                        Our CRM empowers teams to build stronger customer relationships, streamline workflows, boost productivity, and unlock real growth through intelligent automation and data-driven insights.
                    </motion.p>

                    <div className='space-y-6 py-4 '>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                whileHover={{ scale: 1.02 }}
                                className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all max-w-4xl  duration-300 group'
                            >
                                <div className='flex flex-col sm:flex-row sm:items-center gap-4 mb-3'>
                                    <div className='p-3 bg-primary-red/10 rounded-full w-fit group-hover:bg-primary-red group-hover:text-white transition-colors duration-300'>
                                        <feature.icon className='w-6 h-6 text-primary-red group-hover:text-white transition-colors duration-300' />
                                    </div>
                                    <h3 className='font-medium text-xl text-primary-black'>{feature.title}</h3>
                                </div>
                                <p className='text-gray-600 leading-relaxed text-sm md:text-base'>
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CrmesCta