import React from 'react'
import { motion } from 'framer-motion'
import { Headphones, Users, Database, Target, TrendingUp, Handshake, Globe, Settings, Zap } from 'lucide-react'
import { AutoMakeTask, CrmClient, CrmCore, CrmHeroOne, Footer, Header } from '../Componenets'

const Bpo = () => {
    return (
        <>
            {/* heaader  */}
            <Header />

            {/* Hero Section */}
            <CrmHeroOne
                title={<>Global <span className="text-primary-red">BPO</span> Solutions to Scale Your Business</>}
                description="Optimize your operations with our world-class Business Process Outsourcing services. We handle the complexity so you can focus on growth."
                btn1Text="See Our Services"
                btn2Text="Get a Quote"
            />

            {/* Core BPO Services Section */}
            <CrmCore
                title={(
                    <>
                        Strategic Business <br />
                        <span className="relative inline-block mt-2 font-medium">
                            Process Excellence
                        </span>
                    </>
                )}
                mainDescription="We provide specialized outsourcing solutions designed to improve customer satisfaction and streamline back-office efficiency."
                features={[
                    {
                        id: 1,
                        title: "Customer Support",
                        description: "Multichannel 24/7 support providing exceptional customer experiences via phone, email, and live chat.",
                        icon: <Headphones size={40} className="text-white" />
                    },
                    {
                        id: 2,
                        title: "Back Office Ops",
                        description: "Streamlined administrative support, including data entry, processing, and document management.",
                        icon: <Database size={40} className="text-white" />
                    },
                    {
                        id: 3,
                        title: "Talent Solutions",
                        description: "Access to a global pool of skilled professionals tailored to meet your specific business requirements.",
                        icon: <Users size={40} className="text-white" />
                    }
                ]}
            />

            {/* New Detailed Section 1: The Strategic Value */}
            <section className="py-20 bg-slate-50 custom-padding font-outfit">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight">
                            Why BPO Outsourcing <br /> Is Your Competitive Edge
                        </h2>
                        <div className="w-20 h-1 bg-primary-red rounded-full"></div>
                        <p className="text-slate-700 text-lg leading-relaxed text-justify">
                            In an increasingly competitive global market, efficiency is paramount. Our BPO services allow you to leverage specialized expertise and technology without the heavy investment of in-house infrastructure. We don't just process tasks; we optimize them for quality and speed.
                        </p>
                        <p className="text-slate-700 text-lg leading-relaxed text-justify">
                            Partnering with ProcessIQ Tech means significantly reducing operational costs while improving service delivery standards. Our scalable solutions grow with your business, ensuring you always have the right resources at the right time.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {[
                            { icon: <Target className="text-primary-red" />, title: "Precision" },
                            { icon: <TrendingUp className="text-primary-red" />, title: "Scalability" },
                            { icon: <Globe className="text-primary-red" />, title: "Global Reach" },
                            { icon: <Handshake className="text-primary-red" />, title: "Trusted Partnership" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center gap-4 text-center border border-slate-100 hover:border-primary-red/20 transition-all">
                                {item.icon}
                                <span className="font-medium text-slate-800">{item.title}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <section className='flex flex'>

            </section>

            {/* Efficiency Section */}
            <AutoMakeTask
                title="Automated Workflows for Maximum BPO Efficiency"
                description="We integrate advanced automation tools with human expertise to deliver high-quality results with significantly reduced turnaround times."
                points={[
                    "AI-Driven Quality Control",
                    "Seamless CRM Integration",
                    "Real-time Performance Reporting"
                ]}
                btnText="Optimize Your Workflow"
            />

            {/* New Detailed Section 2: Our Methodology */}
            <section className="py-20 bg-white custom-padding font-outfit">
                <div className=" text-center space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-medium text-slate-900"
                    >
                        Our Bpo Implementation Journey
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
                        {
                            [
                                {
                                    step: "01",
                                    title: "Discovery & Analysis",
                                    desc: "We begin by understanding your unique business processes, pain points, and objectives. Our team analyzes your current workflows to identify areas where outsourcing can provide the most significant impact on ROI and operational performance."
                                },
                                {
                                    step: "02",
                                    title: "Process Design",
                                    desc: "We design a customized outsourcing roadmap, integrating the right mix of technology and skilled personnel. This include setting up secure communication channels, defining SLAs, and training our teams to mirror your brand's standards and culture."
                                },
                                {
                                    step: "03",
                                    title: "Execution & Scale",
                                    desc: "Once deployed, we focus on continuous improvement. Our managers monitor performance in real-time, using data-driven insights to refine processes, ensure absolute quality compliance, and scale operations as your business requirements evolve."
                                }
                            ].map((method, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-100"
                                >
                                    <span className="text-5xl font-black text-primary-red/20">{method.step}</span>
                                    <h3 className="text-xl font-medium text-slate-900">{method.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">{method.desc}</p>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </section>

            {/* crm client  */}
            <CrmClient />
            {/* fotter  */}
            <Footer />
        </>
    )
}

export default Bpo