import React from 'react'
import { motion } from 'framer-motion'
import { AutoMakeTask, CrmBlogs, CrmModule, CrmOne, CrmService, CrmTools, CrmesCta, Footer, Header, SliderOne, VideoIcon } from '../Componenets'
import { CrmMainOne, Line1, Line2 } from '../assets'
import { Link } from 'react-router-dom'

const Crm = () => {
    // animation variants 

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className='overflow-x-hidden'>
            {/* header  */}
            <Header />
            {/* main content  */}
            <main className='custom-padding py-20 relative min-h-[80vh] flex flex-col justify-center overflow-hidden'>
                {/* Decorative Elements - Animated Entrance */}
                <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    viewport={{ once: true }}
                    className='absolute top-20 md:top-40 left-0 w-[25%] md:w-[18%] -z-10'
                    src={Line1}
                    alt="Decorative Line"
                />
                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    viewport={{ once: true }}
                    className='absolute bottom-0 right-0 w-[25%] md:w-[18%] -z-10'
                    src={Line2}
                    alt="Decorative Line"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='flex flex-col items-center justify-center gap-6 md:gap-8 z-10'
                >
                    <motion.h4 variants={itemVariants} className='text-xl md:text-2xl font-medium text-primary-black text-center tracking-wide'>
                        CRM made simple
                    </motion.h4>

                    <motion.h2 variants={itemVariants} className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl custom-size-two:text-6xl xl:text-7xl font-medium text-primary-black text-center capitalize leading-tight'>
                        all in one CRM for <br className='hidden md:block' /> modern teams
                    </motion.h2>

                    <motion.p variants={itemVariants} className='text-center mx-auto max-w-3xl text-gray-700 text-base md:text-lg leading-relaxed px-4'>
                        ProcessIQ Tech CRM enables mid-to-large scale enterprises to consolidate customer touchpoints into a single, intelligent database. Experience seamless integration, real-time analytics, and automated lead nurturing designed specifically for modern sales teams.
                    </motion.p>

                    <motion.div variants={itemVariants} className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mt-2'>
                        <Link to={'/contact'}>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(237, 28, 36, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className='bg-primary-red text-white px-8 py-3 rounded-full capitalize text-lg font-medium cursor-pointer transition-all duration-300 w-full sm:w-auto'
                            >
                                request a demo
                            </motion.button>
                        </Link>
                        <Link to={'/contact'}>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#ED1C24", boxShadow: "0px 10px 20px rgba(12, 12, 12, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className='bg-primary-black text-white px-8 py-3 rounded-full capitalize text-lg font-medium cursor-pointer transition-all duration-300 w-full sm:w-auto'
                            >
                                Getting Started
                            </motion.button></Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='flex justify-center items-center mt-12 md:mt-20 w-full'
                >
                    <CrmModule />
                </motion.div>

            </main>
            {/* slider  */}
            <SliderOne />
            {/* crm one  */}
            <CrmOne />
            {/* crm service  */}
            <CrmService />
            {/* crm cta  */}
            <CrmesCta />
            {/* crm tools  */}
            <CrmTools />
            {/* auto make task  */}
            <AutoMakeTask
                title="Automate Tasks To Increase Efficiency And Reduce Manual Effort"
                description="Gain Precise Insights For Your Business With Our Advanced Analytics Tools. Make Informed Decisions Based On Accurate, Real-Time Data"
                points={[
                    "Actionable Insights",
                    "Enhanced Decision-Making",
                    "Improved Efficiency"
                ]}
                btnText="Learn More"
            />
            {/* footer  */}
            <Footer />
        </div>
    )
}

export default Crm