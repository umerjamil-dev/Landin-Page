import React from 'react'
import { motion } from 'framer-motion'
import { Monitor, ShieldCheck, Cloud, Server, Lock, Cpu } from 'lucide-react'
import { AutoMakeTask, CrmClient, CrmCore, CrmHeroOne, Footer, Header } from '../Componenets'

const ManageiT = () => {
    return (
        <>
            {/* header  */}
            <Header />

            {/* Hero Section */}
            <CrmHeroOne
                title={<>Proactive <span className="text-primary-red">Managed IT</span> Services for Your Business</>}
                description="Streamline your operations with enterprise-grade IT infrastructure management, 24/7 proactive monitoring, and advanced security solutions."
                btn1Text="View Solutions"
                btn2Text="Free IT Audit"
            />

            {/* Core IT Services Section */}
            <CrmCore
                title={(
                    <>
                        Comprehensive IT <br />
                        <span className="relative inline-block mt-2 font-medium">
                            Infrastructure Support
                        </span>
                    </>
                )}
                mainDescription="We provide the technical expertise and support needed to keep your systems running smoothly, allowing you to focus on your core business goals."
                features={[
                    {
                        id: 1,
                        title: "Network Management",
                        description: "24/7 monitoring and optimization of your network infrastructure to ensure maximum uptime and connectivity.",
                        icon: <Monitor size={40} className="text-white" />
                    },
                    {
                        id: 2,
                        title: "Cybersecurity",
                        description: "Advanced threat protection, security audits, and compliance management to safeguard your sensitive data.",
                        icon: <ShieldCheck size={40} className="text-white" />
                    },
                    {
                        id: 3,
                        title: "Cloud Solutions",
                        description: "Seamless cloud migration, management, and optimization for scalable and flexible business operations.",
                        icon: <Cloud size={40} className="text-white" />
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
                            Why Strategic Managed IT <br /> Is Critical For Your Growth
                        </h2>
                        <div className="w-20 h-1 bg-primary-red rounded-full"></div>
                        <p className="text-slate-700 text-lg leading-relaxed text-justify">
                            In today's digital-first economy, your IT infrastructure is the backbone of your business. Our Managed IT services go beyond just fixing problems; we become your strategic partner. We anticipate challenges, implement cutting-edge technology, and ensure your systems scale as you grow.
                        </p>
                        <p className="text-slate-700 text-lg leading-relaxed text-justify">
                            By offloading your IT management to ProcessIQ Tech, you reduce operational risks, eliminate unpredictable repair costs, and gain access to a dedicated team of experts without the overhead of an internal IT department.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {[
                            { icon: <Server className="text-primary-red" />, title: "Server Mgmt" },
                            { icon: <Lock className="text-primary-red" />, title: "Data Security" },
                            { icon: <Cpu className="text-primary-red" />, title: "Hardware Support" },
                            { icon: <Cloud className="text-primary-red" />, title: "Hybrid Cloud" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center gap-4 text-center border border-slate-100 hover:border-primary-red/20 transition-all">
                                {item.icon}
                                <span className="font-medium text-slate-800">{item.title}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Proactive Monitoring Section */}
            <AutoMakeTask
                title="Proactive Monitoring To Prevent System Failures"
                description="Our automated IT monitoring platform identifies vulnerabilities and performance bottlenecks before they disrupt your workflow."
                points={[
                    "Pre-emptive Threat Neutralization",
                    "Automated System Patching",
                    "Real-time Performance Metrics"
                ]}
                btnText="Get Started Now"
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
                        Our Managed IT Methodology
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
                        {
                            [
                                {
                                    step: "01",
                                    title: "Assess & Audit",
                                    desc: "We perform a comprehensive assessment of your current IT environment, including infrastructure, network performance, security posture, and operational processes. Our deep-dive analysis helps identify potential risks, security gaps, inefficiencies, and opportunities for improvement. Based on these insights, we create a clear and strategic roadmap aligned with your business goals."
                                },
                                {
                                    step: "02",
                                    title: "Optimize & Secure",
                                    desc: "After the assessment phase, we optimize your systems to enhance performance, reliability, and operational efficiency. We implement industry best-practice security protocols, strengthen system defenses, and ensure your infrastructure is protected against evolving threats while maintaining smooth and scalable operations."
                                },
                                {
                                    step: "03",
                                    title: "Manage & Monitor",
                                    desc: "Our dedicated 24/7 team continuously manages and monitors your IT environment to ensure stability, security, and uninterrupted performance. Through proactive monitoring, regular updates, and ongoing optimization, we help prevent issues before they impact your business while supporting continuous improvement and long-term growth."
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

export default ManageiT